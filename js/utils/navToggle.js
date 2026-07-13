addEvent(document, "DOMContentLoaded", () => {
  const toggleBtnRef = tE("#nav_toggle");

  addEvent(toggleBtnRef, "click", () => {
    document.body.classList.toggle("nav-open");
  });
});
