# Brows on Point — Site Build Brief

**How to use this:** drop this file in the repo root as `BUILD-BRIEF.md`, then start Claude Code with:

> Read `BUILD-BRIEF.md` in full before writing any code. Then execute Phase 0 and stop for my review.

Work through the phases in order. Do not skip ahead. Stop at the end of each phase and report.

---

## 0. What this project is

Brows on Point is a lash, brow, permanent makeup and teeth whitening studio in **Kelowna, BC**, operated by **Jamie Fussell**. The repo is a partially-built Next.js site that still carries Tailwind "Radiant" template defaults. Your job is to turn it into a 16-page, SEO-structured service site.

Bookings run through Acuity: `https://app.acuityscheduling.com/schedule.php?owner=15235407`

Three source documents ship alongside this brief. Read all three before Phase 1:

| File                                                  | What it is                                                                                                             |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `Brows on Point — Site Architecture.csv`              | The page list, URL structure, hub/spoke relationships, priority                                                        |
| `Brows on Point — Page Keyword Map.csv`               | Every target keyword, its volume, its page, and which on-page section it belongs in                                    |
| `Brows on Point — Questionnaire Answers (Q1-Q52).csv` | The owner's decisions on pricing, policy and medical copy. **This is the source of truth for every fact on the site.** |

### The single most important rule

**Every factual claim on this site — a price, a duration, a medical eligibility statement, a policy — must trace to an answered row in the questionnaire CSV.** If it doesn't, you do not invent it. You emit a blocker (see §2). The current live site is riddled with contradictions precisely because facts were written without a source, and the entire point of this rebuild is to stop that.

---

## 1. Repo state — read this before touching anything

Stack, confirmed by inspection:

- **Next.js 14.2.11**, App Router, TypeScript
- **Tailwind CSS 3.4** + `@tailwindcss/typography`
- Headless UI, Heroicons, `clsx`
- Deployed to **Netlify** (`netlify.toml`, `publish = ".next"`)
- Prettier with `prettier-plugin-organize-imports` and `prettier-plugin-tailwindcss` — run `npx prettier --write` on everything you touch

### Existing routes (all flat)

```
/                        src/app/page.tsx
/about                   src/app/about/page.tsx
/services                src/app/services/page.tsx
/brow-services           src/app/brow-services/page.tsx
/lash-lift               src/app/lash-lift/page.tsx
/permanent-makeup        src/app/permanent-makeup/page.tsx
/teeth-services          src/app/teeth-services/page.tsx
/rf-skin-tightening      src/app/rf-skin-tightening/page.tsx
```

### The pattern already in place

`src/components/services/service-data.tsx` exports typed `ServiceData` objects. Each route file is a thin wrapper:

```tsx
import { browServiceData } from '@/components/services/service-data'
import ServicePage from '@/components/services/service-page'

export default function BrowServicesPage() {
  return <ServicePage data={browServiceData} />
}
```

`ServicePage` composes `ServiceHeader` → `ServiceDetail` → optional testimonial → `FAQSection`.

The `ServiceData` interface is:

```ts
interface ServiceData {
  thumbnail: string
  title: string
  description: string
  headerImage: string | StaticImageData
  detailImage: string | StaticImageData
  duration: string
  results: string
  price: string
  about: string
  benefits: ReactNode
  process: ReactNode
  preparation: ReactNode
  aftercare: ReactNode
  contraindications?: ReactNode
  testimonial?: { component: ComponentType<any>; props?: Record<string, any> }
  faqs: Array<{ question: string; answer: string }>
  slug: string
  shortDescription: string
}
```

**Keep this pattern.** It already has the right slots — `aftercare` and `contraindications` are exactly where the questionnaire's unanswered content gaps land. Extend the interface rather than replacing it.

### Four things that are broken right now

1. **`src/app/layout.tsx` renders `<meta name="robots" content="noindex, nofollow, noarchive" />` site-wide.** Every page is blocked from Google. This is presumably deliberate for a staging site — leave it until the very last launch step, but flag it in your Phase 0 report so nobody forgets.
2. **`robots.txt` at the repo root is `User-agent: * / Disallow: /`.** Same story.
3. **`layout.tsx` metadata is still the Tailwind starter's**: title template `'%s - Radiant'`, default `'Radiant - Close every deal'`. Fix in Phase 1.
4. **`service-data.tsx` carries `// TODO: confirm real pricing before launch`** above the lash pricing string. Several such TODOs likely exist — grep for them and surface all of them.

Also missing entirely: `app/sitemap.ts`, any JSON-LD structured data, and `export const metadata` on any service route (only `/`, `/about` and `/services` have it).

---

## 2. How to handle missing information — read carefully

Twelve questionnaire items came back blank, and several answers contradict each other. **You must not paper over these.** The rule:

### Blocked content gets a marker, not a guess

Where a required fact is missing, render a component that makes the gap loud and un-shippable:

```tsx
// src/components/blocked.tsx
export function Blocked({ source, needs }: { source: string; needs: string }) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error(
      `BLOCKED CONTENT reached production build: ${source} — ${needs}`,
    )
  }
  return (
    <div
      data-blocked={source}
      className="my-6 border-l-4 border-red-500 bg-red-50 p-4 text-sm text-red-900"
    >
      <strong>BLOCKED — {source}</strong>
      <p className="mt-1">{needs}</p>
    </div>
  )
}
```

Throwing on a production build is the point: **a page with an unresolved blocker cannot ship.** If that turns out to be too aggressive for the deploy workflow, replace the throw with a build-time check script, but keep the property that a blocked page fails CI.

Also maintain `BLOCKERS.md` at the repo root — a live list of every blocker, which page it's on, which questionnaire question it traces to, and who owes the answer. Regenerate it at the end of every phase.

### The blockers, by page

| Page                                       | Blocked section    | Owed answer                                                                                             |
| ------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------- |
| **All pages** (footer, contact, schema)    | Opening hours      | Q40 — Mon–Sun hours. Highest-impact blank in the whole questionnaire                                    |
| `/smile/teeth-whitening/`                  | Contraindications  | Q41 — full list; the booking system has one the site doesn't                                            |
| `/smile/teeth-whitening/`                  | Pricing table      | Q17 — the corrected 24k gold price; Q18 — the Basic vs Ultra vs 24k distinction; Q46 — peroxide %       |
| `/smile/sensitive-teeth-whitening/`        | Contraindications  | Q41 (same list)                                                                                         |
| `/smile/tooth-gems/`                       | Aftercare          | Q43 — brushing, flossing, foods to avoid, what to do if one comes loose                                 |
| `/smile/tooth-gems/`                       | 5+ gem pricing     | Q19 — the site claims "special discount pricing" and never states it                                    |
| `/permanent-makeup/saline-tattoo-removal/` | Aftercare          | Q42 — nothing exists anywhere; specifically what to say about the scab                                  |
| `/permanent-makeup/saline-tattoo-removal/` | After-hours fee    | Q28 — emergency service surcharge                                                                       |
| `/skin-tightening/`                        | Contraindications  | Q44 — already flagged as a pre-publish blocker in the architecture sheet                                |
| `/lashes/lash-lift-and-tint/`              | Aftercare products | Q32 — the site advertises "$20–$45" products and names none                                             |
| All PMU pages                              | Touch-up pricing   | Q39 — if a client misses the touch-up window they don't pay the $170 colour boost, so what do they pay? |
| `/about/`, `/training/`                    | Credentials        | Q45 — training and certifications, what and from where                                                  |
| `/contact/`                                | Directions         | Q49 — parking and finding the door                                                                      |

**`/smile/tooth-gems/` deserves special attention.** It is the highest-value page in the entire set — 3,400 searches/month at KD 0 — and it is blocked on a paragraph of aftercare copy that only Jamie can write. Say so in your Phase 0 report.

### The contradictions

Three answers conflict with other answers. Do not resolve them yourself — emit a blocker and stop.

1. **Booking notice period.** Q20 says 24 hours. Q22 approves rewriting the eyeliner wording to "more than 48 hours before." Both cannot be true. **No booking policy copy gets written until this is settled.**
2. **PMU training.** Q30 says remove PMU training from the site entirely. Q52 says give training a proper page. These are compatible only if the training page covers **lash lift ($500) and whitening ($550) and nothing else**. Build it that way, and put no PMU training anywhere.
3. **Saline removal price.** Q4 sets saline PMU removal at $125. Q26 confirms an "emergency saline removal" that the current site prices at $150. Either these are two different services or one price is wrong. Blocker.

---

## 3. Phase 0 — audit and report (do this first, then stop)

Produce a written report. Change no code.

1. Confirm the stack facts in §1 against the actual repo and correct me where I'm wrong.
2. Inventory every route that exists today and every component under `src/components/`.
3. Grep the whole repo for the contradictions the questionnaire was written to fix, and list every file and line where each appears:
   - `9-12 months` / `9–12 months` / `1-3 years` / `1–3 years` (microblading longevity — Q37)
   - `lupus`, `rheumatoid` (Q35)
   - `celiac`, `crohn` (Q36)
   - `$95` near `whitening` (Q6 — a deal that never existed)
   - `$150` near `saline` (Q4 conflict)
   - `Browsonpointcourtenay` (Q48)
   - `scar camouflage`, `breast aug` (Q29)
   - `training`, `teach` near `permanent makeup` / `PMU` (Q30)
   - `$20-$45` / `$20–$45` (Q32)
   - `24 hr`, `48 hr`, `24 hours`, `48 hours` (Q20/Q22)
   - `TODO`, `FIXME`, `confirm`
4. List every hardcoded price string in `service-data.tsx` and anywhere else, with its current value and the questionnaire answer that supersedes it.
5. Report how images are currently handled and what's already in `/public/services/`.

Stop. Wait for review.

---

## 4. Phase 1 — foundations

### 4.1 URL migration

The architecture sheet specifies a nested hub-and-spoke structure. The current routes are flat. Build the new structure and **301 every old path to its new home** — in `next.config.mjs` `redirects()`, since Netlify's Next runtime honours it.

| Old                   | New                                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------ |
| `/brow-services`      | `/brows/`                                                                                  |
| `/lash-lift`          | `/lashes/lash-lift-and-tint/`                                                              |
| `/teeth-services`     | `/smile/`                                                                                  |
| `/rf-skin-tightening` | `/skin-tightening/`                                                                        |
| `/services`           | `/brows/` — or keep as a genuine all-services index if it has traffic; ask before deleting |

`/permanent-makeup` and `/about` keep their paths.

### 4.2 Route tree to build

```
/                                              Homepage
/brows/                                        Hub
/brows/brow-tint-wax-shape/                    Spoke
/lashes/                                       Hub
/lashes/lash-lift-and-tint/                    Spoke
/lashes/lash-and-brow-tinting/                 Spoke
/lashes/lash-growth-serum/                     Spoke (product)
/permanent-makeup/                             Hub
/permanent-makeup/microblading/                Spoke
/permanent-makeup/powder-brows/                Spoke
/permanent-makeup/permanent-eyeliner/          Spoke
/permanent-makeup/saline-tattoo-removal/       Spoke
/smile/                                        Hub (navigation only — no keyword target)
/smile/teeth-whitening/                        Spoke
/smile/sensitive-teeth-whitening/              Spoke
/smile/tooth-gems/                             Spoke
/skin-tightening/                              Standalone
/about/                                        Existing, needs rework
/training/                                     NEW — see §6.3
/contact/                                      NEW if it doesn't exist
```

### 4.3 Metadata

Fix `layout.tsx`:

```ts
export const metadata: Metadata = {
  metadataBase: new URL('https://<production-domain>'),
  title: {
    template: '%s | Brows on Point',
    default: 'Brows on Point | Lash, Brow & Permanent Makeup Studio in Kelowna',
  },
  description: '<write from the homepage keyword brief>',
}
```

Then add `export const metadata` to **every** route. Title pattern: `<Primary keyword, naturally phrased> | Brows on Point`. Meta description: 150–158 characters, contains the primary keyword and a reason to click. Never duplicate a title or description across two pages.

Remove the `<meta name="robots">` line from `layout.tsx` **only** when I tell you the site is going live.

### 4.4 Structured data

Add JSON-LD via a `<script type="application/ld+json">` component:

- **`LocalBusiness`** in the root layout — name, address, phone, `priceRange`, `paymentAccepted: ["Cash", "Debit Card", "Credit Card", "E-transfer"]` (Q47), `openingHoursSpecification` → **BLOCKED on Q40**
- **`Service`** on every spoke page — name, description, provider, `areaServed: Kelowna`, `offers.price` where the price is settled
- **`FAQPage`** on every page with an FAQ block, generated from the same `faqs` array `FAQSection` already renders

### 4.5 Housekeeping

- `app/sitemap.ts` generated from the route list
- `app/robots.ts` replacing the static `robots.txt` (allow-all + sitemap URL) — again, only flipped to allow at launch
- The `<Blocked />` component from §2
- `BLOCKERS.md`

Stop. Report.

---

## 5. Phase 2 — page content

This is the bulk of the work. **One page at a time**, in the priority order in §5.4. After each page, stop and let me review before starting the next. Do not batch.

### 5.1 Page anatomy

Every service spoke page follows this shape:

1. **H1** — contains the primary keyword, reads like a human wrote it
2. **Intro** — 2–3 sentences, primary keyword in the first sentence, states what the service is and who it's for
3. **Body sections** (H2s) — the substance. Work the assigned body-copy keywords in naturally across these
4. **Before/after gallery** — only on pages with `Gallery` keywords in the map. Alt text carries the gallery keywords
5. **Pricing** — only settled prices. Anything unsettled is a `<Blocked />`
6. **What to expect / process**
7. **Preparation**
8. **Aftercare**
9. **Contraindications** — where applicable
10. **FAQ** — answers the `Pricing FAQ` keywords as literal questions
11. **CTA** — "Book now" to Acuity, plus the free consultation button on PMU pages (§6.2)

Hub pages are shorter: an intro that owns the primary local keyword, a card grid linking every spoke beneath it, and a short trust/why-us block. Hubs must not compete with their own spokes — a hub targets generic local intent ("eyebrows near me"), a spoke targets the service ("eyebrow tint").

### 5.2 Writing the copy

Write real, publishable draft copy. Jamie edits; she doesn't write from scratch.

- **Voice:** warm, plain, specific. A skilled local practitioner talking to a nervous first-time client. Not spa-brochure language. No "unlock," "elevate," "journey," "transform your look."
- **Keyword use:** the map assigns each keyword to a section. Honour that. Work them in as natural phrasing — "eyebrow tinting near me" becomes a sentence about serving clients around Kelowna, not a jammed-in string. If a keyword can't be used naturally, skip it and say so in your report. Density is not a target.
- **Local:** Kelowna and West Kelowna appear where the map assigns a local keyword, and in the hub intros. Not stuffed into every heading.
- **Length:** hubs 400–600 words, service spokes 800–1,200, the two biggest clusters (lash lift and tint, microblading) 1,200–1,600.
- **Health claims:** be conservative. State what the treatment does, not what it cures. Never write a contraindication, eligibility rule, longevity figure or medical statement that isn't in the questionnaire CSV.

### 5.3 Per-page keyword briefs

Full data is in `Brows on Point — Page Keyword Map.csv`. Summary:

```
### Homepage  →  /
  PRIMARY: lash and brow (60)
  BODY: lash and brow bar (50), lashes and brows near me (50), eyebrows and lashes near me (40)
  NOTE: low volume by design. The homepage's job is to route to the hubs, not to rank hard.

### Brow Services (Hub)  →  /brows/
  PRIMARY: eyebrows near me (1700)
  BODY: brows near me (350), brow services near me (250), brow bar kelowna (200), brow bar near me (200),
        eyebrow places near me (150), eyebrows kelowna (150), brow near me (100), brow places near me (100),
        eyebrow bar near me (100), eyebrow salon near me (100), brows kelowna (90), eyebrow services (80),
        eyebrow services near me (70), brow salon near me (50), brow services (50), best eyebrows near me (40),
        eye brow near me (40), beauty salon eyebrows near me (30), eyebrow specialist near me (30),
        brow treatments (30), eyebrow clinic (30), brow studio near me (30)
  LINKS TO: /brows/brow-tint-wax-shape/, plus cross-links to microblading and powder brows

### Brow Tint, Wax & Shape  →  /brows/brow-tint-wax-shape/
  PRIMARY: eyebrow tint (2200)
  BODY: eyebrow waxing near me (1800), brow tint (1200), eyebrow wax (600), brow wax (500), eyebrow shaping (500),
        eyebrow tinting near me (450), brow waxing near me (400), brow wax near me (350), brow tint near me (250),
        eyebrow shaping near me (200), brow tinting (150), brow tinting near me (150), brow wax and tint (150),
        brow tinting kelowna (100), eyebrow shaping kelowna (100), eyebrow wax and tint (100),
        eyebrow tinting kelowna (80), hybrid brow tint (80), + 19 more in the CSV
  GALLERY: brow tint before and after (300), before and after eyebrow tinting (150)
  NOTE: 10,760/mo total — the second-biggest cluster. One page covering tint + wax + shape deliberately,
        so the three don't cannibalise each other. Give each its own H2.
  OPEN ASSUMPTION: the architecture sheet assumes "shape" includes waxing. Never confirmed. Flag it.

### Lash Services (Hub)  →  /lashes/
  PRIMARY: lashes near me (1800)
  BODY: lash (1200), lash tech (350), eyelashes near me (250), lash tech near me (250), eye lash (200),
        lash places near me (150), lash technician (150), eyelash tech (90), eyelash technician (90),
        lash salon (90), lash salon near me (90), lash bar (80), eyelash salon (70), lash techs near me (70),
        lash studio (60), lash studio near me (60), lashes kelowna (60), eyelash salon near me (50),
        eyelash studio near me (30), eyelash bar near me (30), lash lounge near me (30)
  NOTE: heavy on "lash tech / technician" — this hub should introduce Jamie by name and credential.
        Blocked on Q45 for the credential detail.

### Keratin Lash Lift & Tint  →  /lashes/lash-lift-and-tint/
  PRIMARY: lash lift and tint (5100)
  BODY: korean lash lift (1300), lash lift near me (900), eyelash lift and tint (600), lash lift and tint near me (450),
        korean lash lift near me (250), eyelash perm (200), keratin lash lift (200), lash lift kelowna (200),
        eyelash lift near me (150), korean lash lift and tint (150), lash lamination (150), lash lifts (150),
        lash perm (150), + 23 more in the CSV
  GALLERY: lash lift before and after (500), lash lift and tint before and after (350), + 6 more
  PRICING FAQ: lash lift cost (100), lash lift price (100), how much does a lash lift cost (80),
               how much is a lash lift (80), + 5 more
  NOTE: 13,000/mo, the biggest commercial cluster on the site, and KD 0. This is the money page.
        It must cover keratin, BOMB and Korean lash lift, plus "lash perm" and "lash lamination"
        as synonyms, all on this one page.
  PRICE: BOMB lash lift + tint = $70 (Q3). Korean lift $85 / Korean lift & tint $95 are NOT confirmed —
         they carry a TODO in service-data.tsx. Treat as blocked.
  BLOCKED: aftercare products (Q32)

### Lash & Brow Tinting  →  /lashes/lash-and-brow-tinting/
  PRIMARY: eyelash tint (500)
  BODY: eyelash dye (150), eyelash tinting near me (150), lash tint near me (150), lash tinting (90),
        lash and brow tint (40), + 10 more
  GALLERY: lash tint before and after (200), eyelash tint before and after (90)
  NOTE: lash-tint and combined lash+brow tint only. Brow-ONLY tint queries belong to
        /brows/brow-tint-wax-shape/. Do not target them here.

### Keratin Lash Growth Serum & Mascara  →  /lashes/lash-growth-serum/
  PRIMARY: lash growth serum (600)
  BODY: lash enhancer (60), lash grower (60), lash tint mascara (30), tinted lash serum (30)
  NOTE: retail product page, not a service page. Shorter. May need a different component than ServicePage.
        Be careful with growth claims — this is the page most likely to overstate.

### Permanent Makeup (Hub)  →  /permanent-makeup/
  PRIMARY: permanent eyebrows (350)
  BODY: tattooed eyebrows (250), permanent makeup near me (150), semi permanent eyebrow (150),
        permanent brows (100), permanent eyebrows near me (100), permanent makeup kelowna (100),
        pmu brows (100), + 11 more
  PRICING FAQ: permanent eyebrows cost (80), eyebrow tattoo cost (50), permanent eyebrows price (40)
  NOTE: exists so microblading and powder brows don't fight over generic PMU and "eyebrow tattoo" terms.

### Microblading  →  /permanent-makeup/microblading/
  PRIMARY: microblading (7500)
  BODY: microblading eyebrows (1700), microblading near me (600), eyebrow mapping near me (250),
        brow mapping near me (200), brow microblading (150), eyebrow microblading near me (150),
        microblading eyebrows near me (150), microblading kelowna (150), + 10 more
  GALLERY: microblading before and after (200), microblading eyebrows before and after (90),
           microbladed brows before and after (30)
  PRICING FAQ: microblading cost (150), how much is microblading (100), microblading eyebrows cost (100),
               how much does microblading cost (90), + 4 more
  NOTE: needs a dedicated brow-mapping H2 section (450/mo across two mapping keywords).
  FACTS: lasts 1–2 years (Q37). First touch-up within 2 months (Q38). $275 first appointment,
         $100 touch-up, $375 year one (Q50).

### Powder Brows  →  /permanent-makeup/powder-brows/
  PRIMARY: powder brows (1600)
  BODY: powder brows near me (200), powder eyebrows (200), eyebrow shading (60), soft powder brows (40)
  GALLERY: powder brows before and after (150), before and after powder brows (30)
  PRICING FAQ: powder brows cost (30)
  NOTE: comparison queries ("microblading vs powder brows") are NOT targeted here — they belong
        to a future blog article. Link out to it; don't chase them on this page.
  FACTS: $300 first appointment, $125 touch-up, $425 year one (Q50). Touch-up within 2 months.

### Permanent Eyeliner & Lash Line Enhancement  →  /permanent-makeup/permanent-eyeliner/
  PRIMARY: permanent eyeliner near me (150)
  BODY: lash line enhancement (100), eyelash enhancement (80), eyeliner tattoo near me (80),
        lash enhancement (70), lash enhancement tattoo (70), eyelash enhancement tattoo (30), lash line tattoo (30)
  PRICING FAQ: eyeliner tattoo cost (60)
  FACTS: upper / lash enhancement = $199 (Q2). Upper touch-up $135, year one $334 (Q50).
         Top + bottom eyeliner is being repriced from $320 — BLOCKED on Q11.
         Top + bottom touch-up is $180 and saves $55 against $235 of separate touch-ups (Q16).

### Saline Tattoo & PMU Removal  →  /permanent-makeup/saline-tattoo-removal/
  PRIMARY: eyebrow tattoo removal (250)
  BODY: microblading removal (150), tattoo removal kelowna (150), laser tattoo removal kelowna (100),
        eyebrow tattoo removal near me (90), laser eyebrow tattoo removal (90), microblading removal near me (90),
        + 8 more
  NOTE: several keywords say "laser" but Jamie offers SALINE. The page must address the difference
        honestly — explain saline, acknowledge laser exists, don't claim to offer it.
  BLOCKED: aftercare (Q42), after-hours fee (Q28), and the $125 vs $150 price conflict (Q4 vs Q26)

### Smile Services (Hub)  →  /smile/
  PRIMARY: none — navigation page only
  NOTE: deliberately thin. Its three spokes carry the keywords. Don't try to make it rank.

### Teeth Whitening  →  /smile/teeth-whitening/
  PRIMARY: teeth whitening near me (900)
  BODY: cosmetic teeth whitening (200), professional teeth whitening near me (200), teeth whitening kelowna (200),
        teeth whitening services near me (150), in office teeth whitening (100), teeth whitening west kelowna (60),
        + 8 more
  PRICING FAQ: laser teeth whitening cost (60), affordable teeth whitening near me (50),
               teeth whitening cost kelowna (30), + 5 more
  NOTE: include West Kelowna explicitly. Dental-clinic queries were excluded on intent grounds — don't add them.
  FACTS: Basic = $99 (Q5). Ultra = $145.
  BLOCKED: 24k gold price (Q17), the tier distinction (Q18), contraindications (Q41), peroxide % (Q46)

### 24K Gold Whitening for Sensitive Teeth  →  /smile/sensitive-teeth-whitening/
  PRIMARY: best teeth whitening for sensitive teeth (90)
  BODY: sensitive teeth whitening (60), teeth whitening sensitive teeth (50)
  NOTE: differentiator page. At-home product and strips queries go to the blog, not here.
  BLOCKED: price (Q17), contraindications (Q41)

### Swarovski Tooth Gems  →  /smile/tooth-gems/
  PRIMARY: tooth gems (3400)
  BODY: teeth gems (300), teeth jewelry (200), tooth gems near me (200), teeth jewels (60), tooth gens (60),
        butterfly tooth gem (50), tooth jewel (50), jewel teeth (30)
  PRICING FAQ: how much are tooth gems (30)
  NOTE: 4,380/mo at KD 0 — the highest-value quick win on the site. "tooth gens" is a misspelling with
        real volume; don't put it in visible copy, but it's fine in an FAQ phrasing if it reads naturally.
  FACTS: single gem = $40 (Q1). The $90 friend deal is deleted (Q7/Q9); the $100 one survives and is
         being repriced.
  BLOCKED: aftercare (Q43), 5+ gem pricing (Q19), friend-deal price (Q8)

### RF Skin Tightening  →  /skin-tightening/
  PRIMARY: skin tightening treatment (1700)
  BODY: skin tightening (1000), radio frequency skin tightening (350), rf skin tightening (350),
        radio frequency facial (250), face tightening (200), face tightening treatment (200),
        skin tightening treatments (200), + 29 more
  GALLERY: skin tightening before and after face (70)
  PRICING FAQ: skin tightening cost (30)
  NOTE: one page with separate face / neck / body H2 sections. Split into spokes only if it outgrows itself.
        Keywords include body-contouring terms — cover them in a body section, but be careful:
        contouring language shades toward fat-loss claims, which Jamie has explicitly agreed to keep
        off this site (Q34).
  BLOCKED: contraindications (Q44) — hard blocker, page cannot publish
  BLOCKED: package price (Q10)
```

### 5.4 Build order

Highest commercial value first, so the blocked pages don't hold up the ones that can ship:

1. `/lashes/lash-lift-and-tint/` — 13,000/mo, KD 0, nearly unblocked
2. `/permanent-makeup/microblading/` — 12,250/mo, fully unblocked
3. `/brows/brow-tint-wax-shape/` — 10,760/mo, fully unblocked
4. `/brows/` hub — 3,970/mo
5. `/lashes/` hub — 5,250/mo
6. `/permanent-makeup/` hub — 1,940/mo
7. `/permanent-makeup/powder-brows/` — 2,310/mo
8. `/smile/tooth-gems/` — 4,380/mo, **blocked on aftercare**
9. `/skin-tightening/` — 6,370/mo, **blocked on contraindications**
10. `/smile/teeth-whitening/` — 2,540/mo, **blocked on four items**
11. `/lashes/lash-and-brow-tinting/` — 1,720/mo
12. `/permanent-makeup/saline-tattoo-removal/` — 1,290/mo, **blocked**
13. `/permanent-makeup/permanent-eyeliner/` — 670/mo
14. `/lashes/lash-growth-serum/` — 780/mo
15. `/smile/sensitive-teeth-whitening/` — 200/mo, **blocked**
16. `/smile/` hub, `/`, `/about/`, `/contact/`, `/training/`

---

## 6. Phase 3 — cross-cutting content

### 6.1 The booking fee block

One shared component, rendered **on permanent makeup pages only** (Q23 — the fee doesn't apply to lash, smile or skin bookings).

Content, from Q20/Q21/Q23/Q24/Q25:

- $50 booking fee, permanent makeup bookings only
- Reschedule with **[24 or 48]** hours' notice — **BLOCKED on the Q20/Q22 contradiction**
- Transferable **once only**
- No-show forfeits the $50
- More than **10 minutes** late and the appointment is cancelled

Write nothing until the notice period is settled.

### 6.2 The free consultation CTA

Q51: feature the free 30-minute consultation as a **main button on every permanent makeup page**. Currently it's mentioned once, buried in a paragraph. Secondary in visual weight to "Book now," but genuinely prominent — in the header CTA group and repeated at the foot of the page.

### 6.3 The training page

`/training/`. **Lash lift ($500) and teeth whitening ($550) only.** Jamie does not teach permanent makeup (Q30), so the page must not mention PMU training, and you must strip any existing PMU-training claim from her bio.

This page is **not in the architecture sheet** and has no keyword research behind it. Build it as a straightforward informational page — don't invent keyword targets. Blocked on Q45 for credentials.

### 6.4 Site-wide fact corrections

Apply everywhere the Phase 0 grep found them:

| Fact                                | Correct value                                              | Source |
| ----------------------------------- | ---------------------------------------------------------- | ------ |
| Microblading longevity              | 1–2 years                                                  | Q37    |
| Microblading first touch-up         | Within 2 months                                            | Q38    |
| Lupus / rheumatoid arthritis        | Eligible if controlled, with a doctor's note               | Q35    |
| Celiac / Crohn's                    | Fine to proceed — remove from the "needs doctor's OK" list | Q36    |
| Saline removal window               | 24 hours                                                   | Q27    |
| Payment methods                     | Cash, debit, credit, e-transfer                            | Q47    |
| The "$95 whitening add-on"          | Never existed — purge every trace                          | Q6     |
| Breast augmentation scar camouflage | No longer offered — remove                                 | Q29    |
| `Browsonpointcourtenay@gmail.com`   | Retire it                                                  | Q48    |

On that last one: Q31 keeps the Derol lip plumping kit, but Q48 retires the email address the lip kit content points to. Lip kit enquiries need a new destination — flag it, don't guess.

### 6.5 Touch-up pricing table

Q50 approved publishing this:

| Service        | First appointment | Touch-up | Year one |
| -------------- | ----------------- | -------- | -------- |
| Powder brow    | $300              | $125     | $425     |
| Microblading   | $275              | $100     | $375     |
| Upper eyeliner | $199              | $135     | $334     |

Publish on the relevant PMU pages **plus** an explanatory line about what happens if a client misses the touch-up window — which is **BLOCKED on Q39**.

---

## 7. Phase 4 — verification

Before declaring anything done:

1. **Fact trace.** Produce a table of every price, duration, longevity claim and medical statement on the built site, each with its questionnaire question number. Anything with no source is a bug.
2. **Cannibalisation check.** No two pages target the same primary keyword. Specifically verify: brow-only tint queries live only on `/brows/brow-tint-wax-shape/`; lash-tint queries live only on `/lashes/lash-and-brow-tinting/`; generic PMU queries live only on the PMU hub, not on microblading or powder brows.
3. **Keyword coverage.** For each page, list assigned keywords that did **not** make it into the copy, and say why.
4. **Metadata audit.** Every route has a unique title and description. No "Radiant" string survives anywhere — grep for it.
5. **Redirects.** Every old URL from §4.1 returns 301 to its new home. Test each.
6. **Internal links.** Every spoke links up to its hub; every hub links down to all its spokes; the homepage links to all four hubs. No orphans.
7. **Build.** `npm run build` passes. No `<Blocked />` reaches a production build.
8. **Blockers.** `BLOCKERS.md` is current and matches the table in §2.
9. **Launch gate.** Confirm the `noindex` meta and the `robots.txt` disallow are still in place, and list them as the final two steps to flip.

---

## 7b. Deliberately out of scope

These questionnaire answers are real tasks, but they live in the **Acuity booking system**, not the website. Don't build anything for them, and don't be confused by their absence:

- **Q12, Q13** — the "$149 whitening + lash lift" and "$140 whitening + tooth gem" descriptions wrongly say 3 × 20 min (the Ultra tier) when they should say basic. Booking-system copy fix.
- **Q14** — the $160 and $170 whitening+lash bundles stay.
- **Q15** — the keratin lash lift "bring a friend" description promises $75 each; reality is $67.50 each. Booking-system copy fix.
- **Q33** — fat cavitation isn't bookable yet and no launch date was given. Nothing on the site either way (Q34).

If any of these bundle descriptions surface on the website as well as in Acuity, they become in-scope — flag them in the Phase 0 report.

---

## 8. Standing rules

- **Stop at every phase boundary.** Report, wait for review.
- **One page at a time in Phase 2.** Never batch pages.
- **Never invent a fact.** No price, duration, medical statement or policy without a questionnaire source. When in doubt, `<Blocked />`.
- **Keep the existing patterns.** Extend `ServiceData`, reuse `ServicePage`, `ServiceHeader`, `ServiceDetail`, `FAQSection`, `Container`, `Button`, `Link`. Don't introduce a second way of doing something that already has a way.
- **Run Prettier** on every file you touch.
- **Don't add dependencies** without asking.
- **Ask rather than assume.** If the architecture sheet, the keyword map and the questionnaire disagree, say so and stop.
