import CodeBlock from "../components/CodeBlock.js";
import LiveDemo from "../components/LiveDemo.js";

export default {
  UI: (`
    <article>
      <p class="eyebrow">API Reference</p>
      <h1><code>sH(el, html)</code></h1>
      <p class="lede">
        Shorthand for <code>el.innerHTML = html</code>. This is how every
        component's <code>UI</code> template string actually reaches the
        page — <code>sH(container, Component.UI)</code>.
      </p>

      ${CodeBlock({
        id: "sh-sig",
        code: `function sH(el, html) // returns the assigned innerHTML string`
      })}

      <p>Warns and returns early if <code>el</code> is null or undefined, so a missing container fails loud instead of throwing deep in the DOM.</p>

      ${LiveDemo({ id: "demo-sh" })}

      ${CodeBlock({
        id: "sh-example",
        code: `sH(sandbox, \`&lt;strong&gt;Rendered via sH()&lt;/strong&gt;\`);`
      })}
    </article>
  `),

  logic: () => {
    tE("[data-run='demo-sh']")?.addEventListener("click", () => {
      const sandbox = tE("[data-sandbox='demo-sh']");
      sH(sandbox, `<strong>Rendered via sH()</strong>`);
    });
  }
};
