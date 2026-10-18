export default ({ site, t }) => ({
  path: "/shipping-returns/",
  title: { en: "Shipping & returns", zh: "运费与退换" },
  description: `Free US shipping over $${site.freeShippingOver}. Unworn hats can be returned within 30 days, with one free color exchange.`,
  body: `
<section class="page-head"><div class="wrap narrow">
  <p class="eyebrow">${t("Shipping &amp; returns", "运费与退换")}</p>
  <h1>${t("Simple, and fair.", "简单，也公平。")}</h1>
</div></section>

<section class="band" style="padding-top:0"><div class="wrap narrow prose">
  <h2>${t("Shipping", "运费")}</h2>
  <ul>
    <li>${t("We currently ship within the United States.", "目前只寄送美国境内。")}</li>
    <li>${t(`Free shipping on orders over $${site.freeShippingOver}.`, `订单满 $${site.freeShippingOver} 包邮。`)}</li>
    <li>${t("Under that, a flat rate is shown at checkout.", "不满时，结账页面会显示固定运费。")}</li>
    <li>${t("Every order gets a tracking number by email when it ships.", "发货后会通过邮件发送物流单号。")}</li>
  </ul>

  <h2>${t("Returns", "退货")}</h2>
  <ul>
    <li>${t("Return unworn hats in their original packaging within 30 days of delivery.", "收货后 30 天内，未佩戴、包装完好的帽子可以退货。")}</li>
    <li>${t("Return shipping is paid by the customer.", "退货运费由顾客承担。")}</li>
    <li>${t("Refunds go back to your original payment method once we receive the hat.", "收到退回的帽子后，退款会原路返回。")}</li>
  </ul>

  <h2>${t("Exchanges", "换货")}</h2>
  <ul>
    <li>${t("Your first color exchange is free.", "第一次换颜色免费。")}</li>
  </ul>

  <h2>${t("If something's wrong", "如果收到的商品有问题")}</h2>
  <p>${t(
    "If your hat arrives damaged or with a defect, email us a photo. We'll send a replacement or a refund, and you won't need to send it back.",
    "如果收到的帽子有损坏或瑕疵，请拍照发邮件给我们。我们会补发新的或退款，不需要寄回。"
  )}</p>

  <h2>${t("Custom orders", "定制款")}</h2>
  <p>${t("Custom and personalized pieces are made to order and are final sale.", "定制款按单制作，不退不换。")}</p>

  <p>${t("To start a return or exchange, email", "需要退换货，请发邮件到")} <a href="mailto:${site.email}">${site.email}</a> ${t("with your order number.", "并附上订单号。")}</p>
</div></section>
`,
});
