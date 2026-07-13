export default {
  UI: (`
    <article>
      <p class="eyebrow">Getting Started</p>
      <h1>Philosophy</h1>
      <p class="lede">
        Three rules collie.js won't break, and why.
      </p>

      <div class="principle">
        <h3>1. Understand before you abstract</h3>
        <p>
          Every helper is a thin wrapper over something the DOM already does.
          <code>cE()</code> is <code>document.createElement</code> with a
          className shortcut. <code>tE()</code> is
          <code>querySelector</code> with a console warning if it comes back
          empty. Nothing is hidden behind magic — you could rewrite any
          collie.js app in raw DOM calls and get the same behavior, just with
          more typing.
        </p>
      </div>

      <div class="principle">
        <h3>2. Minimal dependencies, minimal ceremony</h3>
        <p>
          No compiler means no build step means no "why won't this build"
          debugging sessions. A component is a JS object. There's no special
          file extension, no syntax the browser doesn't already understand —
          template literals and string interpolation do all the work JSX
          usually does.
        </p>
      </div>

      <div class="principle">
        <h3>3. The filename tells you what the project is</h3>
        <p>
          <code>main.js</code> means a landing page or static site.
          <code>app.js</code> means a PWA-capable app. You should be able to
          tell what kind of project you're looking at from its file tree
          alone, before opening a single file.
        </p>
      </div>

      <h2>What collie.js is not</h2>
      <p>
        It's not reactive — there's no virtual DOM, no dependency tracking, no
        automatic re-render when state changes. <code>createState()</code>
        gives you a getter/setter pair and a callback on <code>set()</code>;
        deciding what to re-render, and how, is still your job. That's a
        deliberate trade: less magic, but you always know exactly what runs
        and when.
      </p>
    </article>
  `),

  logic: () => {}
};
