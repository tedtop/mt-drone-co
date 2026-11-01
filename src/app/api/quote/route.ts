import { NextResponse, type NextRequest } from "next/server";
import { companyName, quoteForm } from "@/lib/siteConfig";

interface QuoteSubmission {
  service?: string;
  location?: string;
  size?: string;
  timeline?: string;
  requesterType?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  company_website?: string; // honeypot
  formRenderedAt?: number;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Minimum time (ms) that must elapse between the form mounting client-side
// and the submission arriving here. Real humans take at least a few seconds
// to fill out a form; a near-instant submission is a strong bot signal.
const MIN_SUBMIT_MS = 3000;

// --- Best-effort, in-memory rate limiting -----------------------------------
// This is intentionally simple: a module-level Map keyed by IP. It resets on
// every redeploy/cold start and is NOT shared across serverless instances, so
// it only throttles a single warm instance — it is not a real rate limit.
// Production traffic should move this to a durable, shared store (e.g.
// Upstash Redis). NOTE: this limitation also needs to be documented in the
// project README (tracked as a separate step).
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const submissionsByIp = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissionsByIp.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  submissionsByIp.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  return "unknown";
}

function validate(body: QuoteSubmission): string | null {
  if (!body.service || !body.service.trim()) return "Missing service type.";
  if (!body.location || !body.location.trim()) return "Missing location.";
  if (!body.timeline || !body.timeline.trim()) return "Missing timeline.";
  if (body.requesterType !== "private" && body.requesterType !== "government") {
    return "Missing or invalid requester type.";
  }
  if (!body.name || !body.name.trim()) return "Missing name.";
  if (!body.email || !EMAIL_RE.test(body.email.trim())) return "Missing or invalid email.";
  if (!body.message || !body.message.trim()) return "Missing project details.";
  return null;
}

export async function POST(request: NextRequest) {
  let body: QuoteSubmission;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  // Honeypot: if filled in, it's a bot. Pretend success without processing
  // anything — don't tip bots off that they were caught.
  const honeypotFilled = Boolean(body.company_website && body.company_website.trim());

  // Bot-timing heuristic: reject submissions that come back implausibly fast.
  const elapsed =
    typeof body.formRenderedAt === "number" ? Date.now() - body.formRenderedAt : 0;
  const tooFast = typeof body.formRenderedAt === "number" && elapsed < MIN_SUBMIT_MS;

  if (honeypotFilled || tooFast) {
    return NextResponse.json({ ok: true });
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
  }

  const submission = {
    service: body.service!.trim(),
    location: body.location!.trim(),
    size: body.size?.trim() || "",
    timeline: body.timeline!.trim(),
    requesterType: body.requesterType as "private" | "government",
    name: body.name!.trim(),
    email: body.email!.trim(),
    phone: body.phone?.trim() || "",
    message: body.message!.trim(),
    receivedAt: new Date().toISOString(),
  };

  if (quoteForm.resendApiKeyConfigured) {
    try {
      const subject = `[${submission.requesterType === "government" ? "Government/Agency" : "Private"}] Quote request: ${submission.service}`;
      const textBody = [
        `Requester type: ${submission.requesterType}`,
        `Service: ${submission.service}`,
        `Location: ${submission.location}`,
        `Acreage / linear miles: ${submission.size || "(not provided)"}`,
        `Timeline: ${submission.timeline}`,
        ``,
        `Name: ${submission.name}`,
        `Email: ${submission.email}`,
        `Phone: ${submission.phone || "(not provided)"}`,
        ``,
        `Message:`,
        submission.message,
      ].join("\n");

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // PLACEHOLDER sender — requires a verified sending domain in Resend
          // before this will actually deliver. Update once a real domain
          // (e.g. yourdomain.com) is verified.
          from: `${companyName} Website <quotes@yourdomain.com>`,
          to: quoteForm.destinationEmail,
          subject,
          text: textBody,
        }),
      });

      if (!res.ok) {
        // Fall back to logging so the submission isn't lost if Resend errors.
        console.log("[quote-submission] email send failed, logging instead", JSON.stringify(submission));
      }
    } catch {
      console.log("[quote-submission] email send threw, logging instead", JSON.stringify(submission));
    }
  } else {
    // No email provider configured yet — log so the submission is at least
    // visible in deployment logs. Do not expose this detail to the end user.
    console.log("[quote-submission]", JSON.stringify(submission));
  }

  return NextResponse.json({ ok: true });
}
