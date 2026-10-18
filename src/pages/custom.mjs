export default ({ t }) => ({
  path: "/custom/",
  title: { en: "Custom & weddings", zh: "定制与婚礼" },
  description: "Personalized sun hats with names or initials on the band, and matching hats for bridal parties and events.",
  body: `
<section class="page-head"><div class="wrap">
  <p class="eyebrow">${t("Custom &amp; weddings", "定制 · 婚礼")}</p>
  <h1>${t("Make it yours.", "做成你的专属。")}</h1>
  <p class="lede">${t(
    "A name on the band, initials for a honeymoon, or matching hats for the whole bridal party. Tell us what you have in mind.",
    "帽带上加名字、蜜月用的缩写，或者整个伴娘团的同款帽子，告诉我们你的想法。"
  )}</p>
</div></section>

<section class="band" style="padding-top:0"><div class="wrap">
  <div class="tiles">
    <div><p class="mono sm" aria-hidden="true">A · M</p><h3>${t("Names &amp; initials", "名字 · 缩写")}</h3><p>${t("Personalize the band of any hat in the collection.", "系列里任何一款都可以在帽带上定制文字。")}</p></div>
    <div><p class="mono sm" aria-hidden="true">Bride</p><h3>${t("Bridal parties", "伴娘团")}</h3><p>${t("Matching hats for the bride and her friends, each with her own name.", "新娘和伴娘的同款帽子，每顶都可以印上各自的名字。")}</p></div>
    <div><p class="mono sm" aria-hidden="true">Event</p><h3>${t("Events &amp; teams", "活动 · 团体")}</h3><p>${t("Retreats, race days, garden parties and brand events.", "团建、赛马日、花园派对、品牌活动。")}</p></div>
  </div>
</div></section>

<section class="band steps"><div class="wrap">
  <div class="head"><h2>${t("How it works", "定制流程")}</h2></div>
  <ol class="four">
    <li><h3>${t("Tell us", "告诉我们")}</h3><p>${t("Send the form below with your date, quantity and idea.", "填写下面的表格，写上日期、数量和想法。")}</p></li>
    <li><h3>${t("See a mockup", "确认设计稿")}</h3><p>${t("We reply with options, a price and a mockup.", "我们会回复方案、报价和效果图。")}</p></li>
    <li><h3>${t("Confirm", "确认下单")}</h3><p>${t("Approve the design and pay to start production.", "确认设计并付款后开始制作。")}</p></li>
    <li><h3>${t("Delivered", "送到你手上")}</h3><p>${t("Your hats arrive ready for the day.", "帽子按时送到，准备迎接你的大日子。")}</p></li>
  </ol>
</div></section>

<section class="band" id="inquiry"><div class="wrap narrow">
  <div class="head"><h2>${t("Start a custom order", "开始定制")}</h2></div>
  <form class="form js-mailto" data-subject="Custom order inquiry" novalidate>
    <div class="row">
      <label>${t("Name", "姓名")}<input name="name" required autocomplete="name"></label>
      <label>${t("Email", "邮箱")}<input name="email" type="email" required autocomplete="email"></label>
    </div>
    <div class="row">
      <label>${t("Event date", "活动日期")}<input name="date" type="date"></label>
      <label>${t("How many hats", "数量")}<input name="quantity" type="number" min="1" inputmode="numeric"></label>
    </div>
    <label>${t("Tell us your idea", "你的想法")}<textarea name="details" rows="5" required></textarea></label>
    <button class="btn" type="submit">${t("Send inquiry", "发送")}</button>
    <p class="form-msg" aria-live="polite"></p>
    <p class="small muted">${t("Custom orders are made to order and are final sale.", "定制款按单制作，不退不换。")}</p>
  </form>
</div></section>
`,
});
