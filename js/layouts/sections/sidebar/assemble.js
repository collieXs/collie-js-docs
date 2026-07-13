import routes from "/js/utils/routes.js";
import NavGroup from "./components/NavGroup.js";

export default {
  UI: (`
    <div class="brand">
      ${icons.paw}
      <div>
        <h1>collie<span class="light">-js</span></h1>
        <p class="tagline">no build step. no framework. no ceremony.</p>
      </div>
    </div>

    <label class="search">
      ${icons.search}
      <input type="text" placeholder="Filter docs..." id="nav-filter" />
    </label>

    <nav id="sidebar-nav">
      ${renderList(routes, each => NavGroup({
        group: each.group,
        items: each.items
      }))}
    </nav>

    <div class="sidebar-footer">
      <a href="https://github.com/collieXs" target="_blank" class="gh-link">
        ${icons.github}
        <span>collieXs on GitHub</span>
      </a>
    </div>
  `),

  logic: () => {
    const filterInput = tE("#nav-filter");
    const navGroups = tEs("#sidebar-nav .nav-group");

    const handleFilter = debounce((e) => {
      const query = e.target.value.trim().toLowerCase();

      navGroups.forEach(group => {
        let anyVisible = false;

        tEs("li", group).forEach(li => {
          const label = li.textContent.trim().toLowerCase();
          const match = label.includes(query);
          li.style.display = match ? "" : "none";
          if (match) anyVisible = true;
        });

        group.style.display = anyVisible ? "" : "none";
      });
    }, 0.2);

    addEvent(filterInput, "input", handleFilter);
  }
};