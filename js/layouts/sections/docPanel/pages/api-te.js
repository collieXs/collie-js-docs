import CodeBlock from "../components/CodeBlock.js";
import LiveDemo from "../components/LiveDemo.js";

export default {
  UI: (`
    <article>
      <p class="eyebrow">API Reference</p>
      <h1><code>tE(selector, context)</code> / <code>tEs(selector, context)</code></h1>
      <p class="lede">
        <code>tE</code> wraps <code>querySelector</code>; <code>tEs</code>
        wraps <code>querySelectorAll</code>. Both default <code>context</code>
        to <code>document</code>, so you can scope a lookup to a specific
        container by passing it as the second argument.
      </p>

      ${CodeBlock({
        id: "te-sig",
        code: `function tE(selector, context = document)  // one element or null
function tEs(selector, context = document) // a NodeList`
      })}

      <p>
        <code>tE</code> warns to the console if nothing matches — a cheap
        way to catch a typo'd selector or a component that rendered before
        you queried it.
      </p>

      ${LiveDemo({ id: "demo-te" })}

      ${CodeBlock({
        id: "te-example",
        code: `sandbox.innerHTML = \`
  &lt;ul&gt;
    &lt;li&gt;One&lt;/li&gt;
    &lt;li&gt;Two&lt;/li&gt;
    &lt;li&gt;Three&lt;/li&gt;
  &lt;/ul&gt;
\`;

const items = tEs('li', sandbox);
items.forEach(li =&gt; li.style.color = 'var(--accent)');`
      })}
    </article>
  `),

  logic: () => {
    tE("[data-run='demo-te']")?.addEventListener("click", () => {
      const sandbox = tE("[data-sandbox='demo-te']");
      sandbox.innerHTML = `
        <ul class="demo-list">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      `;
      const items = tEs("li", sandbox);
      items.forEach(li => (li.style.color = "var(--accent)"));
    });
  }
};
