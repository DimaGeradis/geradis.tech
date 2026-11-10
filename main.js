/* ============================================================
   Geradis — small page behaviours
   - lighting switcher (dawn / day / golden / night)
   - reveal animation once the wall image is ready
   - console greeting
   No dependencies.
   ============================================================ */
(function () {
  "use strict";

  var root = document.documentElement;
  var buttons = Array.prototype.slice.call(
    document.querySelectorAll(".light-controls [data-light-mode]")
  );

  /* ----- Lighting switcher ----- */
  function setLight(mode) {
    root.setAttribute("data-light", mode);
    buttons.forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-light-mode") === mode));
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLight(btn.getAttribute("data-light-mode"));
    });
  });

  /* ----- Reveal once the wall is decoded ----- */
  var wall = document.querySelector(".scene__wall");

  function reveal() {
    // Two frames so initial styles are committed before transitioning.
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        document.body.classList.add("is-ready");
      });
    });
  }

  if (!wall) {
    reveal();
  } else if (wall.decode) {
    wall.decode().then(reveal, reveal);
    // Safety net: never keep the page hidden for too long.
    setTimeout(reveal, 2500);
  } else if (wall.complete) {
    reveal();
  } else {
    wall.addEventListener("load", reveal, { once: true });
    wall.addEventListener("error", reveal, { once: true });
    setTimeout(reveal, 2500);
  }

  /* ----- Console greeting ----- */
  try {
    console.log(
      "%cGERADIS%c // hidden channel\n\n" +
        "> You read the source. We like you already.\n" +
        "> Curious about agents, harnesses and runtimes?\n" +
        "> Come build with us — contact@geradis.ai\n",
      "color: #b8862b; font-family: monospace; font-size: 15px; font-weight: bold; letter-spacing: 2px;",
      "font-family: monospace; font-size: 12px; color: #888;"
    );
  } catch (e) {
    /* console may be unavailable — ignore */
  }
})();
