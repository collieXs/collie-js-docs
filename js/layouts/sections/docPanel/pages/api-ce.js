import CodeBlock from "../components/CodeBlock.js";
import LiveDemo from "../components/LiveDemo.js";

export default {
  UI: (`
    <article>
      <p class="eyebrow">API Reference</p>
      <h1><code>cE(tagName, className)</code></h1>
      <p class="lede">
        Shorthand for <code>document.createElement</code> with an optional
        class name applied in the same call.
      </p>

      ${CodeBlock({
        id: "ce-sig",
        code: `function cE(tagName, className) // returns HTMLElement | null`
      })}

      <table class="params-table">
        <thead><tr><th>Param</th><th>Type</th><th>Required</th></tr></thead>
        <tbody>
          <tr><td>tagName</td><td>string</td><td>yes</td></tr>
          <tr><td>className</td><td>string</td><td>no</td></tr>
        </tbody>
      </table>

      <p>Warns and returns <code>null</code> if <code>tagName</code> isn't a string — it never throws.</p>

      ${LiveDemo({ id: "demo-ce" })}

      ${CodeBlock({
        id: "ce-example",
        code: `const badge = cE('span', 'badge');
badge.textContent = 'new';
sandbox.append(badge);`
      })}
    </article>
  `),

  logic: () => {
    tE("[data-run='demo-ce']")?.addEventListener("click", () => {
      const sandbox = tE("[data-sandbox='demo-ce']");
      sandbox.innerHTML = "";
      const badge = cE("span", "badge");
      badge.textContent = "new";
      sandbox.append(badge);
    });
  }
};
