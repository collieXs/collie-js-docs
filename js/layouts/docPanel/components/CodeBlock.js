export default function CodeBlock(props = {}) {
  const id = props.id || `code-${Math.random().toString(36).slice(2, 8)}`;
  return (`
    <div class="code-block">
      ${renderIf(props.filename, (`
        <div class="code-block-head">
          ${icons.terminal}
          <span>${props.filename}</span>
        </div>
      `))}
      <pre id="${id}"><code class="language-js">${props.code}</code></pre>
      <button class="copy-btn" data-copy-target="${id}" title="Copy code">
        ${icons.copy}
      </button>
    </div>
  `);
}