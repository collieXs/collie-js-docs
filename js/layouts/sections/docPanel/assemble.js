import Introduction from "./pages/introduction.js";
import Installation from "./pages/installation.js";
import Philosophy from "./pages/philosophy.js";
import Components from "./pages/components.js";
import AssembleConcept from "./pages/assemble.js";
import Naming from "./pages/naming.js";
import ApiCe from "./pages/api-ce.js";
import ApiSh from "./pages/api-sh.js";
import ApiTe from "./pages/api-te.js";
import ApiAddEvent from "./pages/api-addevent.js";
import ApiState from "./pages/api-state.js";
import ApiRenderIf from "./pages/api-renderif.js";
import ApiRenderList from "./pages/api-renderlist.js";
import ApiDebounce from "./pages/api-debounce.js";
import ApiOnHold from "./pages/api-onhold.js";
import ApiAlert from "./pages/api-alert.js";
import wireCodeBlocks from "./components/wireCodeBlocks.js";

const pages = {
  "introduction": Introduction,
  "installation": Installation,
  "philosophy": Philosophy,
  "components": Components,
  "assemble": AssembleConcept,
  "naming": Naming,
  "api-ce": ApiCe,
  "api-sh": ApiSh,
  "api-te": ApiTe,
  "api-addevent": ApiAddEvent,
  "api-state": ApiState,
  "api-renderif": ApiRenderIf,
  "api-renderlist": ApiRenderList,
  "api-debounce": ApiDebounce,
  "api-onhold": ApiOnHold,
  "api-alert": ApiAlert,
};

export default {
  UI: (`
    <div id="doc-content"></div>
  `),

  logic: () => {
    const contentRef = tE("#doc-content");

    function renderPage(routeId) {
      const page = pages[routeId] || pages["introduction"];

      sH(contentRef, page.UI);
      page.logic();
      wireCodeBlocks(contentRef);

      // active-link state in the sidebar
      tEs("#sidebar-nav a").forEach(a => {
        a.classList.toggle("active", a.dataset.route === routeId);
      });

      window.scrollTo(0, 0);
    }

    initRouter(renderPage);

    // close the mobile nav drawer whenever a doc link is tapped
    addEvent(document, "click", (e) => {
      const link = e.target.closest("[data-route]");
      if (!link) return;
      document.body.classList.remove("nav-open");
    });
  }
};