<!-- Internal template only. Not linked from the live site — publishing a real
capability statement PDF still requires flags.capabilityStatementAvailable
to be true in src/lib/siteConfig.ts. Use this as the source doc to turn into
a one-page PDF once SAM.gov registration, NAICS selection, and insurance are
finalized; replace every bracketed placeholder with real data first. -->

# Capability Statement — Template

> **Montana Drone Works** · Montana commercial drone (UAS) services
> One page, federal-contracting format. Replace all bracketed placeholders
> before producing a PDF. Do not add past performance, certifications, or
> years-of-experience claims until they are real — see `src/lib/siteConfig.ts`
> `flags` for the gating booleans that must flip first.

---

## Company Information

| Field | Value |
|---|---|
| Legal name | Montana Drone Works, LLC (per `companyLegalName` in `siteConfig.ts` — confirm once the LLC is actually filed) |
| DBA / short name | Montana Drone Works |
| Address | `[STREET ADDRESS]`, `[CITY]`, MT `[ZIP]` — not yet published; fill in once the owner confirms a mailing address |
| Phone | (407) 756-4905 (per `contact.phone`) |
| Procurement email | `[PROCUREMENT EMAIL]` — still placeholder in `siteConfig.ts`, needs a real inbox before this goes out |
| Website | https://mt-drone-co.vercel.app (per `siteUrl` — swap for a custom domain once purchased) |
| UEI | `[UEI PENDING SAM.GOV REGISTRATION]` |
| CAGE code | `[CAGE PENDING SAM.GOV REGISTRATION]` |
| DUNS | `[DUNS — DEPRECATED BY SAM.GOV; OMIT UNLESS A REQUESTING AGENCY SPECIFICALLY ASKS]` |
| SAM.gov registration status | `[PENDING — NOT YET REGISTERED]` |
| Business structure | `[LLC — PENDING FORMATION]` |
| State of incorporation | Montana |

---

## Core Competencies

Drawn from our active service lines (`src/lib/services-data.ts`):

- Aerial mapping and photogrammetry (orthomosaics, point clouds, digital
  surface/terrain models, 3D models)
- Aerial surveying support feeding a licensed surveyor's workflow
- Utility and power line visual/thermal inspection
- Thermal inspection (roofs, solar arrays, electrical infrastructure)
- On-call wildfire and prescribed-burn aerial reconnaissance
- Search and rescue / public-safety aerial support under agency direction
- Construction and asset progress monitoring (recurring capture, volumetrics)
- Agricultural and rangeland aerial assessment
- Aerial photography and videography
- Real estate and land/parcel aerial imagery
- Event coverage
- Drone program training and consulting (Part 107 exam prep, SOP guidance)

---

## Differentiators

- Direct, responsive communication with a single point of contact — no
  subcontractor layers.
- Flight operations built around FAA compliance and airspace deconfliction
  from day one, not retrofitted.
- An explicit, public readiness checklist (see `/government-enterprise` on
  the live site) instead of vague claims about capacity or experience.
- Procurement approach built around Blue UAS / NDAA-compliant aircraft for
  work that requires it.
- Montana-based, with Montana agencies and rural/tribal government needs as
  a founding priority market.

---

## NAICS Codes

(Per `naicsCodes` in `siteConfig.ts` — informational only; final list to be
confirmed with an accountant or registration specialist during SAM.gov
registration.)

| Code | Description | Role |
|---|---|---|
| 541370 | Surveying and Mapping (except Geophysical) | Primary |
| 541990 | All Other Professional, Scientific, and Technical Services | Secondary |
| 541922 | Commercial Photography | Secondary |
| 541512 | Computer Systems Design Services (GIS/data deliverables) | Secondary |

---

## Past Performance

**[NONE YET — NEW COMPANY]**

We are a newly formed company and have no completed government or
enterprise contracts to list. We will not fabricate past performance,
and we will update this section only with real, verifiable contract
references once they exist.

---

## Certifications / Socio-Economic Status

**[NONE HELD YET]**

No small-business or socio-economic set-aside certifications (8(a), WOSB,
EDWOSB, VOSB, HUBZone, etc.) are currently held. This section tracks
`flags.hasSmallBusinessCert` in `src/lib/siteConfig.ts`, which is `false`
as of this writing — do not list a certification here until that flag is
flipped to `true` and the certification is real and active. See
`certificationsList` in the same file for where to add specific
certifications once earned.

---

## Equipment and Compliance Posture

- Aircraft: `[NONE OWNED YET — PROCUREMENT PLAN PRIORITIZES BLUE UAS /
  NDAA-COMPLIANT PLATFORMS]`
- Pilots: `[NO FAA PART 107 PILOT ON STAFF YET — TO BE BROUGHT ON AT
  CONTRACT AWARD OR AS VOLUME WARRANTS]`
- Insurance: `[GENERAL LIABILITY — TO BE BOUND BEFORE FIRST COMMERCIAL
  FLIGHT; HULL AND NON-OWNED AIRCRAFT RIDERS AS APPLICABLE]`
- SAM.gov: `[NOT YET REGISTERED]`

---

## Point of Contact

| Role | Contact |
|---|---|
| Procurement / contracting officer contact | `[PROCUREMENT EMAIL]` (per `contact.proceurementEmail`) |
| Phone | `[PHONE]` (per `contact.phone`) |

---

*This capability statement is a draft template. It is not published or
linked from the live site. Finalize all bracketed fields once SAM.gov
registration, NAICS selection, insurance, and any certifications are
confirmed, then export to PDF for distribution to contracting officers.*
