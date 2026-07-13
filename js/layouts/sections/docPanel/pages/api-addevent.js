import CodeBlock from "../components/CodeBlock.js";
import LiveDemo from "../components/LiveDemo.js";

export default {
  UI: (`
    <article>
      <p class="eyebrow">API Reference</p>
      <h1><code>addEvent(el, event, fn, options)</code></h1>
      <p class="lede">
        A guarded wrapper over <code>addEventListener</code>. It warns
        instead of throwing when <code>el</code>, <code>event</code>, or
        <code>fn</code> is missing — useful when a <code>tE()</code> lookup
        silently returned <code>null</code> and you'd otherwise get a cryptic
        "cannot read property of null."
      </p>

      ${CodeBlock({
        id: "ae-sig",
        code: `function addEvent(el, event, fn, options) // no return value`
      })}

      <p>
        <code>options</code> passes straight through to the native
        <code>addEventListener</code> — so <code>{ once: true }</code>,
        <code>{ passive: true }</code>, <code>{ capture: true }</code>, and
        an <code>AbortSignal</code> via <code>{ signal }</code> all work
        exactly as they would natively.
      </p>

      ${LiveDemo({ id: "demo-ae" })}

      ${CodeBlock({
        id: "ae-example",
        code: `const btn = cE('button');
btn.textContent = 'Click me (once)';
sandbox.append(btn);

addEvent(btn, 'click', () =&gt; {
  btn.textContent = 'Already clicked';
}, { once: true });`
      })}
    </article>
  `),

  logic: () => {
    tE("[data-run='demo-ae']")?.addEventListener("click", () => {
      const sandbox = tE("[data-sandbox='demo-ae']");
      sandbox.innerHTML = "";
      const btn = cE("button", "demo-btn");
      btn.textContent = "Click me (once)";
      sandbox.append(btn);

      addEvent(btn, "click", () => {
        btn.textContent = "Already clicked";
      }, { once: true });
    });
  }
};
