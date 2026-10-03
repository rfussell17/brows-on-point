# Brows on Point — Blog Plan (pillar + cluster)

Domain: `https://www.browsonpointkelowna.com`

## How it works

```
Blog pillar  ("What is X?")       informational, top of funnel
   ├─ Supporting posts            types, comparisons, healing, aftercare, "does it hurt", cost
   └─ every post ends with a CTA ─▶ Service page ("I know what it is, I want it")
```

- **Service pages** own: `[service] kelowna`, `near me`, price, book. Commercial intent.
- **Blog** owns: `what is`, `vs`, `how long`, `does it hurt`, `healing`, `aftercare`, `who is it for`. Informational intent.
- Blog posts never target `kelowna` / `near me` in the title or H1. One local sentence + CTA block per post only (prevents cannibalisation with service pages).
- Service pages get a "Learn more: What is X?" link back to their pillar.

## Linking rules (every post)

1. Supporting post → its pillar (top of post, contextual).
2. Supporting post → 1–2 sibling posts.
3. Supporting post → its service page, in the CTA block at the end and once mid-article.
4. Pillar → every supporting post (table of contents + "Go deeper" list).
5. Service page → pillar.

## Pillars and supporting posts

Search volumes: blank = not yet pulled (needs the Ahrefs Keywords Explorer seed export). Known from the audit: *microblading near me* 700, *nano brows near me* 500, *permanent eyebrows* 400 (KD 3, she ranked #95), *eyebrow tinting near me* 500.

| # | Pillar (H1) | Funnels to | Supporting posts |
|---|---|---|---|
| 1 | **What Is Microblading?** | `/permanent-makeup/microblading` | Microblading vs powder brows · Microblading vs nano brows vs ombré · Microblading healing timeline, day by day · Microblading aftercare · How long does microblading last? · Does microblading hurt? · Who should not get microblading · Microblading on oily or mature skin · Microblading touch-ups: when and why · What does microblading cost? (no local price list; ranges and what drives them) |
| 2 | **What Is Permanent Makeup?** | `/permanent-makeup` | Permanent makeup types: brows, eyeliner, and what else exists · Semi-permanent vs permanent makeup · Is permanent makeup safe? (pigments, needles, hygiene) · Permanent makeup over 50 · Why permanent makeup fades and how it changes colour · Permanent makeup vs tattoo · What to do before and after your first appointment · How to choose a permanent makeup artist |
| 3 | **What Is a Lash Lift?** | `/lashes/lash-lift-and-tint` | Keratin vs BOMB vs Korean lash lift · Lash lift vs lash extensions · Lash lift vs eyelash perm · Lash lift and tint vs lash tint alone · Lash lift aftercare (exists) · How long does a lash lift last? · Is a lash lift safe for your lashes? · Lash lift for short, straight, or sparse lashes · Lash lift on hooded or mature eyes · How often can you get a lash lift? |
| 4 | **What Is a Brow Tint?** | `/brows/brow-tint-and-shape`, `/lashes/lash-and-brow-tinting` | Brow tint vs henna vs lamination · How long does a brow tint last? · Brow tint aftercare · Waxing vs threading vs tweezing · Eyebrow shaping for your face shape · Brow tint for grey or sparse brows · What to expect at your first brow appointment |
| 5 | **What Are Powder Brows?** | `/permanent-makeup/powder-brows` | Powder brows healing timeline · Powder brows vs microblading (link to #1) · Powder brows for oily skin · How long do powder brows last? · Powder brows aftercare · Powder brows vs makeup pencil |
| 6 | **What Is Permanent Eyeliner?** | `/permanent-makeup/permanent-eyeliner` | Lash enhancement vs classic liner vs wing · Permanent eyeliner healing and aftercare · Does permanent eyeliner hurt? · Permanent eyeliner for glasses wearers and mature eyes · Can you get it with lash extensions or contacts? |
| 7 | **What Is Saline Tattoo Removal?** | `/permanent-makeup/saline-tattoo-removal` | Saline vs laser removal · How many saline removal sessions? · Removing old microblading · Fixing faded or wrong-colour brows · Saline removal aftercare |
| 8 | **What Is Professional Teeth Whitening?** | `/smile/teeth-whitening`, `/smile/sensitive-teeth-whitening` | In-office vs at-home whitening · Teeth whitening and sensitivity · What is 24K gold whitening? · How long does whitening last? · Foods and habits that stain teeth · Is whitening safe for crowns and fillings? |
| 9 | **What Is a Tooth Gem?** | `/smile/tooth-gems` | Are tooth gems safe? · How long do tooth gems last? · Tooth gem removal and aftercare · Tooth gem placement ideas |
| 10 | **What Is RF Skin Tightening?** | `/skin-tightening` | RF vs ultrasound vs microneedling · How many RF sessions? · RF skin tightening for neck and jawline · Results timeline |

Total: 10 pillars, about 55 supporting posts. Older-audience angle (mature skin, hooded eyes, thinning brows, over 50) is a deliberate differentiator and should appear in at least one post per pillar.

## Phasing

| Phase | Ship | Why |
|---|---|---|
| 1 | Pillars 1, 3, 2 (microblading, lash lift, permanent makeup) + their 2 highest-value comparisons each | Highest existing local rankings and revenue |
| 2 | Pillars 4, 5, 6 + the lost-ranking topics (permanent eyebrows, brow tinting, powder brows) | Wins back keywords she previously ranked for |
| 3 | Pillars 7, 8, 9, 10 | Smaller volume, supports newer services |

## Post spec

- Pillar: 1,800–2,500 words, table of contents, "In short" box at the top, FAQ block, hero image, author/reviewer line, last-reviewed date.
- Supporting: 900–1,500 words, same structure without the table of contents.
- FAQ block on every post (JSON-LD FAQ schema).
- One CTA block at the end ("Ready to book?") linking to the service page and Acuity.
- Real photos from `public/overflow/` where possible.

## Needed before writing

1. Jamie reviews every post (health, safety and aftercare claims).
2. Ahrefs Keywords Explorer seed export, so each post gets a real primary keyword and volume.
3. Competitor content gap, so we skip topics she can't win.
4. Confirm whether she offers nano brows and ombré; if not, those posts are comparison-only.
