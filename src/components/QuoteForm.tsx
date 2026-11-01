"use client";

import { useId, useState } from "react";
import type { FormEvent } from "react";
import { services } from "@/lib/services-data";
import { cities } from "@/lib/cities-data";

type RequesterType = "private" | "government";

interface FormState {
  service: string;
  location: string;
  size: string;
  timeline: string;
  requesterType: RequesterType | "";
  name: string;
  email: string;
  phone: string;
  message: string;
  // Honeypot — real users never see or fill this field.
  company_website: string;
}

const initialFormState = (
  initialService: string,
  initialLocation: string
): FormState => ({
  service: initialService,
  location: initialLocation,
  size: "",
  timeline: "",
  requesterType: "",
  name: "",
  email: "",
  phone: "",
  message: "",
  company_website: "",
});

const timelineOptions = [
  "ASAP",
  "Within 30 days",
  "1–3 months",
  "Just exploring / no firm date",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldErrors = Partial<Record<keyof FormState | "requesterType", string>>;

export function QuoteForm({
  initialService = "",
  initialLocation = "",
}: {
  initialService?: string;
  initialLocation?: string;
}) {
  const [form, setForm] = useState<FormState>(() =>
    initialFormState(initialService, initialLocation)
  );
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [submitError, setSubmitError] = useState<string>("");
  // Captured once, at mount, so the API route can reject implausibly fast
  // (likely automated) submissions. Fine to compute client-side here since
  // this is already a client component — it's a timing heuristic, not a
  // security boundary.
  const [mountedAt] = useState<number>(() => Date.now());

  const idPrefix = useId();

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!form.service) next.service = "Please select a service type.";
    if (!form.location.trim()) next.location = "Please enter a location.";
    if (!form.timeline) next.timeline = "Please select a timeline.";
    if (!form.requesterType)
      next.requesterType = "Please choose private or government/agency.";
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!EMAIL_RE.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Please add a few details about the project.";
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    setSubmitError("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: form.service,
          location: form.location,
          size: form.size,
          timeline: form.timeline,
          requesterType: form.requesterType,
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          company_website: form.company_website,
          formRenderedAt: mountedAt,
        }),
      });

      const data = (await res.json().catch(() => null)) as
        | { ok: boolean; error?: string }
        | null;

      if (!res.ok || !data?.ok) {
        setStatus("error");
        setSubmitError(
          data?.error ||
            "Something went wrong submitting the form. Please try again, or email us directly."
        );
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setSubmitError(
        "Something went wrong submitting the form. Please try again, or email us directly."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-lg border border-accent-500/30 bg-accent-500/5 p-6 text-brand-950"
      >
        <h2 className="text-lg font-bold">Request received</h2>
        <p className="mt-2 text-slate-700">
          Thanks — we&apos;ll follow up within 1–2 business days to confirm scope and
          timeline. For a very small or informal request, that follow-up may simply be
          a conversation about whether we&apos;re the right fit yet.
        </p>
      </div>
    );
  }

  const fieldId = (name: string) => `${idPrefix}-${name}`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {status === "error" && submitError ? (
        <div
          role="alert"
          className="rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-800"
        >
          {submitError}
        </div>
      ) : null}

      {/* Honeypot field — visually hidden but still in the accessibility tree's
          tab order excluded via tabIndex=-1, and hidden from assistive tech via
          aria-hidden. A bot that fills this out gets silently rejected server-side. */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={fieldId("company_website")}>Company website</label>
        <input
          type="text"
          id={fieldId("company_website")}
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          value={form.company_website}
          onChange={(e) => update("company_website", e.target.value)}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor={fieldId("service")}
            className="block text-sm font-semibold text-brand-950"
          >
            Service type
          </label>
          <select
            id={fieldId("service")}
            name="service"
            required
            className="focus-ring mt-2 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-brand-950"
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
            aria-invalid={errors.service ? "true" : undefined}
            aria-describedby={errors.service ? fieldId("service-error") : undefined}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
            <option value="other">Other / not sure</option>
          </select>
          {errors.service ? (
            <p id={fieldId("service-error")} className="mt-1 text-sm text-red-700">
              {errors.service}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor={fieldId("location")}
            className="block text-sm font-semibold text-brand-950"
          >
            Location (city/area in Montana)
          </label>
          <input
            type="text"
            id={fieldId("location")}
            name="location"
            list={fieldId("location-suggestions")}
            required
            placeholder="e.g. Bozeman, or a general area"
            className="focus-ring mt-2 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-brand-950"
            value={form.location}
            onChange={(e) => update("location", e.target.value)}
            aria-invalid={errors.location ? "true" : undefined}
            aria-describedby={errors.location ? fieldId("location-error") : undefined}
          />
          <datalist id={fieldId("location-suggestions")}>
            {cities.map((city) => (
              <option key={city.slug} value={city.name} />
            ))}
          </datalist>
          {errors.location ? (
            <p id={fieldId("location-error")} className="mt-1 text-sm text-red-700">
              {errors.location}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor={fieldId("size")}
            className="block text-sm font-semibold text-brand-950"
          >
            Acreage / linear miles{" "}
            <span className="font-normal text-slate-500">
              (optional — only relevant to mapping, inspection, or survey-type jobs)
            </span>
          </label>
          <input
            type="text"
            id={fieldId("size")}
            name="size"
            placeholder="e.g. 40 acres, or 12 linear miles"
            className="focus-ring mt-2 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-brand-950"
            value={form.size}
            onChange={(e) => update("size", e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor={fieldId("timeline")}
            className="block text-sm font-semibold text-brand-950"
          >
            Timeline
          </label>
          <select
            id={fieldId("timeline")}
            name="timeline"
            required
            className="focus-ring mt-2 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-brand-950"
            value={form.timeline}
            onChange={(e) => update("timeline", e.target.value)}
            aria-invalid={errors.timeline ? "true" : undefined}
            aria-describedby={errors.timeline ? fieldId("timeline-error") : undefined}
          >
            <option value="">Select a timeline</option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.timeline ? (
            <p id={fieldId("timeline-error")} className="mt-1 text-sm text-red-700">
              {errors.timeline}
            </p>
          ) : null}
        </div>
      </div>

      <fieldset>
        <legend className="block text-sm font-semibold text-brand-950">
          Requester type
        </legend>
        <div
          className="mt-2 flex flex-col gap-2 sm:flex-row sm:gap-6"
          aria-invalid={errors.requesterType ? "true" : undefined}
          aria-describedby={
            errors.requesterType ? fieldId("requesterType-error") : undefined
          }
        >
          <label className="flex items-center gap-2 text-sm text-brand-950">
            <input
              type="radio"
              name="requesterType"
              value="private"
              className="focus-ring"
              checked={form.requesterType === "private"}
              onChange={() => update("requesterType", "private")}
            />
            Private business or individual
          </label>
          <label className="flex items-center gap-2 text-sm text-brand-950">
            <input
              type="radio"
              name="requesterType"
              value="government"
              className="focus-ring"
              checked={form.requesterType === "government"}
              onChange={() => update("requesterType", "government")}
            />
            Government / public agency
          </label>
        </div>
        {errors.requesterType ? (
          <p id={fieldId("requesterType-error")} className="mt-1 text-sm text-red-700">
            {errors.requesterType}
          </p>
        ) : null}
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-3">
        <div>
          <label
            htmlFor={fieldId("name")}
            className="block text-sm font-semibold text-brand-950"
          >
            Name
          </label>
          <input
            type="text"
            id={fieldId("name")}
            name="name"
            required
            autoComplete="name"
            className="focus-ring mt-2 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-brand-950"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby={errors.name ? fieldId("name-error") : undefined}
          />
          {errors.name ? (
            <p id={fieldId("name-error")} className="mt-1 text-sm text-red-700">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor={fieldId("email")}
            className="block text-sm font-semibold text-brand-950"
          >
            Email
          </label>
          <input
            type="email"
            id={fieldId("email")}
            name="email"
            required
            autoComplete="email"
            className="focus-ring mt-2 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-brand-950"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={errors.email ? fieldId("email-error") : undefined}
          />
          {errors.email ? (
            <p id={fieldId("email-error")} className="mt-1 text-sm text-red-700">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor={fieldId("phone")}
            className="block text-sm font-semibold text-brand-950"
          >
            Phone <span className="font-normal text-slate-500">(optional)</span>
          </label>
          <input
            type="tel"
            id={fieldId("phone")}
            name="phone"
            autoComplete="tel"
            className="focus-ring mt-2 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-brand-950"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor={fieldId("message")}
          className="block text-sm font-semibold text-brand-950"
        >
          Project details
        </label>
        <textarea
          id={fieldId("message")}
          name="message"
          required
          rows={5}
          placeholder="Tell us what you're trying to accomplish, site access notes, and anything else relevant to scoping this."
          className="focus-ring mt-2 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-brand-950"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? fieldId("message-error") : undefined}
        />
        {errors.message ? (
          <p id={fieldId("message-error")} className="mt-1 text-sm text-red-700">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-accent-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Request a Quote"}
      </button>
    </form>
  );
}
