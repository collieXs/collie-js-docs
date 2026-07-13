import CodeBlock from "../components/CodeBlock.js";

export default {
  UI: (`
    <article>
      <p class="eyebrow">Getting Started</p>
      <h1>collie.js</h1>
      <p class="lede">
        A vanilla JavaScript component convention for people who want structure
        without a build step. No JSX, no compiler, no npm install before you
        can see a div on screen — just functions that return HTML strings,
        and a small set of DOM utilities to wire them up.
      </p>

      <h2>Why this exists</h2>
      <p>
        collie.js was born out of frustration with monolithic HTML files —
        one giant <code>index.html</code> that keeps growing until nobody
        wants to touch it. It's not a framework. There's no virtual DOM, no
        reactivity system, no reconciliation. It's a pattern: components are
        plain objects with a <code>UI</code> template string and a
        <code>logic</code> function, plus a handful of global helpers
        (<code>cE</code>, <code>sH</code>, <code>tE</code>, and friends) that
        make working in template strings less painful.
      </p>

      ${CodeBlock({
        filename: "Header.js",
        id: "intro-example",
        code: `export default {
  UI: (\`
    &lt;header&gt;
      &lt;h1&gt;My App&lt;/h1&gt;
    &lt;/header&gt;
  \`),
  logic: () =&gt; {
    addEvent(tE('header'), 'click', () =&gt; alert('Hi'));
  }
}`
      })}

      <h2>Who this is for</h2>
      <ul class="checklist">
        <li>${icons.check} You already know HTML, CSS, and ES6 JavaScript</li>
        <li>${icons.check} You'd rather write <code>innerHTML</code> than learn a compiler</li>
        <li>${icons.check} You're building small-to-medium sites or PWAs, not a 200-engineer app</li>
      </ul>

      <p class="next-hint">
        Next: <a href="#installation" data-route="installation">Installation</a>
        — there's no package to install.
      </p>
    </article>
  `),

  logic: () => {}
};
