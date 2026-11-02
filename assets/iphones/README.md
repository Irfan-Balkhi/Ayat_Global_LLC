# iPhone official images

These are official Apple product images for every iPhone from the iPhone X (2017) through the iPhone 18 Pro Max and iPhone Duo (2026), including the SE, mini, Plus, e and Air models. That makes 38 models.

- `manifest.json` lists every model with its colors and image URLs. It is the single source of truth.
- `download.mjs` downloads everything in the manifest and skips files you already have. Run it with `node assets/iphones/download.mjs`.
- Each model gets its own folder, `<slug>/`, for example `iphone-15-pro/`.

Apple owns these images. They are for showing the actual products, for example in a store listing. Don't edit them in a way that misrepresents a product.

## Progress (done one slice at a time)

| # | Slice | Status |
|---|-------|--------|
| 1 | One official image per model showing all its colors (`lineup.*`), from [Apple Support: Identify your iPhone model](https://support.apple.com/en-us/108044) | Done 2026-11-02: 38/38 downloaded |
| 2 | Per-color front and back: iPhone Duo, 18 Pro, 18 Pro Max | Todo |
| 3 | Per-color front and back: 17, 17 Pro, 17 Pro Max, Air, 17e | Todo |
| 4 | Per-color front and back: 16, 16 Plus, 16 Pro, 16 Pro Max, 16e | Todo |
| 5 | Per-color front and back: 15 family | Todo |
| 6 | Per-color front and back: 14 family, SE (3rd gen) | Todo |
| 7 | Per-color front and back: 13 family | Todo |
| 8 | Per-color front and back: 12 family, SE (2nd gen) | Todo |
| 9 | Per-color front and back: 11, 11 Pro, 11 Pro Max | Todo |
| 10 | Per-color front and back: X, XS, XS Max, XR | Todo |

For slices 2 to 10, add the URLs to each model's `images` map in the manifest, for example `"images": { "black-front": "...", "black-back": "..." }`. Then run `download.mjs`. The likely source is the Apple Newsroom launch press release for each model, which has per-color images, but this hasn't been checked yet.
