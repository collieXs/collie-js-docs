import CodeBlock from "../components/CodeBlock.js";

export default {
  UI: (`
    <article>
      <p class="eyebrow">Core Concepts</p>
      <h1>Object Components</h1>
      <p class="lede">
        The default shape for anything with its own DOM wiring: a plain
        object with a <code>UI</code> template string and a
        <code>logic</code> function.
      </p>

      ${CodeBlock({
        filename: "Sidebar/assemble.js",
        id: "comp-object",
        code: `export default {
  UI: (\`
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="#about"&gt;About&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  \`),

  logic: () =&gt; {
    const linkRef = tE('a');
    addEvent(linkRef, 'click', () =&gt; console.log('clicked'));
  }
}`
      })}

      <p>
        <code>UI</code> is rendered with <code>sH(container, Component.UI)</code>.
        <code>logic()</code> runs <em>after</em> that HTML is in the DOM, so
        <code>tE()</code> calls inside it can actually find their elements.
        Parent components import children, splice their <code>.UI</code>
        into the template string, and call their <code>.logic()</code>
        explicitly — there's no auto-mounting.
      </p>

      <h2>Function components (when you need props)</h2>
      <p>
        If a piece of UI needs arguments — a card that renders differently
        per item in a list — make it a function that returns the template
        string instead of a static object.
      </p>

      ${CodeBlock({
        filename: "ProjectCard.js",
        id: "comp-function",
        code: `export default function ProjectCard(props = {}) {
  return (\`
    &lt;div class="project-card"&gt;
      &lt;h3&gt;\${props.title}&lt;/h3&gt;
      &lt;p&gt;\${props.description}&lt;/p&gt;
    &lt;/div&gt;
  \`)
}`
      })}

      <p>
        Function components don't get a <code>logic</code> of their own —
        they're pure templates. Any interactivity for repeated items (like a
        list of cards) is wired up in the parent section's
        <code>logic()</code>, usually with <code>tEs()</code> to grab every
        instance at once.
      </p>

      <div class="callout">
        <strong>Rule of thumb:</strong> reach for the object pattern by
        default. Only switch to a function component the moment you need to
        pass in props.
      </div>
    </article>
  `),

  logic: () => {}
};
