/*
  Single source of truth for every doc page: id, sidebar label, and group.
  Both the Sidebar and the DocPanel read this list, so adding a page here is the only step needed to wire it into nav + routing.
*/

export default [
  { 
    group: "Getting Started", 
    items: [
      { id: "introduction", label: "Introduction" },
      { id: "installation", label: "Installation" },
      { id: "philosophy",   label: "Philosophy" },
    ]
  },
  
  { 
    group: "Core Concepts", 
    items: [
      { id: "components",   label: "Object Components" },
      { id: "assemble",     label: "assemble.js Convention" },
      { id: "naming",       label: "main.js vs app.js" },
    ]
  },
  
  { 
    group: "API Reference", 
    items: [
      { id: "api-ce",       label: "cE()" },
      { id: "api-sh",       label: "sH()" },
      { id: "api-te",       label: "tE() / tEs()" },
      { id: "api-addevent", label: "addEvent()" },
      { id: "api-state",    label: "createState()" },
      { id: "api-renderif", label: "renderIf()" },
      { id: "api-renderlist", label: "renderList()" },
      { id: "api-debounce", label: "debounce()" },
      { id: "api-onhold",   label: "onHold()" },
      { id: "api-alert",    label: "customAlert()" },
    ]
  },
];
