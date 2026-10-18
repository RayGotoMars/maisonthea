export default ({ t }) => ({
  path: "/story/",
  title: { en: "Our story", zh: "品牌故事" },
  description: "Why MAISON THÉA exists: a sun hat light enough to forget, elegant enough for the office, and small enough to fold into a bag.",
  body: `
<section class="page-head"><div class="wrap narrow">
  <p class="eyebrow">${t("Our story", "品牌故事")}</p>
  <h1>${t("Made for a life in the sun.", "为阳光下的生活而做。")}</h1>
</div></section>

<section class="band" style="padding-top:0"><div class="wrap narrow prose">
  <p class="lede">${t(
    "Los Angeles has a lot of sun. Most of the hats made for it are caps: hot on the head, heavy on the hair, and impossible to wear with a blazer.",
    "洛杉矶的太阳很大。为它准备的帽子大多是棒球帽：闷头、压头发，配上班的衣服也不好看。"
  )}</p>
  <p>${t(
    "We wanted something else. A wide brim that actually shades your face. A hat that breathes, so you forget you're wearing it. A shape quiet enough for the office and pretty enough for a wedding. And when you walk inside, a hat that folds into your bag instead of taking up your hands.",
    "我们想要不一样的帽子：真正能遮住脸的宽帽檐；透气，戴着像没戴一样；够低调，可以戴去上班，也够好看，可以戴去婚礼；进到室内，还能折起来放进包里，不用一直拿在手上。"
  )}</p>
  <p>${t(
    "The first hats were made for friends. They kept asking where to buy one. So we started a house.",
    "最早的几顶帽子是做给朋友的。她们戴上之后总有人问：在哪里买的？于是就有了这个品牌。"
  )}</p>

  <h2>${t("Why Théa", "为什么叫 Théa")}</h2>
  <p>${t(
    "In Greek myth, Theia is the Titan of light, the mother of the sun, and the goddess who gives gold its shine. <em>Maison</em> is French for house. Together: a house of light.",
    "在希腊神话里，Theia 是光之女神，太阳的母亲，也是让黄金闪耀的女神。<em>Maison</em> 在法语里是“家”。合在一起，就是“光之家”。"
  )}</p>

  <h2>${t("What we believe", "我们相信")}</h2>
  <ul class="beliefs">
    <li><b>${t("Light, small, easy to pack.", "轻、小、好收纳。")}</b> ${t("A hat should go where you go.", "帽子应该跟着你去任何地方。")}</li>
    <li><b>${t("Simple enough for everything.", "简单，什么都能配。")}</b> ${t("Quiet colors that work with what's already in your closet.", "安静的颜色，和你衣柜里的衣服都能搭。")}</li>
    <li><b>${t("Elegant, never fussy.", "优雅，但不花哨。")}</b> ${t("Made to make you feel good, not to shout.", "让你戴着舒服、自信，而不是抢风头。")}</li>
  </ul>
  <p><a class="btn" href="/shop/">${t("Shop the collection", "选购系列")}</a></p>
</div></section>
`,
});
