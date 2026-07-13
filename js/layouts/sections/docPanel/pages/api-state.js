import CodeBlock from "../components/CodeBlock.js";
import LiveDemo from "../components/LiveDemo.js";

export default {
  UI: (`
    <article>
      <p class="eyebrow">API Reference</p>
      <h1><code>createState(initial)</code></h1>
      <p class="lede">
        The smallest possible state container: a closure holding one value,
        with <code>get()</code> to read it and <code>set(newVal, callback)</code>
        to write it. There's no reactivity — nothing re-renders automatically
        when you call <code>set()</code>. The optional callback is how you
        trigger whatever DOM update should happen next.
      </p>

      ${CodeBlock({
        id: "state-sig",
        code: `function createState(initial)
// returns { get: () =&gt; value, set: (newVal, callback) =&gt; void }`
      })}

      ${LiveDemo({ id: "demo-state" })}

      ${CodeBlock({
        id: "state-example",
        code: `const count = createState(0);

function render() {
  sH(sandbox, \`&lt;p&gt;Count: \${count.get()}&lt;/p&gt;\`);
}

render();

incrementBtn.onclick = () =&gt; {
  count.set(count.get() + 1, render);
};`
      })}

      <div class="callout">
        <strong>Why no auto re-render?</strong> Because deciding what to
        redraw is cheap when you do it yourself, and expensive to make
        automatic without a diffing engine. <code>createState</code> stays
        honest about that trade instead of hiding it.
      </div>
    </article>
  `),

  logic: () => {
    tE("[data-run='demo-state']")?.addEventListener("click", () => {
      const sandbox = tE("[data-sandbox='demo-state']");
      const count = createState(0);

      function render() {
        sH(sandbox, `
          <p class="demo-count">Count: <strong>${count.get()}</strong></p>
          <button class="demo-btn" id="state-inc">+1</button>
        `);
        tE("#state-inc", sandbox).onclick = () => {
          count.set(count.get() + 1, render);
        };
      }

      render();
    });
  }
};
