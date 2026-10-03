# Image naming convention

`{section}-{service}-{subject}-{view}-{nn}.{ext}`

- All lowercase, hyphen-separated, no spaces, 2-digit sequence (`01`, `02`, ...).
- **section** matches the site: `brows`, `lashes`, `permanent-makeup`, `smile`, `about`, `brand`, `partners`, `testimonials`.
- **service** is the service slug (`microblading`, `powder-brows`, `lift`, `tooth-gem`, `teeth-whitening`, `eyeliner`, `removal`).
- **subject** (optional) is the variant: `bomb`, `keratin`, `basic`, `ultra`, `saline`, `microblade`.
- **view** is one of `before-after`, `closeup`, `healed`, `procedure`, `outline`, `after`, `portrait`, `working`, `logo`.
- Number 01 is the best/primary shot for that group.

Folders: `public/services/{lashes,brows,permanent-makeup,smile}`, `public/about`, `public/brand`, `public/partners`, `public/testimonials`.
`public/overflow/` holds images not currently used on the site (same naming). `public/og/` is named by hand and left as is.
