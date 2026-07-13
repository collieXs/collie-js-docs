export default {
  UI: (`
    <article>
      <p class="eyebrow">Core Concepts</p>
      <h1>main.js vs app.js</h1>
      <p class="lede">
        collie.js reserves the entry-point filename to signal what kind of
        project you're looking at — before you've opened a single line of
        code.
      </p>

      <table class="naming-table">
        <thead>
          <tr><th>Filename</th><th>Means</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><code>main.js</code></td>
            <td>A landing page or static website. No offline support, no install prompt expected.</td>
          </tr>
          <tr>
            <td><code>app.js</code></td>
            <td>A PWA-capable web app — expects a service worker, a manifest, and installability.</td>
          </tr>
        </tbody>
      </table>

      <p>
        This is a naming convention, not something collie.js enforces at
        runtime — nothing breaks if you name it differently. The value is
        purely for anyone (including future you) scanning a project's file
        tree: seeing <code>app.js</code> at the bottom of <code>body</code>
        tells you to go looking for a service worker registration before you
        tell someone the site works, since PWAs cache aggressively and stale
        deployments are a common gotcha.
      </p>
    </article>
  `),

  logic: () => {}
};
