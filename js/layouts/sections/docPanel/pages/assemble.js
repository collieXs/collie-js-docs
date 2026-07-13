import CodeBlock from "../components/CodeBlock.js";

export default {
  UI: (`
    <article>
      <p class="eyebrow">Core Concepts</p>
      <h1>The assemble.js Convention</h1>
      <p class="lede">
        Every folder that represents a component or a section of the page
        gets one file: <code>assemble.js</code>. It's the single export
        point — parents only ever import <code>assemble.js</code>, never
        reach into a sibling's internals directly.
      </p>

      ${CodeBlock({
        id: "assemble-tree",
        code: 
`layouts/
  ├── assemble js      ← imports and composes every section
  ├── components/
  │   ├── ProjectCard.js
  │   └── Header.js
  │
  └── sections/
      ├── About/
      │   └── assemble.js      ← this section's own UI + logic
      │
      └── Work/
          └── assemble.js      ← this section's own UI + logic`
    })}

      <p>
        A parent's <code>assemble.js</code> imports each child's
        <code>assemble.js</code>, splices <code>Child.UI</code> into its own
        template, and — critically — only calls <code>Child.logic()</code>
        for children that actually define one.
      </p>

      ${CodeBlock({
        filename: "layouts/assemble.js",
        id: "assemble-parent",
        code: `import About from "./sections/About/assemble.js";
 import Work from "./sections/Work/assemble.js";

export default {
  UI: (\`
    \${About.UI}
    \${Work.UI}
  \`),

  logic: () =&gt; {
    About.logic();
    // Work has no interactive behavior, so its logic() is skipped entirely
  }
}`
      })}

      <p>
        This keeps composition explicit and traceable: to find out what
        wires up a section, you read its <code>assemble.js</code>, not a
        framework's mounting lifecycle.
      </p>
    </article>
  `),

  logic: () => {}
};
