// Tiny hash router. Not a collie.js core feature — just a util this docs
// site builds on top of createState()/addEvent(), the same way any collie
// app wires its own logic on top of the primitives.

const routeState = createState(location.hash.slice(1) || "introduction");

function currentRoute() {
  return routeState.get();
}

function goTo(route) {
  location.hash = route;
}

function initRouter(onChange) {
  addEvent(window, "hashchange", () => {
    routeState.set(location.hash.slice(1) || "introduction", onChange);
  });
  // fire once on load so the initial view renders
  onChange(routeState.get());
}

window.currentRoute = currentRoute;
window.goTo = goTo;
window.initRouter = initRouter;