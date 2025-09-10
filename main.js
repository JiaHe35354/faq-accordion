const buttons = document.querySelectorAll(".accordion-container button");
const panels = document.querySelectorAll(".accordion-panel");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const expanded = this.getAttribute("aria-expanded") === "true";
    const panel = document.getElementById(this.getAttribute("aria-controls"));

    panels.forEach((p) => {
      if (p !== panel && p.classList.contains("show")) {
        p.classList.remove("show");
        p.addEventListener("transitionend", () => (p.hidden = true), {
          once: true,
        });
      }
    });

    buttons.forEach((btn) => {
      if (btn !== this) btn.setAttribute("aria-expanded", "false");
    });

    if (!expanded) {
      this.setAttribute("aria-expanded", "true");
      panel.hidden = false;
      requestAnimationFrame(() => {
        panel.classList.add("show");
      });
    } else {
      panel.classList.remove("show");
      panel.addEventListener("transitionend", () => (panel.hidden = true), {
        once: true,
      });
      this.setAttribute("aria-expanded", "false");
    }
  });
});
