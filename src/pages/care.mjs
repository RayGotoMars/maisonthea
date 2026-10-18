export default ({ site, t }) => {
  const faqs = [
    ["How do I find my size?", "怎么选尺码？",
     "You don't need to. Every hat is one size, with a hook-and-loop closure at the back that adjusts to fit.",
     "不用选。每一款都是均码，后侧魔术贴可以调节大小。"],
    ["Will it really spring back after folding?", "折过之后真的能恢复原样吗？",
     "Yes. Fold it in half, roll it, pack it. When you take it out, give the brim a gentle shake and it returns to shape.",
     "可以。对折、卷起、放进包里。拿出来以后轻轻抖一抖帽檐，就会恢复原样。"],
    ["Can I wear a ponytail?", "可以扎马尾吗？",
     "With the open-crown styles (The Riviera and The Malibu), yes. The adjustable back works with a low ponytail on The Signature, too.",
     "空顶款（里维埃拉、马里布）完全可以。经典款后侧可调节，低马尾也能戴。"],
    ["How do I clean it?", "怎么清洁？",
     "Spot clean with a damp cloth and let it air-dry away from direct heat. Please don't machine-wash, soak or tumble-dry.",
     "用湿布轻轻擦拭，放在阴凉处自然晾干。请不要机洗、泡水或烘干。"],
    ["Where do you ship?", "可以寄到哪里？",
     `Within the United States for now. Shipping is free on orders over $${site.freeShippingOver}.`,
     `目前只发美国境内。满 $${site.freeShippingOver} 包邮。`],
    ["Can I return or exchange?", "可以退换吗？",
     "Yes, unworn hats within 30 days. Your first color exchange is free. Custom pieces are final sale.",
     "可以。未佩戴的帽子 30 天内可退换，第一次换颜色免费。定制款不退不换。"],
    ["Do you offer wholesale?", "可以批发吗？",
     "Yes. Boutiques, resort and airport shops, wedding planners and stylists are welcome to get in touch.",
     "可以。欢迎精品店、度假区和机场商店、婚礼策划和造型师联系我们。"],
  ];
  return {
    path: "/care/",
    title: { en: "Care & FAQ", zh: "保养与常见问题" },
    description: "How to fold, store and clean your MAISON THÉA sun hat, and answers to common questions about sizing, shipping and returns.",
    body: `
<section class="page-head"><div class="wrap">
  <p class="eyebrow">${t("Care &amp; FAQ", "保养与常见问题")}</p>
  <h1>${t("Good to know.", "你可能想知道。")}</h1>
</div></section>

<section class="band steps" style="padding-top:48px"><div class="wrap">
  <div class="head"><h2>${t("Caring for your hat", "如何保养")}</h2></div>
  <ol>
    <li><h3>${t("Fold, don't crush", "折叠，别硬压")}</h3><p>${t("Fold in half and roll gently. Keep heavy things off it in your bag.", "对折后轻轻卷起。放在包里时别压重物。")}</p></li>
    <li><h3>${t("Spot clean", "局部清洁")}</h3><p>${t("Wipe marks with a damp cloth. No machine-washing or soaking.", "有污渍就用湿布擦。不要机洗或泡水。")}</p></li>
    <li><h3>${t("Air-dry, store open", "晾干，展开收纳")}</h3><p>${t("Dry in the shade. At home, store it open so the brim rests.", "放在阴凉处晾干。在家时展开放，让帽檐休息。")}</p></li>
  </ol>
</div></section>

<section class="band"><div class="wrap">
  <div class="head"><h2>${t("Questions", "常见问题")}</h2></div>
  <div class="faq">
    ${faqs
      .map(
        ([qe, qz, ae, az]) =>
          `<details><summary>${t(qe, qz)}</summary><p>${t(ae, az)}</p></details>`
      )
      .join("\n    ")}
  </div>
  <p class="note">${t("Still wondering?", "还有问题？")} <a href="/contact/">${t("Write to us", "联系我们")}</a></p>
</div></section>
`,
  };
};
