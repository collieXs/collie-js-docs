export default function navGroup(props = {}) {
  return (`
    <div class="nav-group">
      <p class="group-label">${props.group}</p>
      <ul>
        ${renderList(props.items, item => (`
          <li>
            <a href="#${item.id}" data-route="${item.id}">${item.label}</a>
          </li>
        `))}
      </ul>
    </div>
  `);
}