import CodeBlock from "../components/CodeBlock.js";
import LiveDemo from "../components/LiveDemo.js";

export default {
  UI: (`
    <article>
      <p class="eyebrow">API Reference</p>
      <h1><code>renderList(array, fn)</code></h1>
      <p class="lede">
        Maps an array to HTML strings and joins them — the collie-js
        equivalent of <code>.map()</code> + <code>.join('')</code>, with
        warnings if either argument is the wrong type instead of a silent
        <code>undefined</code> in your markup.
      </p>

      ${CodeBlock({
        id: "renderlist-sig",
        code: `function renderList(array = [], fn) // returns a joined HTML string`
      })}

      ${LiveDemo({ id: "demo-renderlist" })}

      ${CodeBlock({
        filename: "Work/assemble.js",
        id: "renderlist-example",
        code: `const projectInfo = [
  { id: 1, title: 'GIGO' },
  { id: 2, title: 'SizeEngine' },
  { id: 3, title: 'JOT' },
];

sH(sandbox, \`
  &lt;div class="grid"&gt;
    \${renderList(projectInfo, each =&gt; \`
      &lt;div class="project-card"&gt;&lt;h3&gt;\${each.title}&lt;/h3&gt;&lt;/div&gt;
    \`)}
  &lt;/div&gt;
\`);`
      })}

      <p>
        This is the pattern behind every card grid in the original
        portfolio — <code>renderList</code> over a plain array of project or
        video objects, calling a function component per item.
      </p>
    </article>
  `),

  logic: () => {
    tE("[data-run='demo-renderlist']")?.addEventListener("click", () => {
      const sandbox = tE("[data-sandbox='demo-renderlist']");
      const projectInfo = [
        { id: 1, title: "GIGO" },
        { id: 2, title: "SizeEngine" },
        { id: 3, title: "JOT" },
      ];

      sH(sandbox, `
        <div class="demo-grid">
          ${renderList(projectInfo, each => `
            <div class="mini-card">${each.title}</div>
          `)}
        </div>
      `);
    });
  }
};
