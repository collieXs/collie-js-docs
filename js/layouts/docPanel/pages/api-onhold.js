import CodeBlock from "../components/CodeBlock.js";
import LiveDemo from "../components/LiveDemo.js";

export default {
  UI: (`
    <article>
      <p class="eyebrow">API Reference</p>
      <h1><code>onHold(element, callback, holdDuration)</code></h1>
      <p class="lede">
        A custom long-press event. Tracks <code>mousedown</code> /
        <code>touchstart</code>, starts a timer, and fires
        <code>callback</code> after <code>holdDuration</code> ms if the
        press is still active — cancelled early by
        <code>mouseup</code>/<code>touchend</code>/<code>mouseleave</code>.
        Triggers a short haptic buzz via <code>navigator.vibrate()</code> on
        supporting devices.
      </p>

      ${CodeBlock({
        id: "onhold-sig",
        code: `function onHold(element, callback, holdDuration = 1000)
// returns a function: () =&gt; boolean (whether currently mid-hold)`
      })}

      <p>
        The callback receives the latest <code>mousemove</code>/<code>touchmove</code>
        event at fire time, not the stale event from when the press started
        — so you can read live coordinates for something like a context menu
        positioned at the finger.
      </p>

      ${LiveDemo({ id: "demo-onhold" })}

      ${CodeBlock({
        id: "onhold-example",
        code: `const box = cE('div', 'hold-target');
box.textContent = 'Press and hold';
sandbox.append(box);

onHold(box, () =&gt; {
  box.textContent = 'Held!';
}, 800);`
      })}
    </article>
  `),

  logic: () => {
    tE("[data-run='demo-onhold']")?.addEventListener("click", () => {
      const sandbox = tE("[data-sandbox='demo-onhold']");
      sandbox.innerHTML = "";
      const box = cE("div", "hold-target");
      box.textContent = "Press and hold (0.8s)";
      sandbox.append(box);

      onHold(box, () => {
        box.textContent = "Held! 🎉";
        box.classList.add("held");
        setTimeout(() => {
          box.textContent = "Press and hold (0.8s)";
          box.classList.remove("held");
        }, 1000);
      }, 800);
    });
  }
};
