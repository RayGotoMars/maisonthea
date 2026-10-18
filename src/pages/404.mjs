export default ({ t }) => ({
  path: "404.html",
  title: { en: "Page not found", zh: "页面不存在" },
  description: "This page could not be found.",
  body: `
<section class="page-head center"><div class="wrap narrow">
  <p class="eyebrow">404</p>
  <h1>${t("This page wandered off into the sun.", "这个页面去晒太阳了。")}</h1>
  <p class="lede">${t("Let's get you back in the shade.", "带你回到阴凉处。")}</p>
  <div class="btns center"><a class="btn" href="/">${t("Home", "首页")}</a><a class="btn ghost" href="/shop/">${t("Shop", "商品")}</a></div>
</div></section>
`,
});
