import Sidebar from "./Sidebar.vue";
import SidebarLink from "./SidebarLink";
// import store from "@/store"

const sidebarStore = {
  showSidebar: false,
  sidebarLinks: [],
  displaySidebar(value) {
    // dont show sidebar if user is not logged in
    if(value) this.showSidebar = value;
    // if(!(value && !store.getters.isLoggedIn)) this.showSidebar = value;
  }
};

const sidebarPlugin = {
  install: (app) => {
    app.config.globalProperties.$sidebar = sidebarStore;
    app.component("side-bar", Sidebar);
    app.component("sidebar-link", SidebarLink);
  }
};

export default sidebarPlugin;
