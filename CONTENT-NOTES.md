# Portfolio audit — 14 November 2026

The starting point was the existing Next.js 15 / React 19 repository and the public portfolio at https://rohithpranavbala.vercel.app/. The original site had a single route, `/`, eight section fragments, two project screenshots, a contact form, and generic metadata. It had no case-study routes or résumé link. Demo links were `#` placeholders.

## Sources and decisions

| Item | Evidence | Decision |
| --- | --- | --- |
| Résumé | `public/Full_Resume.pdf`, the latest available résumé (12 Nov 2026; two pages) | Linked the actual PDF. No résumé was reconstructed. |
| ProQube.AI / Sourcerer | Latest résumé + owner-provided brief | Software Engineer I, Dec 2025–Mar 2026. Core engineer; 10-day team launch, 1,000+ first-week users. No employer UI or customer data published. |
| RuntimeBRT | Latest résumé, owner correction, and YouTube oEmbed for both supplied Shorts | Corrected the organization to RuntimeBRT. Credit is research and scriptwriting. Selected videos: “Is this the end of India's jet engine struggles?” and “India's secret aerospace giant.” No view count. |
| Croma Campus | Latest résumé | Feb 2026–Present, part-time Blockchain Trainer. Practical sessions, demonstrations, and onboarding. No invented syllabus. |
| BeetleX | Latest résumé | Added omitted Oct–Dec 2025 Developer Relations Engineer role. |
| Meteorite Labs | Latest résumé | Jun–Jul 2025. Social/logistics features, UI fixes, refactoring, and documentation. No unsupported feature ownership or performance percentage. |
| Invsto | Latest résumé | Jun–Dec 2024 and Frontend Engineer Intern, superseding both the brief's Jul–Nov and old site's Jul–Dec. Website launch, Next.js migration, and Web3 integration. No public employer PR found. |
| Silent / Aran | Public `Rohith1510/silent` README, live app, and integration docs | Final current name: Silent. Real public builder screenshot; no wallet connected. No Aran duplicate. Testnet-only MVP. ENS address pinning, official Anon-RPC reads, and CRE simulation described with their actual boundaries. |
| Promptora | https://devfolio.co/projects/promptora-22d5 + public source | June 2025 submission; Base track runner-up. Base Sepolia supersedes stale README Goerli wording. Original published screenshot and recorded Loom demo. |
| Rescue Chain / AidNet | Latest résumé, public AidNet source, old screenshot, and contribution PR | One project lineage. AidNet is the current name; Rescue Chain is the ETHIndia 2024 name. Finalist from résumé. Separate QV rank (14th) and grant (0.07443 ETH) omitted pending official result links. Old ETHIndia 2025 label removed. |
| Avax Studio | https://github.com/Rohith1510/avax | Archive title Avax Studio; notes repository's Subnet Studio name. Source link, no unverified live demo. |
| BS-GPT | Latest résumé + public source + live check | Archive source link. Public demo currently opens authentication; no analysis output screenshot fabricated. Public repository is React/Vite, so archive uses React rather than outdated Next.js stack text. |
| Goat Notes / EcoSync | Public sources and retained original portfolio | Compact archive with source links; EcoSync retained. |
| Kaimat | Public GitHub lookup returned 404; local repository alone is not public evidence | Omitted from public homepage until a public artifact is supplied. Intended description: local collectibles marketplace for buying, selling, and trading. |
| Recognition | Full latest résumé, existing list, LinkedIn, Devfolio | Precise separate labels for winner, Base runner-up, and ETHIndia finalist. No “7+ wins” aggregate. |
| IEEE paper | Supplied DOI, latest résumé, bibliographic search | Full survey title, IEEE / ICECONF 2025, DOI retained. DOI responds with an automated-access challenge; browser review recommended. |
| Earlier paper | https://www.irjweb.com/viewarticle.php?aid=Decentralized-Social-Media-Web3.0 | Publisher page confirms Rohith's name, title, and 7 Mar 2023 date. Retained. |
| Education | Latest résumé | B.E. Computer Science and Engineering, Dr. N.G.P. Institute of Technology, 2022–2026. Latest résumé lists 7.73/10; kept on PDF rather than adding density to homepage. |

## Owner review

- Confirm RuntimeBRT is still ongoing: latest résumé says Jul 2026–Present; initial brief said Jul–Oct 2026. Organization and selected-video attribution follow the owner's explicit correction.
- Confirm Croma Campus is still ongoing from Feb 2026.
- Confirm Invsto's Jun–Dec 2024 dates from the latest résumé; initial brief differed.
- Sourcerer's metrics and company scope are owner/résumé-backed. No public analytics evidence or employer screenshot was available.
- ETHIndia finalist is résumé-backed. Please supply an official project/results page to substantiate the separate quadratic-voting placement and grant before adding those.
- LinkedIn returns HTTP 999 to automated checks, so its current visibility needs a manual browser check. The supplied URL is preserved.
- DOI responds HTTP 202 to automated checks. Exact supplied DOI is retained.
- Kaimat needs a public repository, demo, or public-safe artifact before inclusion. Invsto Basket/login specifics and Croma topics/labs need supporting material before expansion.

## Assets and design provenance

- Original repository photos/screenshots retained at their existing URLs, including `/my_Img.jpg`, `/aidnet.png`, and `/EcoSync.png`.
- Silent screenshot captured from its public builder without connecting a wallet. Promptora screenshot downloaded from its public Devfolio submission. WebP versions are local, not hotlinked.
- Promptora vote counts are demonstration data. AidNet's screenshot includes original “100+” campaign demo copy; the case-study caption explicitly distinguishes it from verified usage.
- Geist and IBM Plex Mono are self-hosted. Their OFL licenses are included under `public/fonts/`.
- Hairline UI Changelog timeline (MIT) informed the adapted experience rail, scroll progress, semantic ordered list, and reduced-motion behavior. See `components/timeline.tsx` and `audit/THIRD-PARTY-NOTICES.md`.
- The `New` branch redesign adds two original Hairline figures, Assembly and Fieldnotes, following the owner’s explicit concept choice. See `audit/hairline-figures.md`. Silent retains its real product screenshot and contract-backed recovery walkthrough.

## Public compatibility

- Retained `/` and all original fragments: `#about`, `#skills`, `#experience`, `#projects`, `#achievements`, `#publications`, `#education`, `#contact`.
- Added four static case studies at `/projects/silent`, `/projects/sourcerer`, `/projects/promptora`, `/projects/aidnet`.
- Résumé is `/Full_Resume.pdf`; email, GitHub, LinkedIn, and original public assets remain accessible.
- Replaced fake demo links and the old third-party contact form with direct email and descriptive source/demo links.
- Preserved static export. Corrected the old build-cache/export-directory collision by using Next.js's default `.next` build directory and `out` export directory.
- Added canonical metadata, Open Graph image, Twitter preview, Person structured data, robots, sitemap, and a custom 404.

## Verification

See `audit/verification.md` for final command results and `audit/links.json` for external HTTP checks. Responsive screenshots are saved alongside this report. Browser automation tests live navigation, PDF headers and signature, all images, case studies, keyboard access, focus, reduced motion, and WCAG A/AA automated checks. Automated accessibility results complement, and do not replace, visual and keyboard review.

## Subsequent owner-provided metrics

The owner explicitly requested the hero claim "7+ Hackathon Wins" and the RuntimeBRT sentence "Researched and wrote short-form tech scripts for videos that reached over 1 million views across Instagram and YouTube." These replace the earlier decision to omit aggregate metrics. The platform scope and wording follow the owner’s instruction; no individual-post view counts are inferred. Individual award labels remain unchanged in the Achievements section. The phrase "1 million views" is visually emphasized with a semantic mark element in both themes.

Promptora image update: uses the landing-page cover screenshot from its public Devfolio submission (c4132040-9e99-471c-956d-1cce7667da3f.png), locally optimized as public/projects/promptora-landing.webp. Displayed metrics remain explicitly labeled as demonstration data in the case-study caption.
