import CodeBlock from "../components/CodeBlock.js";

export default {
  UI: (`
    <article>
      <p class="eyebrow">Getting Started</p>
      <h1>collie-js</h1>
      <p class="lede">
        A vanilla JavaScript component convention for people who want structure
        without a build step. No JSX, no compiler, no npm install before you
        can see a div on screen — just functions that return HTML strings,
        and a small set of DOM utilities to wire them up.
      </p>

      <h2>Why this exists</h2>
      <p>
        Vanilla JavaScript projects tend to go one of two ways: a single sprawling HTML file that gets harder to navigate with every feature added, or a jump straight to React — component structure, but at the cost of a build step, node_modules, and a project that can no longer just... run, offline, the moment you open it.
        collie-js borrows the one idea from React worth borrowing without the rest of the weight: break a page into components that assemble back into one, the same problem React itself was built to solve in 2011 — code that grew too tangled to safely change. No virtual DOM, no build tools, no bundler. Just files, organized, that a browser can load directly.
        Alongside that, collie-js ships a small toolkit of the things every interactive vanilla project ends up needing anyway — a way to track state (<code>createState</code>), conditional and list rendering (<code>renderIf</code>, <code>renderList</code>), shorthand for the DOM APIs you write constantly (<code>cE</code>, <code>sH</code>, <code>tE</code>, <code>tEs</code>), and a few gestures the browser doesn't hand you for free (<code>onHold</code> , <code>debounce</code>, a non-blocking <code>customAlert</code>). None of it is required — collie-js is a starting structure, not a dependency. Clone it, edit anything, delete what you don't need
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