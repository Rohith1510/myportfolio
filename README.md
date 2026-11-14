# Rohith Pranav Bala — Portfolio

The `New` branch redesign uses a white and ink palette, cobalt accents, Geist typography with Instrument Serif display accents, and two original interactive Hairline figures. Built on the existing Next.js 15, React 19, Tailwind CSS 4, and Radix/shadcn primitives. All fonts and assets are served locally.

Requires Node.js 22.18 or newer.

## Development and preview

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Use `npm.cmd` on Windows PowerShell if execution policy blocks `npm.ps1`.

```sh
npm run lint
npm run typecheck
npm run test:e2e
npm run build
npm run preview
```

The production build is a static export in `out/`; production build cache is in `.next/`, and development uses `.next-dev/` so the two commands cannot overwrite each other’s manifest files. The included `preview` / `start` server supports clean project URLs and the custom 404. For Vercel, retain the existing Next.js project setup. No new hosting account is required.

The browser suite uses installed Microsoft Edge and checks 390px, 768px, and 1440px. It covers existing navigation, links, images, keyboard access, contrast, reduced motion, all case studies, and Hairline autoplay and client navigation. `TEST_BASE_URL` can point the suite at the separately started production preview. Generated screenshots and reports go into ignored `test-results/`.

## Original Hairline figures

- **Assembly:** a layered desktop instrument; pointing at its interface, circuit deck, or base opens that part for inspection.
- **Fieldnotes:** a paper organizer; pointing at a research sheet fans the papers into a reading arrangement.

Both figures run directly in the page and automatically tour while visible. Pointer interaction and keyboard focus pause the tour; reduced-motion users get a still, pointer-responsive figure. No playback buttons are shown. The page keeps the 400×320 drawing ratio so pointer hit areas stay aligned on mobile. The site follows the operating-system theme initially, with a header toggle that saves an explicit light/dark preference. Standalone figure artifacts retain both themes and the original intensity control.

Source and reproduction:

```sh
npm run artwork:build
npm run artwork:check
```

Source: `artwork/assembly.js`, `artwork/fieldnotes.js`. Unchanged official Hairline engine and skill helpers: `artwork/vendor/hairline/`. The look helper uses installed Edge on this Windows setup. Normal site builds do not run a browser or need the upstream skill installed.

Standalone artifacts: `public/figures/hairline-assembly.html` and `public/figures/hairline-fieldnotes.html`. Integration bundle: `public/figures/portfolio-figures.js`. Generated validation reports go into `test-results/`.

## Content

- Repeated portfolio content: `lib/portfolio.ts`.
- Current résumé: `public/Full_Resume.pdf`.
- Homepage: `app/page.tsx`; case studies: `app/projects/[slug]/page.tsx`.
- Content decisions, verified sources, and owner-review items: `CONTENT-NOTES.md`.
- External link check: `node scripts/check-links.mjs`.

Existing public section fragments and case-study URLs are preserved. The redesign does not add unverified project metrics or change the source-backed experience timeline.
Third-party attribution: `THIRD-PARTY-NOTICES.md`.

Development caches (`.next-dev/`), production output (`.next/`, `out/`), and test reports (`test-results/`) are generated locally and ignored by Git. They can be deleted after stopping the development server; the relevant commands recreate them.
