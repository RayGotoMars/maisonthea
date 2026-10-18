(function () {
  var root = document.documentElement;
  var EMAIL = "hello@maisonthea.com";

  function isZh() { return root.classList.contains("is-zh"); }

  // ----- language toggle -----
  function setLang(lang) {
    root.classList.toggle("is-zh", lang === "zh");
    root.lang = lang === "zh" ? "zh-Hans" : "en";
    document.querySelectorAll(".toggle [data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    document.querySelectorAll("[data-ph-en]").forEach(function (el) {
      el.placeholder = lang === "zh" ? el.dataset.phZh : el.dataset.phEn;
    });
    try { localStorage.setItem("thea-lang", lang); } catch (e) {}
  }

  document.addEventListener("DOMContentLoaded", function () {
    setLang(isZh() ? "zh" : "en");
    document.querySelectorAll(".toggle [data-lang]").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.dataset.lang); });
    });

    // ----- mobile menu -----
    var menuBtn = document.querySelector(".menu-btn");
    var nav = document.getElementById("site-nav");
    if (menuBtn && nav) {
      menuBtn.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", String(open));
      });
      nav.addEventListener("click", function (e) {
        if (e.target.closest("a")) { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
      });
    }

    // ----- header border on scroll -----
    var header = document.querySelector(".site-header");
    var onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // ----- hero fold demo -----
    document.querySelectorAll(".js-fold").forEach(function (btn) {
      var stage = document.getElementById(btn.getAttribute("aria-controls"));
      btn.addEventListener("click", function () {
        var folded = stage.classList.toggle("folded");
        btn.setAttribute("aria-pressed", String(folded));
        btn.innerHTML = folded
          ? '<span class="en">Unfold</span><span class="zh" lang="zh-Hans">展开</span>'
          : '<span class="en">Fold it</span><span class="zh" lang="zh-Hans">折叠看看</span>';
      });
    });

    // ----- product color picker -----
    document.querySelectorAll(".colors input[name=color]").forEach(function (input) {
      input.addEventListener("change", function () {
        var media = document.querySelector(".pdp-media");
        if (media) {
          media.style.setProperty("--hat-pick", input.dataset.hex);
          media.style.setProperty("--band-pick", input.dataset.band);
        }
        var label = document.querySelector(".js-color-name");
        if (label) label.innerHTML = '<span class="en">' + input.dataset.en + '</span><span class="zh" lang="zh-Hans">' + input.dataset.zh + "</span>";
        var buy = document.querySelector(".js-buy");
        if (buy && buy.dataset.base) {
          var url = new URL(buy.dataset.base, location.href);
          url.searchParams.set("color", input.value);
          buy.href = url.toString();
        }
      });
    });

    // ----- forms: open the visitor's email app until a form backend is connected -----
    document.querySelectorAll("form.js-mailto").forEach(function (form) {
      var msg = form.parentElement.querySelector(".form-msg") || form.querySelector(".form-msg");
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var email = form.querySelector("input[type=email]");
        if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim())) {
          msg.textContent = isZh() ? "请输入有效的邮箱地址。" : "Please enter a valid email address.";
          email.focus();
          return;
        }
        var missing = Array.prototype.find.call(form.elements, function (el) { return el.required && !el.value.trim(); });
        if (missing) {
          msg.textContent = isZh() ? "请填写必填项。" : "Please fill in the required fields.";
          missing.focus();
          return;
        }
        var lines = [];
        Array.prototype.forEach.call(form.elements, function (el) {
          if (el.name && el.value.trim()) lines.push(el.name + ": " + el.value.trim());
        });
        var href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent(form.dataset.subject || "Website") + "&body=" + encodeURIComponent(lines.join("\n"));
        window.location.href = href;
        msg.textContent = isZh() ? "正在打开你的邮件应用……" : "Opening your email app…";
      });
    });
  });
})();
