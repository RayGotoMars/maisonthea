// Builds the static site into public/ from src/.
// Usage: node scripts/build.mjs
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "src");
const out = join(root, "public");

const site = JSON.parse(readFileSync(join(src, "site.json"), "utf8"));
const products = JSON.parse(readFileSync(join(src, "products.json"), "utf8"));

// ---------- helpers shared with page modules ----------

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Bilingual inline text. The visible language is chosen by a class on <html>. */
const t = (en, zh) => `<span class="en">${en}</span><span class="zh" lang="zh-Hans">${zh}</span>`;

const money = (n) => `$${n}`;

/** Band color that stays visible on the given hat color (gold on dark hats). */
const bandFor = (hex) => (hex.toLowerCase() === "#2a2521" ? "var(--gold)" : "var(--hatband)");

/** Line-art hat illustration used until product photography is ready. */
function hatSvg(shape, color = "var(--hat)", label = "", band = bandFor(color)) {
  const aria = label ? `role="img" aria-label="${esc(label)}"` : `aria-hidden="true"`;
  const shapes = {
    visor: `<ellipse cx="200" cy="140" rx="180" ry="44" fill="${color}" stroke="var(--line)"/>
      <path d="M135 132 Q200 150 265 132 L265 112 Q200 128 135 112 Z" fill="${band}"/>`,
    band: `<ellipse cx="200" cy="140" rx="165" ry="50" fill="${color}" stroke="var(--line)"/>
      <path d="M140 130 Q200 146 260 130 L258 100 Q200 116 142 100 Z" fill="${color}" stroke="var(--line)"/>
      <path d="M141 112 Q200 128 259 112 L259 122 Q200 138 141 122 Z" fill="${band}"/>`,
    closed: `<ellipse cx="200" cy="150" rx="180" ry="42" fill="${color}" stroke="var(--line)"/>
      <path d="M130 146 C130 92 152 66 200 66 C248 66 270 92 270 146 Z" fill="${color}" stroke="var(--line)"/>
      <path d="M131 128 Q200 142 269 128 L270 146 Q200 160 130 146 Z" fill="${band}"/>`,
  };
  return `<svg viewBox="0 0 400 220" ${aria}>${shapes[shape]}</svg>`;
}

function productCard(p) {
  return `<article class="card">
    <a class="ph" href="/products/${p.slug}/" aria-label="${esc(p.name)}">
      <span class="tag">${t(p.crown.en, p.crown.zh)}</span>
      ${hatSvg(p.shape, p.colors[0].hex)}
    </a>
    <div class="meta"><h3><a href="/products/${p.slug}/">${p.name}</a></h3><span class="price">${money(p.price)}</span></div>
    <p>${t(p.short.en, p.short.zh)}</p>
    <ul class="sw" aria-label="Colors">${p.colors
      .map((c) => `<li style="--c:${c.hex}" title="${esc(c.name)}"><span class="sr">${esc(c.name)}</span></li>`)
      .join("")}</ul>
  </article>`;
}

const ctx = { site, products, t, esc, money, hatSvg, bandFor, productCard };

// ---------- layout ----------

function assetVersion(file) {
  return createHash("sha1").update(readFileSync(join(out, file))).digest("hex").slice(0, 8);
}

function layout({ path, title, description, body }) {
  const pageTitle = path === "/" ? `${site.name} · ${title.en}` : `${title.en} · ${site.name}`;
  const url = site.url + path;
  const cssV = assetVersion("assets/css/site.css");
  const jsV = assetVersion("assets/js/site.js");
  const nav = [
    ["/shop/", "Shop", "商品"],
    ["/#fold", "How it folds", "如何折叠"],
    ["/custom/", "Custom", "定制"],
    ["/story/", "Our story", "品牌故事"],
  ];
  const navLinks = nav
    .map(([href, en, zh]) => `<a href="${href}"${href === path ? ' aria-current="page"' : ""}>${t(en, zh)}</a>`)
    .join("");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${esc(pageTitle)}</title>
<meta name="description" content="${esc(description)}">
${site.launched ? "" : '<meta name="robots" content="noindex">\n'}<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(pageTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta name="theme-color" content="#F6F4F1">
<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;1,6..96,400&family=Jost:wght@300;400;500&display=swap">
<link rel="stylesheet" href="/assets/css/site.css?v=${cssV}">
<script>try{var l=localStorage.getItem("thea-lang")||((navigator.language||"").toLowerCase().indexOf("zh")===0?"zh":"en");if(l==="zh"){document.documentElement.classList.add("is-zh");document.documentElement.lang="zh-Hans"}}catch(e){}</script>
<script src="/assets/js/site.js?v=${jsV}" defer></script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<div class="ship">${t(`Free US shipping on orders over $${site.freeShippingOver}`, `美国境内满 $${site.freeShippingOver} 包邮`)}</div>
<header class="site-header"><div class="wrap">
  <button class="menu-btn" type="button" aria-expanded="false" aria-controls="site-nav"><span class="bars" aria-hidden="true"></span><span class="sr">Menu</span></button>
  <nav class="nav" id="site-nav" aria-label="Main">${navLinks}</nav>
  <a class="mark" href="/" aria-label="${esc(site.name)} home">MAISON <span>THÉA</span></a>
  <div class="right">
    <a class="hide-sm" href="/contact/#wholesale">${t("Wholesale", "批发")}</a>
    <div class="toggle" role="group" aria-label="Language">
      <button type="button" data-lang="en" aria-pressed="true">EN</button><button type="button" data-lang="zh" aria-pressed="false">中文</button>
    </div>
  </div>
</div></header>

<main id="main">
${body}
</main>

<section class="news" id="newsletter"><div class="wrap">
  <h2>${t("First to know about new colors.", "新颜色上市，第一时间通知你。")}</h2>
  <div>
    <form class="js-mailto" data-subject="Newsletter sign-up" novalidate>
      <label class="sr" for="news-email">Email</label>
      <input id="news-email" name="email" type="email" required autocomplete="email" data-ph-en="Email address" data-ph-zh="邮箱地址" placeholder="Email address">
      <button type="submit">${t("Join", "订阅")}</button>
    </form>
    <p class="form-msg" aria-live="polite"></p>
  </div>
</div></section>

<footer class="site-footer"><div class="wrap">
  <div class="foot-brand">
    <a class="mark" href="/">MAISON <span>THÉA</span></a>
    <p>${t("Born under the Los Angeles sun.", "诞生于洛杉矶的阳光下。")}</p>
    <p class="muted">${t(site.city, site.cityZh)}<br><a href="mailto:${site.email}">${site.email}</a></p>
  </div>
  <nav aria-label="Shop"><h2>${t("Shop", "商品")}</h2>
    <a href="/shop/">${t("All hats", "全部帽子")}</a>
    ${products.map((p) => `<a href="/products/${p.slug}/">${p.name}</a>`).join("\n    ")}
  </nav>
  <nav aria-label="Help"><h2>${t("Help", "帮助")}</h2>
    <a href="/care/">${t("Care & FAQ", "保养与常见问题")}</a>
    <a href="/shipping-returns/">${t("Shipping & returns", "运费与退换")}</a>
    <a href="/contact/">${t("Contact", "联系我们")}</a>
  </nav>
  <nav aria-label="House"><h2>${t("The house", "关于品牌")}</h2>
    <a href="/story/">${t("Our story", "品牌故事")}</a>
    <a href="/custom/">${t("Custom & weddings", "定制与婚礼")}</a>
    <a href="/contact/#wholesale">${t("Wholesale", "批发合作")}</a>
  </nav>
</div>
<div class="wrap legal"><span>© ${new Date().getFullYear()} ${esc(site.name)} · <span lang="zh-Hans">${site.nameZh}</span></span></div>
</footer>
</body>
</html>
`;
}

// ---------- build ----------

function writePage(path, html) {
  const file = path.endsWith(".html") ? join(out, path) : join(out, path, "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}

// Remove previously generated HTML so deleted pages don't linger; static assets stay.
for (const entry of readdirSync(out, { withFileTypes: true })) {
  if (entry.name === "assets" || !entry.isDirectory() && !entry.name.endsWith(".html")) continue;
  rmSync(join(out, entry.name), { recursive: true, force: true });
}

const built = [];
const pageDir = join(src, "pages");
for (const file of readdirSync(pageDir).filter((f) => f.endsWith(".mjs")).sort()) {
  const mod = await import(pathToFileURL(join(pageDir, file)).href);
  const pages = [].concat(mod.default(ctx));
  for (const page of pages) {
    writePage(page.path, layout(page));
    if (!page.path.endsWith(".html")) built.push(page.path);
  }
}

writeFileSync(
  join(out, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${built.map((p) => `  <url><loc>${site.url}${p}</loc></url>`).join("\n")}
</urlset>
`
);
writeFileSync(
  join(out, "robots.txt"),
  site.launched ? `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n` : "User-agent: *\nDisallow: /\n"
);

console.log(`Built ${built.length} pages into public/`);
if (!existsSync(join(out, "404.html"))) console.warn("Warning: no 404.html");
