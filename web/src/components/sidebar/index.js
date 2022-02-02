import Sidebar from "./Sidebar.vue";
import SidebarLink from "./SidebarLink";

const sidebarPlugin = {
  install: (app) => {
    app.component("side-bar", Sidebar);
    app.component("sidebar-link", SidebarLink);
  }
};

export default sidebarPlugin;
