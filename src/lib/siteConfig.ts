// =============================================================================
// SITE CONFIG — single source of truth for company identity, contact info,
// and the honesty flags that gate every trust claim on the site.
//
// HONESTY RULE: every boolean below defaults to the true, current state of
// the business as of scaffolding (a brand-new company with no pilot, no
// aircraft, and no track record yet). Flip a flag to `true` ONLY once the
// underlying fact is real — doing otherwise puts a false claim on a public
// website. See /README.md "Placeholders to replace before launch" for the
// full list of non-boolean placeholders (name, phone, email, address, etc).
// =============================================================================

export const companyName = "[COMPANY NAME]";
export const companyShortName = "[COMPANY NAME]"; // used where space is tight (nav, footer)
export const companyLegalName = "[COMPANY NAME], LLC"; // update once the LLC is formed and named

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example-drone-co.com"; // PLACEHOLDER domain

export const contact = {
  phone: "(406) 555-0100", // PLACEHOLDER — not a working number
  phoneHref: "+14065550100",
  email: "info@example-drone-co.com", // PLACEHOLDER
  proceurementEmail: "contracts@example-drone-co.com", // PLACEHOLDER — for CO/procurement contacts
  addressLine1: "[STREET ADDRESS]",
  addressCity: "Missoula", // PLACEHOLDER base city — change to wherever the company actually incorporates/operates from
  addressState: "MT",
  addressZip: "[ZIP]",
  mailingNote:
    "Mailing address and registered agent to be finalized with LLC formation.",
};

export const social = {
  // Leave empty until real accounts exist. Each non-empty value renders an icon in the footer.
  linkedin: "",
  instagram: "",
  youtube: "",
};

// -----------------------------------------------------------------------------
// TRUST / CREDENTIAL FLAGS
// Every one of these defaults to `false` because the underlying fact is not
// yet true for this company. Flip individually as each becomes real. Copy
// throughout the site must check these flags before asserting the
// corresponding claim — never hardcode the claim text.
// -----------------------------------------------------------------------------
export const flags = {
  /** At least one FAA Part 107 certified remote pilot is hired/contracted. */
  hasPart107Pilot: false,
  /** Company owns or leases at least one FAA-registered aircraft. */
  hasAircraft: false,
  /** Aircraft fleet is Blue UAS / NDAA-compliant (required for many federal buys). */
  ndaaCompliantFleet: false,
  /** Company LLC is formed and in good standing. */
  llcFormed: false,
  /** General liability insurance is bound and verifiable (COI available on request). */
  insuranceLiability: false,
  /** Hull (aircraft physical damage) insurance is bound. */
  insuranceHull: false,
  /** Non-owned/rented aircraft liability rider in place — relevant before owning aircraft. */
  insuranceNonOwned: false,
  /** Registered and active in SAM.gov with a UEI. Required for most federal contracts. */
  samRegistered: false,
  /** Registered as a small business / socio-economic certifications (8(a), WOSB, VOSB, etc). Edit certificationsList below once any apply. */
  hasSmallBusinessCert: false,
  /** A real, reviewable capability statement PDF exists at /capability-statement.pdf */
  capabilityStatementAvailable: false,
  /** At least one real, named, permission-granted client testimonial exists. */
  hasTestimonials: false,
  /** At least one real client logo with permission to display exists. */
  hasClientLogos: false,
  /** At least one real sample deliverable (orthomosaic, thermal report, etc) exists to show, not just a labeled placeholder. */
  hasSampleDeliverables: false,
  /** Years actively operating commercially. 0 = brand new, hide "X years of experience" badge. */
  yearsInOperation: 0,
};

// Socio-economic / set-aside certifications. Only list items that are real and active;
// render nothing if hasSmallBusinessCert is false.
export const certificationsList: string[] = [
  // e.g. "Economically Disadvantaged Woman-Owned Small Business (EDWOSB)",
];

// NAICS codes under consideration for registration — informational, not a claim of
// active SAM.gov registration (gated separately by flags.samRegistered). Confirm the
// final list with an accountant or registration specialist before filing.
export const naicsCodes = [
  { code: "541370", label: "Surveying and Mapping (except Geophysical)", primary: true },
  { code: "541990", label: "All Other Professional, Scientific, and Technical Services", primary: false },
  { code: "541922", label: "Commercial Photography", primary: false },
  { code: "541512", label: "Computer Systems Design Services (GIS/data deliverables)", primary: false },
];

export const legalNotes = {
  // Flagged for manual legal verification before launch — do not change the gating
  // without confirming current statute text. See README prerequisites checklist.
  montanaTrespassCarveoutVerified: false,
  nationalParksDroneBan: true, // well-established federal rule; safe to state directly
};

export const analytics = {
  // Set to a real ID via env var to enable. No tracking loads until then.
  plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "",
  vercelAnalytics: process.env.NEXT_PUBLIC_ENABLE_VERCEL_ANALYTICS === "true",
};

export const quoteForm = {
  // Email delivery provider for the quote form API route. Unset = submissions are
  // logged server-side only (see src/app/api/quote/route.ts) and the UI says so.
  resendApiKeyConfigured: Boolean(process.env.RESEND_API_KEY),
  destinationEmail: process.env.QUOTE_FORM_TO_EMAIL ?? contact.email,
};
