// Wires every .copy-btn currently in the DOM. Called at the end of each
// page's logic() since pages are swapped via sH() and old listeners are
// discarded along with the old markup.
export default function wireCodeBlocks(root = document) {
  tEs(".copy-btn", root).forEach(btn => {
    addEvent(btn, "click", () => {
      const targetId = btn.dataset.copyTarget;
      const codeEl = tE(`#${targetId}`);
      if (!codeEl) return;

      cTC(codeEl);

      const original = btn.innerHTML;
      btn.innerHTML = icons.check;
      btn.classList.add("copied");
      setTimeout(() => {
        btn.innerHTML = original;
        btn.classList.remove("copied");
      }, 1200);
    });
  });
}