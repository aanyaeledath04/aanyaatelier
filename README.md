# Aanya's Atelier — Site Guide

This site has no build step and no database. Everything the gallery
displays comes from one file: **`js/data.js`**. To add, edit, or
remove a piece, that's the only file you touch.

## Adding a new piece (2 steps)

1. **Add the image.** Save it into the `images/` folder. Use a short,
   lowercase filename with no spaces — e.g. `spring-still-life.jpg`.
   (JPG is best for photos of finished art; PNG is fine too.)

2. **Add an entry to `js/data.js`.** Open the file, copy this block,
   and paste it near the top of the `ARTWORKS` list (newest-first
   ordering isn't required — the site sorts for you — but it keeps
   the file easy to scan):

   ```js
   {
     title: "Piece Title",
     medium: "watercolor",
     mediumLabel: "Watercolor",
     year: 2026,
     yearLabel: "2026",
     theme: "Landscapes & Seascapes",
     image: "spring-still-life.jpg",
     blurb: "",
     featured: false
   },
   ```

   Fill in each field:
   - `title` — shown under the piece
   - `medium` — must be one of the existing keys below (this controls
     which tab it shows up under)
   - `mediumLabel` — the text visitors see (can be more specific than
     the key, e.g. `"Watercolor on Canvas Board"`)
   - `year` — a plain number, used for sorting. Use `null` if unknown
   - `yearLabel` — the text visitors see (e.g. `"Mar 2026"`)
   - `theme` — any short category. Reuse one from the list below where
     it fits, or just write a new one — new themes show up in the
     filter dropdown automatically
   - `image` — the filename you used in step 1
   - `blurb` — optional short note (leave `""` to skip)
   - `featured` — `true` puts it in the "Selected Works" strip on the
     homepage

3. Save the file. Open `index.html` in a browser (or refresh, if it's
   already hosted) — the new piece appears automatically, filed under
   the right medium tab and year/theme filters. No other file needs
   to change.

## Existing medium keys

Stick to these so the tabs don't multiply. If a genuinely new medium
shows up (say, Aanya starts working in ink wash), add a new key here
**and** to the `MEDIUM_ORDER` list at the bottom of `data.js`:

```
colorpencil · graphite · acrylic · pen · watercolor · charcoal · marker · mixed
```

`mixed` is the catch-all for one-off mediums (oil, oil pastel, spray
paint, collage) — if enough pieces accumulate in one of those, it's
easy to promote it to its own tab later.

## Removing or editing a piece

Find its block in `data.js`, edit the fields directly, or delete the
whole `{ ... },` block to remove it. Delete the matching image from
`images/` if you're removing it for good.

## Swapping out an existing piece

Since some current pieces will eventually be replaced: just edit that
entry's `image`, `title`, `medium`, etc. in place, and swap the file
in `images/` — no need to touch anything else.

## Hosting

This is a plain static site (HTML/CSS/JS, no server required). It can
be uploaded to the same host as the rest of eledath.com at the
`/aanyart/` path — just upload the whole folder as-is.

## About page

Edit `about.html` directly for the artist statement — it's plain text
in the HTML, marked with an `EDIT ME` comment where the placeholder
copy starts.
