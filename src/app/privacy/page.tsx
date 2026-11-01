import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { companyLegalName, companyName, contact, analytics, quoteForm } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${companyName} collects, uses, and protects information submitted through this website.`,
};

export default function PrivacyPage() {
  const analyticsEnabled = Boolean(analytics.plausibleDomain) || analytics.vercelAnalytics;

  return (
    <>
      <Section className="bg-brand-50">
        <SectionHeading eyebrow="Privacy" title="Privacy Policy" />
        <div className="mt-6 max-w-3xl rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <strong>Template notice:</strong> this is a plain-language privacy
          policy template reflecting what this website actually does today.
          It is not a substitute for legal advice. Have an attorney review
          and finalize this page before the site launches publicly.
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl space-y-10 text-slate-600">
          <div>
            <h2 className="text-xl font-bold text-brand-950">Who we are</h2>
            <p className="mt-2">
              This Privacy Policy applies to the website operated by{" "}
              {companyLegalName}. It describes what information we collect
              through this site, how we use it, and who it may be shared
              with.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-950">
              What we collect
            </h2>
            <p className="mt-2">
              We collect information you provide directly through the
              quote request form and the contact page, which may include
              your name, company, email address, phone number, project
              location, and project details you choose to share. We do not
              ask for or knowingly collect sensitive personal information
              through these forms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-950">
              How we use it
            </h2>
            <p className="mt-2">
              We use the information you submit only to respond to your
              inquiry or quote request — for example, to contact you about
              your project, provide a quote, or schedule a flight. We do not
              sell your information, and we do not share it with third
              parties for their own marketing purposes.
            </p>
            <p className="mt-2">
              {quoteForm.resendApiKeyConfigured ? (
                <>
                  Quote and contact form submissions are delivered to us by
                  email through a transactional email delivery provider,
                  which processes the message contents solely to deliver
                  that email to us.
                </>
              ) : (
                <>
                  Quote and contact form submissions are currently logged on
                  our server rather than delivered by a third-party email
                  provider. If we add email delivery through a transactional
                  provider in the future, that provider will process message
                  contents solely to deliver the email to us.
                </>
              )}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-950">
              Cookies and analytics
            </h2>
            {analyticsEnabled ? (
              <p className="mt-2">
                This site uses a website analytics tool to understand
                aggregate traffic patterns (such as which pages are visited
                and general geographic region of visitors). This is used to
                improve the site and is not used to identify you
                individually or combined with the contact information you
                submit through our forms.
              </p>
            ) : (
              <p className="mt-2">
                This site does not currently use cookies or third-party
                analytics or advertising trackers. If that changes, this
                section will be updated to describe what&apos;s in use and
                why.
              </p>
            )}
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-950">
              Data retention
            </h2>
            <p className="mt-2">
              We retain quote request and contact form submissions for as
              long as reasonably necessary to respond to your inquiry and
              maintain records of business communications, and delete or
              anonymize them when no longer needed for those purposes or
              for any legal or accounting obligation we may have.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-950">
              Your choices
            </h2>
            <p className="mt-2">
              You can ask us what information we hold about you, request a
              correction, or ask us to delete it, by contacting us using the
              details below. We will respond to reasonable requests.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-950">
              Changes to this policy
            </h2>
            <p className="mt-2">
              We may update this policy as the site or our data practices
              change. We&apos;ll update the date below when we do.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Last updated: template version, pending attorney review.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-950">
              Contact us about privacy
            </h2>
            <p className="mt-2">
              Questions about this policy or your information can be sent to{" "}
              <a href={`mailto:${contact.email}`} className="font-semibold text-accent-600 hover:text-accent-500">
                {contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
