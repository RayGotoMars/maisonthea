export default ({ site, t }) => ({
  path: "/contact/",
  title: { en: "Contact & wholesale", zh: "联系与批发" },
  description: `Get in touch with ${site.name}, or ask about wholesale for boutiques, resort and airport shops, wedding planners and stylists.`,
  body: `
<section class="page-head"><div class="wrap">
  <p class="eyebrow">${t("Contact", "联系我们")}</p>
  <h1>${t("We'd love to hear from you.", "期待你的来信。")}</h1>
  <p class="lede">${t("Questions about an order, a custom idea, or anything else:", "关于订单、定制，或者任何问题：")} <a href="mailto:${site.email}">${site.email}</a></p>
</div></section>

<section class="band" style="padding-top:0"><div class="wrap split top">
  <div>
    <h2 class="h2">${t("Send a message", "留言")}</h2>
    <form class="form js-mailto" data-subject="Website message" novalidate>
      <label>${t("Name", "姓名")}<input name="name" required autocomplete="name"></label>
      <label>${t("Email", "邮箱")}<input name="email" type="email" required autocomplete="email"></label>
      <label>${t("Order number (optional)", "订单号（可选）")}<input name="order"></label>
      <label>${t("Message", "内容")}<textarea name="message" rows="5" required></textarea></label>
      <button class="btn" type="submit">${t("Send", "发送")}</button>
      <p class="form-msg" aria-live="polite"></p>
    </form>
  </div>
  <div id="wholesale">
    <h2 class="h2">${t("Wholesale", "批发合作")}</h2>
    <p class="muted">${t(
      `Boutiques, resort and airport shops, wedding planners and stylists: stock ${site.name} and ask us about wholesale pricing.`,
      "欢迎精品店、度假区和机场商店、婚礼策划、造型师询问批发价。"
    )}</p>
    <form class="form js-mailto" data-subject="Wholesale inquiry" novalidate>
      <label>${t("Business name", "店铺 / 公司名称")}<input name="business" required autocomplete="organization"></label>
      <label>${t("Your name", "联系人")}<input name="name" required autocomplete="name"></label>
      <label>${t("Email", "邮箱")}<input name="email" type="email" required autocomplete="email"></label>
      <label>${t("Website or Instagram", "网站或 Instagram")}<input name="website"></label>
      <label>${t("Tell us about your shop", "介绍一下你的店铺")}<textarea name="details" rows="4"></textarea></label>
      <button class="btn ghost" type="submit">${t("Send wholesale inquiry", "发送批发咨询")}</button>
      <p class="form-msg" aria-live="polite"></p>
    </form>
  </div>
</div></section>
`,
});
