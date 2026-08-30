# BLOCKERS

Live list of every unresolved content/fact gap blocking publication. Regenerated at the end of every build phase. See `BUILD-BRIEF.md` §2 for the ground rules: a blocked fact gets a `<Blocked />`, never a guess. `<Blocked />` throws in production builds — a page with an unresolved blocker cannot ship.

**Status as of 2026-08-29 (questionnaire reconciliation pass).** Robin supplied Jamie's actual filled-out questionnaire (checkboxes ticked, most free-text fields left blank) plus her old live site (browsonpointkelowna.com/services), and asked me to trust the questionnaire over Acuity wherever they disagree. This surfaced real problems: several facts I'd published as "resolved via Acuity" turn out to be things Jamie explicitly flagged as *wrong* on the questionnaire, just without giving a replacement number. Those got un-resolved and re-blocked rather than left standing as confident-looking wrong answers. See "Reconciled against the filled questionnaire, 2026-08-29" below.

`npm run build` currently fails on 9 of ~21 routes. That's up from 8, not down — `/lashes/lash-lift-and-tint/` and `/lashes/lash-growth-serum/` (already resolved this pass, both now clean) are outweighed by `/permanent-makeup/permanent-eyeliner/` reopening, since its top+bottom combo price turned out to be a confirmed-wrong number rather than a confirmed-right one. `/`, `/about/`, `/brows/`, `/lashes/`, `/permanent-makeup/`, `/smile/`, `/services/`, and `/training/` (hub pages) still build clean.

**Exception — Q40 (opening hours) in JSON-LD only:** at Robin's instruction, `LocalBusinessJsonLd` ships a **generic placeholder schedule** (Mon–Fri 9am–6pm, Sat 9am–4pm, Sun closed) instead of throwing, so the schema doesn't block every page in production. This is not a sourced fact. The **visible** `/contact/` page does NOT use this placeholder — it shows a real `<Blocked/>` for hours. Both still need Jamie's real answer.

## Resolved this session via live Acuity data

| Fact                              | Now published as                          | Was                                                                                                                                                                                                        |
| --------------------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BOMB Lash Lift and Tint price     | $75                                       | Blocked at $70 (Q3) — Acuity's live price wins per Robin's instruction                                                                                                                                     |
| Keratin Lash Lift and Tint price  | $80                                       | Blocked, no source                                                                                                                                                                                         |
| Lash Lift Only (no tint)          | $50 — mentioned in FAQ                    | Didn't exist on the site                                                                                                                                                                                   |
| Lash Tint Only price              | $25                                       | Blocked, no source                                                                                                                                                                                         |
| Brow Tint & Shape price           | $25, one combined service                 | Blocked as 3 separate prices (tint/wax/shape) — real Acuity has no separate wax line item, confirming the "shape includes waxing" assumption the architecture sheet flagged as unconfirmed                 |
| Saline/PMU removal price          | $150                                      | Blocked — Q4 ($125) vs. Q26 ($150) contradiction, resolved in favour of Acuity's $150                                                                                                                      |
| Saline removal — aloe allergy     | Added as a contraindication               | Not documented anywhere before                                                                                                                                                                             |
| RF skin tightening base price     | $75/session                               | Blocked, old "$80" was an unsourced repo TODO                                                                                                                                                              |
| PMU booking-fee reschedule window | 48 hours, published sitewide on PMU pages | Blocked — Q20 (24hrs) vs. Q22 (48hrs) contradiction. Acuity's own service descriptions state "reschedule... within 48 hours" verbatim and consistently across every PMU appointment type that mentions it. |
| Business street address           | 3344 Sundance Drive, West Kelowna, BC     | Blocked — never asked in the questionnaire, now in LocalBusiness JSON-LD and `/contact/`                                                                                                                   |

## Resolved in the second reconciliation pass (2026-08-27)

| Fact                                | Now published as                          | Was                                                                                                         |
| ----------------------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Brow Tint & Shape URL               | `/brows/brow-tint-and-shape/`             | `/brows/brow-tint-wax-shape/` — renamed to match the reworked site-architecture sheet                       |
| Permanent eyeliner top+bottom price | $320                                      | Blocked (Q11) — confirmed as the real, non-deal Acuity listing price, not a number needing a reprice        |
| Lower Eyeliner                      | New $120 service, added as a third option | Didn't exist on the site — found as its own live Acuity listing, separate from lash-enhancement liner       |
| 24k Gold Whitening price            | $99                                       | Blocked (Q17) — confirmed genuinely live at $99 (same as Basic) under its own listing, not a deal price     |
| RF 3-session package price          | $190                                      | Blocked — confirmed as the standard (non-deal) Acuity listing price, same treatment as other resolved items |

## Resolved via placeholder policy (2026-08-27)

Every before/after gallery `<Blocked/>` was replaced with `<GalleryPlaceholder/>` (`src/components/services/gallery-placeholder.tsx`) — a labeled grid of empty photo boxes. Every Jamie's-credentials `<Blocked/>` was replaced with a plain "coming soon" line. Real photos and real certification copy still need to come from Jamie — nothing here is a finished answer, it's just no longer a build blocker. This alone moved 6 routes from failing to passing:

| Page                                    | Was blocked by                            | Now                                                 |
| --------------------------------------- | ----------------------------------------- | --------------------------------------------------- |
| `/about/`                               | Jamie's training and certifications (Q45) | Builds clean — "Certification details coming soon." |
| `/training/`                            | Trainer's credentials (Q45)               | Builds clean — "Trainer credentials coming soon."   |
| `/lashes/` hub                          | Jamie's lash-tech credentials (Q45)       | Builds clean — "Certification details coming soon." |
| `/lashes/lash-and-brow-tinting/`        | Before/after gallery only                 | Builds clean — gallery placeholder                  |
| `/brows/brow-tint-and-shape/`           | Before/after gallery only                 | Builds clean — gallery placeholder                  |
| `/permanent-makeup/permanent-eyeliner/` | Before/after gallery only                 | Builds clean — gallery placeholder                  |

## Dropped by decision, 2026-08-29

Robin reviewed every open blocker and decided to stop waiting on these — no invented facts, just an honest non-answer or the claim removed entirely:

| Was blocked | Page | Decision |
| --- | --- | --- |
| Korean Lash Lift and Tint price | `/lashes/lash-lift-and-tint/` | Publishes as "Ask at your consultation" instead of a number |
| Lash lift aftercare products (Q32) | `/lashes/lash-lift-and-tint/` | Claim dropped — aftercare section just doesn't name specific products |
| Lash growth serum retail price | `/lashes/lash-growth-serum/` | Publishes as "Ask in-studio" instead of a number |
| Tooth gem 5+ discount pricing (Q19) | `/smile/tooth-gems/` | Publishes as "Ask about multi-gem pricing at your consultation" instead of a number |
| Tooth gem friend-deal reprice (Q8) | Not wired to a page | Dropped from tracking — no longer being pursued |
| PMU training page sign-off (Q30 vs Q52 contradiction #2) | `/training/` | Treated as fully resolved — no PMU training offered, no further sign-off needed |

This resolved `/lashes/lash-lift-and-tint/` and `/lashes/lash-growth-serum/` completely — both now build clean. `/smile/tooth-gems/` still has one blocker left (aftercare, Q43 — kept).

## Reconciled against the filled questionnaire, 2026-08-29

Robin supplied Jamie's actual filled-out questionnaire (checkboxes ticked; almost all free-text fields left blank) and her old live site, browsonpointkelowna.com/services, and asked me to trust the questionnaire over Acuity wherever they disagree.

**Resolved — the questionnaire gave a clear, confident number:**

| Fact | Now published as | Was |
| --- | --- | --- |
| BOMB Lash Lift and Tint price | $70 | $75 (Acuity's live price, which Q3 directly contradicts) |
| Saline/PMU removal (regular) price | $125 | $150 — Q4 ticks $125; the old site separately lists a $150 "Emergency" removal tier, which likely explains where $150 came from |
| Booking-fee reschedule notice | 24 hours, published sitewide on PMU pages | 48 hours — Q20 directly ticks 24 hours; Acuity's own wording said 48 |
| Business phone number | (250) 801-6864 | Omitted — found on the old live site, not asked in the questionnaire but not contradicted either |
| Business email | Browsonpointkelowna@gmail.com | Omitted — same source |

**Reopened — the questionnaire flagged the published number as *wrong*, without giving a replacement:**

| Fact | Now | Why it can't just stay as-is |
| --- | --- | --- |
| 24k Gold whitening price | Re-blocked | Q17 ticks "No — should be different," blank left empty. Publishing $99 (Basic's price) as final would mean publishing a number Jamie is on record saying is wrong. |
| RF 3-session package price | Re-blocked | Q10 ticks "reprice" (pay-as-you-go at $175 barely undercuts the $190 package), blank left empty. |
| Top + Bottom Eyeliner combo price | Re-blocked | Q11 ticks "reprice" ($199 + $120 = $319, $1 under the published $320), blank left empty. |
| Emergency saline removal — offered / window / fee | Re-blocked (was already partly blocked on the fee only) | Q26/Q27/Q28 all unconfirmed; the old site's separate $150 "Emergency (24-48 hours)" listing raises the question of whether it still exists at all, on top of not knowing the window or any after-hours surcharge. |

## Contradictions — must be resolved by Jamie before any related copy is written

| #   | Contradiction                                     | Conflicting answers           | Status                                                                                   |
| --- | ------------------------------------------------- | ----------------------------- | ----------------------------------------------------------------------------------------- |
| 1   | Booking notice period: 24 or 48 hours?            | Q20 (24 hrs) vs. Q22 (48 hrs) | **Resolved** — 24 hours, trusting Q20's direct tick over Acuity's wording. See table above. |
| 2   | PMU training: remove entirely, or give it a page? | Q30 vs. Q52                   | **Resolved** — `/training/` covers lash lift + whitening only, no PMU. Robin's call, 2026-08-29. |
| 3   | Saline removal price: $125 or $150?               | Q4 vs. Q26                    | **Resolved** — $125, trusting Q4's direct tick. The $150 on the old site is very likely the separate "Emergency" tier, not the regular price. See table above. |

## Per-page blockers — live `<Blocked/>` components

Every row below, Robin decided to keep hard-blocked — these still throw in production until the real answer comes in.

| Page                                       | Blocked                                                        | Source                                                                      |
| ------------------------------------------ | ---------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `/permanent-makeup/microblading/`          | Missed-touch-up-window pricing                                    | Q39                                                                         |
| `/permanent-makeup/permanent-eyeliner/`    | Top + Bottom combo price                                          | Q11 — ticked "reprice," no number given                                    |
| `/permanent-makeup/powder-brows/`          | Longevity claim, missed-touch-up-window pricing                   | Q37 was scoped to microblading only, not powder brows; Q39                  |
| `/permanent-makeup/saline-tattoo-removal/` | Aftercare, emergency removal (offered/window/fee)                 | Q42, Q26/Q27/Q28                                                            |
| `/smile/teeth-whitening/`                  | Tier distinction, 24k Gold price, contraindications               | Q18, Q17 (ticked "wrong," no number), Q41                                  |
| `/smile/sensitive-teeth-whitening/`        | Price, contraindications                                          | Q17 (same as above), Q41                                                   |
| `/smile/tooth-gems/`                       | Aftercare                                                         | Q43 (blocks the single highest-value page in the set — 3,400/mo, KD 0)      |
| `/skin-tightening/`                        | 3-session package price, contraindications (hard blocker)         | Q10 (ticked "reprice," no number), Q44 — Robin explicitly kept the contraindications; medical-safety fact, not a style call |
| `/contact/`                                | Hours, parking/directions                                         | Q40, Q49 — phone and email are now resolved, see table above               |

## Other missing answers (not yet wired to a built page)

| Item                          | Question   | Note                                                                                                                                       |
| ----------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Derol lip plumping kit price  | Q31        | Confirmed wanted — Jamie ticked "Yes," just no price given. Not a "maybe drop" anymore, just still no page possible without a number. Kept. |
| Lip kit enquiry destination   | Q48 vs Q31 | Q48 ticks "retire" the Courtenay email — resolved in principle, but moot until the lip kit page itself exists. Kept for when it does.       |
| Booking fee scope             | Q23        | Ticked "applies to all bookings," not just PMU — but no page outside PMU currently shows the $50 fee notice. New scope question, not yet acted on. |

## Not a content blocker, but needs an answer before launch

- **Production domain.** `src/lib/site.ts` holds a placeholder (`https://www.browsonpoint.com`) used for `metadataBase`, the sitemap, and JSON-LD `url` fields. Confirm the real domain and update that one file before launch.
- **Postal code.** The Acuity-sourced address (3344 Sundance Drive, West Kelowna, BC) has no postal code anywhere in the source — not invented.

## Launch gate (not blockers — deliberate, flip only on go-live instruction)

- `src/app/layout.tsx` — `<meta name="robots" content="noindex, nofollow, noarchive" />`, marked with a `LAUNCH GATE` comment
- `src/app/page.tsx`, `src/app/services/page.tsx`, `src/app/about/page.tsx` — each also sets `metadata.robots = { index: false, follow: false }`, a second noindex mechanism. Must be removed alongside the layout tag.
- `src/app/robots.ts` — currently `disallow: '/'`, marked with a `LAUNCH GATE` comment
