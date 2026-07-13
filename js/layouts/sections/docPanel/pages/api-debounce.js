import CodeBlock from "../components/CodeBlock.js";
import LiveDemo from "../components/LiveDemo.js";

export default {
  UI: (`
    <article>
      <p class="eyebrow">API Reference</p>
      <h1><code>debounce(fn, delay)</code></h1>
      <p class="lede">
        Returns a wrapped version of <code>fn</code> that waits
        <code>delay</code> seconds of silence before actually running —
        every call within that window resets the timer. Good for search-as-you-type,
        resize handlers, or anything firing faster than you want to react to it.
      </p>

      ${CodeBlock({
        id: "debounce-sig",
        code: `function debounce(fn, delay) // delay is in SECONDS, not ms
// returns a debounced version of fn`
      })}

      <div class="callout">
        <strong>Watch the unit:</strong> <code>delay</code> is seconds — internally
        it's multiplied by 1000 before being passed to <code>setTimeout</code>.
        <code>debounce(fn, 0.2)</code> is a 200ms debounce.
      </div>

      ${LiveDemo({ id: "demo-debounce" })}

      ${CodeBlock({
        id: "debounce-example",
        code: `const handleFilter = debounce((e) =&gt; {
  console.log('Filtering for:', e.target.value);
}, 0.2);

addEvent(filterInput, 'input', handleFilter);`
      })}
    </article>
  `),

  logic: () => {
    tE("[data-run='demo-debounce']")?.addEventListener("click", () => {
      const sandbox = tE("[data-sandbox='demo-debounce']");
      sandbox.innerHTML = `
        <input type="text" class="demo-input" placeholder="Type here..." />
        <p class="demo-status">Waiting...</p>
      `;
      const input = tE(".demo-input", sandbox);
      const status = tE(".demo-status", sandbox);

      const handleFilter = debounce((e) => {
        status.textContent = `Fired 200ms after you stopped: "${e.target.value}"`;
      }, 0.2);

      addEvent(input, "input", (e) => {
        status.textContent = "Waiting...";
        handleFilter(e);
      });
    });
  }
};
