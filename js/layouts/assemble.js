import Sidebar from "/js/layouts/sections/sidebar/assemble.js";
import DocPanel from "/js/layouts/sections/docPanel/assemble.js";

export default function Layouts() {
  sH(sidebar, Sidebar.UI);
  sH(doc_panel, DocPanel.UI);

  Sidebar.logic();
  DocPanel.logic();
}