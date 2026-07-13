import CodeBlock from "../components/CodeBlock.js";

export default {
  UI: (`
    <article>
      <p class="eyebrow">Getting Started</p>
      <h1>Installation</h1>
      <p class="lede">
        There's no package manager step. Clone the starter template — it
        comes with the library already wired in, so you skip straight to
        building.
      </p>

      <h2>1. Clone the starter template</h2>
      ${CodeBlock({
        id: "install-clone",
        code: `git clone https://github.com/collieXs/collie-js.git my-project
cd my-project`
      })}

      <p>Delete the demo content, keep the structure, and start building.</p>

      <h2>2. What's in the template</h2>
      ${CodeBlock({
        id: "install-tree",
        code: `project-root/
├── assets/                     # optinal
│   ├── fonts/                  # holds fonts file
│   ├── images/                 # holds images
│   └── sounds/                 # holds both audio and video
│
├── js/
│   ├── collie/                  # the library itself
│   │   ├── assemble.js          # bootstraps the library, attaches everything to window
│   │   ├── funcs.js             # core utility functions
│   │   └── iconObj.js           # SVG icon set — optional, ignore if you prefer importing icons
│   │
│   ├── layouts/
│   │   ├── components/          # PascalCase — functional components shared across ALL sections
│   │   └── sections/            # PascalCase or any case — one object component per folder
│   │
│   ├── utils/                   # camelCase — standalone behaviors, not UI (e.g. scrollEffect.js)
│   └── main.js                  # entry point for a static site — use app.js instead for a PWA (optional naming )
│
├── scss/                        # mirrors js/ folder-for-folder, file-for-file (optional folder)
│   ├── layouts/
│   │   ├── components/
│   │   │   └── _assemble.scss   # imports every partial in this folder
│   │   │
│   │   └── sections/
│   │       ├── _assemble.scss   # imports every section's own _assemble.scss
│   │
│   ├── utils/                   # optional
│   │   ├── _reset.scss          # basically for default styling resets
│   │   ├── _variables.scss      # holds scss variables
│   │   └── _mixins.scss         # holds scss mixins
│   │
│   └── main.scss                # imports utils, components, and sections — compiles to main.min.css
│
├── index.html
├── main.min.css
└── README.md

Note: folder structure can be set to user's preference.
`})}

      <p>
        The library always loads first, in <code>&lt;head&gt;</code>; your
        app code loads second, at the bottom of <code>&lt;body&gt;</code> —
        already set up in the template's <code>index.html</code>, nothing
        to configure.
      </p>

      <p>
        The <code>README.md</code> is worth reading on its own — this docs
        site is really just a web version of it, so anything you can't find
        here is probably spelled out there in plain text.
      </p>

      <h2>3. That's it</h2>
      <p>
        No <code>node_modules</code>, no bundler config. Open
        <code>index.html</code> in a browser (served over <code>http://</code>,
        since ES modules need a real origin — not <code>file://</code>) and
        you're running.
      </p>
    </article>
  `),
  
  logic: () => {}
};