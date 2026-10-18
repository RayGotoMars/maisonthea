export default ({ site, products, t, productCard }) => ({
  path: "/",
  title: { en: "Foldable sun hats from Los Angeles", zh: "来自洛杉矶的可折叠遮阳帽" },
  description:
    "MAISON THÉA makes wide-brim sun hats that fold into your bag. Light, breathable and one size fits all. Born under the Los Angeles sun.",
  body: `
<section class="hero"><div class="wrap">
  <div>
    <p class="eyebrow">${t("Born under the Los Angeles sun · Collection 01", "诞生于洛杉矶的阳光下 · 第一系列")}</p>
    <h1>${t("The sun hat that <em>folds</em> into your bag.", "一顶能<em>折进包里</em>的遮阳帽。")}</h1>
    <p class="lede">${t(
      "Wide-brimmed, feather-light and breathable. Wear it to the office, the beach or the airport, then fold it away.",
      "宽檐、轻盈、透气。上班、海边、机场都能戴，不戴的时候折起来放进包里。"
    )}</p>
    <div class="btns">
      <a class="btn" href="/shop/">${t("Shop the collection", "选购系列")}</a>
      <button class="btn ghost js-fold" type="button" aria-pressed="false" aria-controls="stage">${t("Fold it", "折叠看看")}</button>
    </div>
  </div>
  <figure class="stage" id="stage">
    <div class="sun" aria-hidden="true"></div>
    <svg viewBox="0 0 400 300" role="img" aria-label="Wide-brim sun hat">
      <g class="bag" fill="none" stroke="var(--muted)" stroke-width="1.5">
        <path d="M128 175 h144 l-12 95 h-120 z"/>
        <path d="M165 175 q35 -45 70 0"/>
      </g>
      <g class="hatgrp">
        <ellipse cx="200" cy="175" rx="185" ry="42" fill="var(--hat)"/>
        <ellipse cx="200" cy="170" rx="160" ry="32" fill="var(--hat)" stroke="var(--line)" stroke-width="1"/>
        <g class="crown">
          <path d="M128 168 C128 110 150 82 200 82 C250 82 272 110 272 168 Z" fill="var(--hat)" stroke="var(--line)" stroke-width="1"/>
          <path d="M129 150 Q200 165 271 150 L272 168 Q200 182 128 168 Z" fill="var(--hatband)"/>
        </g>
      </g>
    </svg>
    <figcaption>
      <span class="when-open">${t("Open · wide brim", "展开 · 宽帽檐")}</span>
      <span class="when-folded">${t("Folded · fits in a tote", "折好 · 放得进托特包")}</span>
    </figcaption>
  </figure>
</div></section>

<div class="promise"><div class="wrap">
  <div><h3>${t("Folds flat", "折叠收纳")}</h3><p>${t(
    "Packs into a tote or carry-on and springs back to shape.",
    "折小放进包或登机箱，打开就恢复原样。"
  )}</p></div>
  <div><h3>${t("Breathes", "透气不闷")}</h3><p>${t(
    "Soft woven fabric that keeps your head cool under the LA sun.",
    "柔软织布，洛杉矶的大太阳下也不闷头。"
  )}</p></div>
  <div><h3>${t("Fits everyone", "一顶适合所有人")}</h3><p>${t(
    "An adjustable back closure, so there's no size to guess.",
    "后侧魔术贴可调节，不用挑尺码。"
  )}</p></div>
</div></div>

<section class="band" id="shop"><div class="wrap">
  <div class="head"><h2>${t("Collection 01", "第一系列")}</h2><a class="eyebrow link" href="/shop/">${t("Three shapes · two colors each", "三款 · 每款两色")}</a></div>
  <div class="grid">
    ${products.map(productCard).join("\n")}
  </div>
</div></section>

<section class="band" id="wear" style="padding-top:0"><div class="wrap">
  <div class="head"><h2>${t("One hat, every plan.", "一顶帽子，哪里都能戴。")}</h2><span class="eyebrow">${t("For every woman, every age", "每个年龄都好看")}</span></div>
  <ul class="occ">
    <li><b>${t("Office", "上班")}</b><span>${t("Works with a blazer", "配西装也不违和")}</span></li>
    <li><b>${t("Beach &amp; boat", "海边 · 出海")}</b><span>${t("Full-face shade", "整张脸都遮住")}</span></li>
    <li><b>${t("Hiking", "徒步 · 爬山")}</b><span>${t("Light, breathable", "轻、透气")}</span></li>
    <li><b>${t("Travel", "旅行 · 机场")}</b><span>${t("Folds into a carry-on", "折进登机箱")}</span></li>
    <li><b>${t("Weddings", "婚礼")}</b><span>${t("Custom names for the party", "伴娘团定制名字")}</span></li>
    <li><b>${t("Race day &amp; parties", "赛马 · 派对")}</b><span>${t("Elegant, never fussy", "优雅不花哨")}</span></li>
  </ul>
</div></section>

<section class="band steps" id="fold"><div class="wrap">
  <div class="head"><h2>${t("Folds in three moves", "三步折好")}</h2></div>
  <ol>
    <li><h3>${t("Fold in half", "对折")}</h3><p>${t("Bring the brim together, front to back.", "把帽檐前后对折。")}</p></li>
    <li><h3>${t("Roll or fold again", "再卷或再折")}</h3><p>${t("Roll from one side toward the other into a small bundle.", "从一边卷到另一边，变成小小一团。")}</p></li>
    <li><h3>${t("Pack it", "放进包里")}</h3><p>${t("Unfold when you arrive. The brim springs back.", "到了再打开，帽檐自动恢复。")}</p></li>
  </ol>
</div></section>

<section class="band"><div class="wrap split">
  <div class="mono" aria-hidden="true">Théa</div>
  <div>
    <p class="eyebrow">${t("The name", "名字的由来")}</p>
    <h2 class="h2">${t("Light, in every sense.", "轻盈，也是光。")}</h2>
    <p>${t(
      "In Greek myth, Theia is the Titan of light, the mother of the sun, and the one who gives gold its shine. We named the house after her, because every hat here is made for a life lived in the sun.",
      "在希腊神话里，Theia 是光之女神、太阳的母亲，也是让黄金闪耀的神。我们用她的名字命名，因为这里的每一顶帽子，都为阳光下的生活而做。"
    )}</p>
    <a class="btn ghost" href="/story/">${t("Our story", "品牌故事")}</a>
  </div>
</div></section>

<section class="band" id="custom" style="padding-top:0"><div class="wrap split">
  <div class="mono" aria-hidden="true">Bride</div>
  <div>
    <p class="eyebrow">${t("Custom &amp; weddings", "定制 · 婚礼")}</p>
    <h2 class="h2">${t("Make it yours.", "做成你的专属。")}</h2>
    <p>${t(
      "Add a name or initials to the band, or dress a whole bridal party or event in matching hats. Custom orders are made to order and are final sale.",
      "帽带上可以加名字或缩写，也可以给整个伴娘团或活动订同款帽子。定制款按单制作，不退不换。"
    )}</p>
    <a class="btn ghost" href="/custom/">${t("Start a custom order", "开始定制")}</a>
  </div>
</div></section>

<section class="band" style="padding-top:0"><div class="wrap">
  <div class="trade">
    <div><h2>${t(`Stock ${site.name} in your shop`, "欢迎批发合作")}</h2>
    <p>${t(
      "Boutiques, resort and airport shops, wedding planners and stylists: ask us about wholesale pricing.",
      "精品店、度假区和机场商店、婚礼策划、造型师，欢迎询问批发价。"
    )}</p></div>
    <a class="btn ghost" href="/contact/#wholesale">${t("Wholesale inquiry", "批发咨询")}</a>
  </div>
</div></section>
`,
});
