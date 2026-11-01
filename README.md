# Terra Medicals

**[View live experience](https://terra-medical.vercel.app)** · A premium, responsive, interactive **fictional hospital website showcase** built by [Bespoke Technologies](https://www.bespoketech.com.ng).

> **Demo, not a hospital.** Terra Medicals is fictional. The doctors, credentials, departments, facilities, availability and appointment records are illustrative. Stock photographs are not portraits of the fictional clinicians. No medical services, real bookings, clinical advice, payments, patient records or secure authentication are provided.

## What is included

A cinematic marketing site with an original mint, forest and lime design system, softly animated scientific artwork, editorial typography and carefully controlled motion. The experience includes:

- Home, hospital perspective, six specialties and individual service details
- Four illustrative clinician profiles and individual detail pages
- Diagnostic test directory with expandable preparation notes
- Patient guide, FAQs, three original informational articles and contact page
- Multi-step appointment walkthrough: specialty → clinician → date/time → confirmation
- Public staff demo: appointment overview, status updates, search/filter, clinician directory, and demo reset
- Branded 1200 × 630 Open Graph preview, per-route SEO metadata, robots and sitemap
- Responsive navigation, keyboard-accessible interactions, reduced-motion support

### Local-only interactive state

There is **no database, backend, personal-data collection or production authentication**. Appointment data is held in `localStorage` in the browser where it was created. Visiting from a different browser/device will not see that change.

The admin login is only a visible demonstration gate. Its credentials are deliberately public:

| | Value |
|---|---|
| Username | `terra@demo.test` |
| Password | `TerraDemo2026!` |

These values are not secrets. They are displayed on the admin login page. **Never reuse this design as real access control.** Never enter real patient names, health records, or other sensitive information into this demo.

### Content and photography

All clinician names, credentials, schedules and case content are invented solely to demonstrate a hospital website's information architecture. Medical test descriptions are generic information and do not replace instructions from a clinician. Stock photos are loaded from Unsplash and represent *illustrative healthcare imagery*, not Terra staff or facilities.

No fake testimonials, awards, verified performance statistics, emergency lines, hospital addresses or payment destinations are claimed.

## Stack

Next.js 16 App Router · React 19 · TypeScript · Lucide icons · handcrafted CSS · local typed data.

The site uses static generation for public pages and client-side state for booking and admin. Vercel deploys the `main` branch automatically from GitHub.

## Get started

```bash
npm install
npm run dev
```

Open http://localhost:3000

Production build:

```bash
npm run build
npm run start
```

## Source map

| Path | Purpose |
|---|---|
| `lib/data.ts` | All demonstration specialties, clinicians, test information and editorial content |
| `components/shell.tsx` | Logo, navigation, global sections, motion and footer |
| `components/pages.tsx` | Public site and detail pages |
| `components/interactive.tsx` | Booking journey and staff dashboard |
| `app/[[...slug]]/page.tsx` | Statically generated routes and page-specific metadata |
| `app/globals.css` | Responsive design system, animation and all component styles |
| `app/opengraph-image.tsx` | Branded Open Graph artwork |

## Verified walkthroughs

- All 23 public and demonstration routes returned HTTP 200 in browser checks.
- Desktop, tablet and mobile layouts tested at 1440px, 768px, 390px and 320px.
- Mobile menu opens over the page, navigates correctly, and dismisses on Escape.
- Booking flow produces a new browser-local record, dashboard status edits persist on refresh.
- Image sources returned HTTP 200, and no JavaScript exceptions were found in the tested flows.
- One narrow layout overflow was corrected in the final pass.

## Before building a real hospital product

1. Replace all fictional information and photography with verified, licensed, approved content.
2. Define real patients, roles, staff, services, time slots and operational rules with healthcare stakeholders.
3. Introduce a secure database and server-side authorization, sessions, audit logging, rate limiting, CSRF protections, backups and role boundaries.
4. Add robust patient privacy, consent, data lifecycle and incident response controls, appropriate to the deployment jurisdiction.
5. Integrate real scheduling and notifications only once availability is connected to the hospital's actual operations.
6. Conduct accessibility, security, clinical-content, performance, regulatory and end-to-end workflow audits before launch.

**For Honor and For Excellence.**
