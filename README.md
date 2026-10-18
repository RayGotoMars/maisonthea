# MAISON THÉA · 缇雅

Website for maisonthea.com: foldable wide-brim sun hats from Los Angeles. Bilingual (English / 中文), static, hosted on Cloudflare Workers.

## How it's put together

| Path | What it is |
|---|---|
| `src/site.json` | Brand name, email, free-shipping threshold, `launched` flag |
| `src/products.json` | The hats: name, price, colors, copy, `checkoutUrl` |
| `src/pages/*.mjs` | Page content. `t("English", "中文")` writes both languages |
| `scripts/build.mjs` | Shared header/footer and the build. Writes HTML into `public/` |
| `public/assets/` | CSS, JS, images (edited by hand) |
| `wrangler.jsonc` | Cloudflare config. Uploads `public/` as static assets |

The generated HTML in `public/` is committed, so Cloudflare needs no build step.

## Editing

```sh
# change something in src/ or scripts/, then:
node scripts/build.mjs
# preview locally
python3 -m http.server 8787 -d public   # open http://localhost:8787
```

Commit both `src/` and the rebuilt `public/`. Pushing to the production branch redeploys through Cloudflare's Git integration (`npx wrangler deploy`).

## Before launch

- **Search engines.** `launched` is `false` in `src/site.json`, so every page has `noindex` and `robots.txt` blocks crawlers. Set it to `true` and rebuild when you're ready to go public.
- **Checkout.** Each product has an empty `checkoutUrl`, so the button says "Coming soon · notify me". Paste a checkout link (Shopify or a Stripe Payment Link) into `src/products.json`, rebuild, and the button becomes "Add to bag". The selected color is added to the link as `?color=`.
- **Email.** Forms open the visitor's email app addressed to `hello@maisonthea.com`. Set that address up with Cloudflare Email Routing so it forwards to a real inbox.
- **Photos.** Hats are line drawings for now. Swap in product photos and the fold video when ready.
- **Placeholders.** Product names, prices and colors are from the homepage draft and still need Tiffany's confirmation.
