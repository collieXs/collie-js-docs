import CodeBlock from "../components/CodeBlock.js";
import LiveDemo from "../components/LiveDemo.js";

export default {
  UI: (`
    <article>
      <p class="eyebrow">API Reference</p>
      <h1><code>renderIf(condition, html)</code></h1>
      <p class="lede">
        Conditional rendering inside a template string. Returns
        <code>html</code> if <code>condition</code> is truthy, otherwise an
        empty string — which is exactly what you'd want to interpolate when
        nothing should render.
      </p>

      ${CodeBlock({
        id: "renderif-sig",
        code: `function renderIf(condition, html) // returns html or ''`
      })}

      ${LiveDemo({ id: "demo-renderif" })}

      ${CodeBlock({
        filename: "ProjectCard.js",
        id: "renderif-example",
        code: `sH(sandbox, \`
  &lt;div class="tools"&gt;
    \${renderIf(props.firstTool, \`&lt;p&gt;\${props.firstTool}&lt;/p&gt;\`)}
    \${renderIf(props.secondTool, \`&lt;p&gt;\${props.secondTool}&lt;/p&gt;\`)}
  &lt;/div&gt;
\`);`
      })}

      <p>
        This is exactly how the original portfolio's <code>ProjectCard</code>
        component handles an optional, variable-length list of tags — up to
        five "tool" props, each rendered only if present, with no
        <code>undefined</code> leaking into the markup.
      </p>
    </article>
  `),

  logic: () => {
    tE("[data-run='demo-renderif']")?.addEventListener("click", () => {
      const sandbox = tE("[data-sandbox='demo-renderif']");
      const props = { firstTool: "SCSS", secondTool: "collie-js", thirdTool: undefined };
      sH(sandbox, `
        <div class="tools">
          ${renderIf(props.firstTool, `<p>${props.firstTool}</p>`)}
          ${renderIf(props.secondTool, `<p>${props.secondTool}</p>`)}
          ${renderIf(props.thirdTool, `<p>${props.thirdTool}</p>`)}
        </div>
      `);
    });
  }
};
