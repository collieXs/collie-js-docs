export default function LiveDemo(props = {}) {
  return (`
    <div class="live-demo" id="${props.id}">
      <div class="live-demo-head">
        ${icons.play}
        <span>Live in this page</span>
        <button class="run-btn" data-run="${props.id}">Run</button>
      </div>
      <div class="sandbox" data-sandbox="${props.id}"></div>
    </div>
  `);
}