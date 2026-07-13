import CodeBlock from "../components/CodeBlock.js";
import LiveDemo from "../components/LiveDemo.js";

export default {
  UI: (`
    <article>
      <p class="eyebrow">API Reference</p>
      <h1><code>customAlert(message, options)</code></h1>
      <p class="lede">
        collie.js overwrites <code>window.alert</code> with a promise-based,
        non-blocking replacement. The native one is preserved as
        <code>window.nativeAlert</code>, in case you ever need the real
        thing back.
      </p>

      ${CodeBlock({
        id: "alert-sig",
        code: `function customAlert(message = '', options = {})
// options: { type, appearIn, onConfirm, onCancel, countdown }
// returns a Promise`
      })}

      <table class="params-table">
        <thead><tr><th>Option</th><th>Default</th><th>Effect</th></tr></thead>
        <tbody>
          <tr><td><code>type</code></td><td><code>'notify'</code></td><td><code>'notify'</code> auto-dismisses; <code>'action'</code> shows OK/Cancel buttons and waits</td></tr>
          <tr><td><code>appearIn</code></td><td><code>document.body</code></td><td>Container the alert is prepended into</td></tr>
          <tr><td><code>countdown</code></td><td><code>3</code></td><td>Seconds before a <code>'notify'</code> alert auto-dismisses</td></tr>
          <tr><td><code>onConfirm</code> / <code>onCancel</code></td><td>—</td><td>Callbacks for <code>'action'</code> type</td></tr>
        </tbody>
      </table>

      ${LiveDemo({ id: "demo-alert" })}

      ${CodeBlock({
        id: "alert-example",
        code: `const confirmed = await alert('Delete this file?', {
  type: 'action',
  appearIn: sandbox,
});

if (confirmed) {
  // user clicked OK
}`
      })}
    </article>
  `),

  logic: () => {
    tE("[data-run='demo-alert']")?.addEventListener("click", async () => {
      const sandbox = tE("[data-sandbox='demo-alert']");
      sandbox.innerHTML = `<p class="demo-status">Waiting for response...</p>`;
      const status = tE(".demo-status", sandbox);

      const confirmed = await alert("Delete this file?", {
        type: "action",
        appearIn: sandbox,
      });

      status.textContent = confirmed ? "Confirmed ✓" : "Cancelled ✕";
    });
  }
};
