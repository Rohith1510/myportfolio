# Original portfolio figures

Two bespoke figures created with the Hairline create skill selected by the portfolio owner: **Assembly** and **Fieldnotes**. The figures are original geometry, not traced product art or copied example drawings.

## Files

- `assembly.js`: a tabletop terminal split into interface, circuit, and foundation layers.
- `fieldnotes.js`: a paper organizer that fans its research sheets for inspection.
- `vendor/hairline/`: unchanged official skill, kernel, bench, authoring references, examples, and QA helpers. MIT license included. Source: https://github.com/lucasmarkes/hairline/tree/main/skills/hairline-create
- `public/figures/`: deployable integration bundle and two standalone HTML artifacts.

## Rebuild and check

Run from the repository root:

```sh
node artwork/build-figures.mjs
node artwork/vendor/hairline/validate.mjs public/figures/hairline-assembly.html
node artwork/vendor/hairline/validate.mjs public/figures/hairline-fieldnotes.html
node artwork/check-figures.mjs assembly fieldnotes
```

The check wrapper calls the unchanged official look helper and selects the installed Microsoft Edge through its Playwright adapter. It uses the repository's installed Playwright package. On another machine with Chrome/Chromium, the official look helper can be called directly instead. The wrapper creates look, blind-thumbnail, and motion sheets under `test-results/hairline-assembly/` and `test-results/hairline-fieldnotes/`.

Keep each original figure source under 200 lines, as required by Hairline's static validator. The figure sources are intentionally compact; do not run a whole-repository formatter over them without checking the line limit. Edit the figure source, rebuild, validate, and inspect its look sheet again. Keep the vendored kernel and bench unchanged.

## Native embedding

The browser bundle exposes `window.PortfolioHairline = { HL, figures }`. As in the official bench, call `HL.inject(document)`, give the stage a `data-hairline` attribute, create its 400 × 320 SVG with `HL.mk`, and call the selected definition's `mount({stage, svg, read}, definition.range[1])`. Keep the returned handle and call `destroy()` on teardown.

The engine's public CSS controls are `--hairline-plate`, `--hairline-hi`, `--hairline-edge`, `--hairline-mid`, `--hairline-lo`, and `--hairline-stroke`. Set `--hairline-plate` to the surrounding surface color to match the opaque faces. The bench's `--ground` / `--ink` variables do not control the injected SVG palette. The figure code itself sets no color, width, or fill.

The source loops use the official register lifecycle and tween clocks, sleep when settled/offscreen, and honor reduced motion. The official autoplay tour does not run under reduced motion; the embedded figures remain still under reduced motion.

## Standalone inspection

Open `public/figures/hairline-assembly.html?play=1` or `public/figures/hairline-fieldnotes.html?play=1` to play the declared tour, or use the page's Play control. The tour's narrative should still be judged by the portfolio owner.

