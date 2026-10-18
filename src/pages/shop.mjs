export default ({ site, products, t, esc, money, hatSvg, bandFor, productCard }) => {
  const shop = {
    path: "/shop/",
    title: { en: "Shop all hats", zh: "全部帽子" },
    description: "Collection 01: three foldable wide-brim sun hats, each in two colors. One size, adjustable fit.",
    body: `
<section class="page-head"><div class="wrap">
  <p class="eyebrow">${t("Collection 01", "第一系列")}</p>
  <h1>${t("Three shapes, made to travel.", "三种帽型，为出行而做。")}</h1>
  <p class="lede">${t(
    "Every hat folds into your bag, breathes in the heat and adjusts to fit. Pick your shape, then your color.",
    "每一顶都能折进包里，天热也透气，大小可调。先选帽型，再选颜色。"
  )}</p>
</div></section>
<section class="band" style="padding-top:0"><div class="wrap">
  <div class="grid">
    ${products.map(productCard).join("\n")}
  </div>
  <p class="note">${t(
    `One size with an adjustable back closure · Free US shipping over $${site.freeShippingOver} · 30-day returns`,
    `均码，后侧可调节 · 美国境内满 $${site.freeShippingOver} 包邮 · 30 天退换`
  )}</p>
</div></section>
`,
  };

  const detailPages = products.map((p) => {
    const others = products.filter((o) => o.slug !== p.slug);
    const buy = p.checkoutUrl
      ? `<a class="btn wide js-buy" href="${esc(p.checkoutUrl)}" data-base="${esc(p.checkoutUrl)}">${t(`Add to bag · ${money(p.price)}`, `加入购物袋 · ${money(p.price)}`)}</a>`
      : `<a class="btn wide" href="#newsletter">${t("Coming soon · notify me", "即将上市 · 到货通知我")}</a>`;
    return {
      path: `/products/${p.slug}/`,
      title: { en: p.name, zh: p.nameZh },
      description: `${p.name}: ${p.short.en} Foldable, breathable, one size. ${money(p.price)}.`,
      body: `
<section class="pdp"><div class="wrap">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="/shop/">${t("Shop", "商品")}</a> / <span aria-current="page">${p.name}</span></nav>
  <div class="pdp-grid">
    <figure class="pdp-media" style="--hat-pick:${p.colors[0].hex};--band-pick:${bandFor(p.colors[0].hex)}">
      <span class="tag">${t(p.crown.en, p.crown.zh)}</span>
      ${hatSvg(p.shape, "var(--hat-pick)", p.name, "var(--band-pick)")}
    </figure>
    <div class="pdp-info">
      <p class="eyebrow">${t("Collection 01", "第一系列")}</p>
      <h1>${p.name}</h1>
      <p class="zh-name" lang="zh-Hans">${p.nameZh}</p>
      <p class="price big">${money(p.price)}</p>
      <p>${t(p.long.en, p.long.zh)}</p>

      <fieldset class="colors">
        <legend>${t("Color", "颜色")}: <b class="js-color-name">${t(p.colors[0].name, p.colors[0].nameZh)}</b></legend>
        ${p.colors
          .map(
            (c, i) => `<label class="swatch" style="--c:${c.hex}">
          <input type="radio" name="color" value="${esc(c.name)}" data-hex="${c.hex}" data-band="${bandFor(c.hex)}" data-en="${esc(c.name)}" data-zh="${esc(c.nameZh)}"${i === 0 ? " checked" : ""}>
          <span class="sr">${esc(c.name)}</span>
        </label>`
          )
          .join("\n        ")}
      </fieldset>

      ${buy}
      <p class="small muted">${t(
        `Free US shipping over $${site.freeShippingOver} · 30-day returns · One free color exchange`,
        `美国境内满 $${site.freeShippingOver} 包邮 · 30 天退换 · 免费换色一次`
      )}</p>

      <div class="acc">
        <details open><summary>${t("Details", "商品细节")}</summary>
          <ul>
            <li>${t(p.crown.en + ", wide brim", p.crown.zh + "，宽帽檐")}</li>
            <li>${t("Folds flat or rolls up, and springs back to shape", "可对折或卷起，打开自动恢复")}</li>
            <li>${t("Soft, breathable woven fabric", "柔软透气的织布面料")}</li>
            <li>${t("Feather-light: you'll forget you're wearing it", "非常轻，戴着几乎没感觉")}</li>
          </ul>
        </details>
        <details><summary>${t("Fit", "尺码")}</summary>
          <p>${t(
            "One size. The hook-and-loop closure at the back adjusts to fit most heads, with or without a ponytail.",
            "均码。后侧魔术贴可以调节，适合大多数头围，扎不扎头发都能戴。"
          )}</p>
        </details>
        <details><summary>${t("Care", "保养")}</summary>
          <p>${t(
            "Spot clean with a damp cloth and let it air-dry. Please don't machine-wash or soak.",
            "用湿布轻轻擦拭，自然晾干。请不要机洗或泡水。"
          )} <a href="/care/">${t("Care guide", "保养指南")}</a></p>
        </details>
        <details><summary>${t("Shipping &amp; returns", "运费与退换")}</summary>
          <p>${t(
            `US shipping only for now. Free on orders over $${site.freeShippingOver}, otherwise a flat rate at checkout. Unworn hats can be returned within 30 days.`,
            `目前只发美国。满 $${site.freeShippingOver} 包邮，不满按结账时的固定运费。未佩戴的帽子 30 天内可退。`
          )} <a href="/shipping-returns/">${t("Full policy", "完整说明")}</a></p>
        </details>
      </div>
    </div>
  </div>
</div></section>

<section class="band"><div class="wrap">
  <div class="head"><h2>${t("Complete the collection", "同系列其他款")}</h2></div>
  <div class="grid two">
    ${others.map(productCard).join("\n")}
  </div>
</div></section>
`,
    };
  });

  return [shop, ...detailPages];
};
