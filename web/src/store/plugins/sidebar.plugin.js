export default {
  state: {
    showSidebar: false,
    sidebarLinks: [],
  },
  mutations: {
    updateSidebar(state, visible) {
      state.showSidebar = visible;
    }
  },
  actions: {
    updateSidebar(context, visible) {
      context.commit("updateSidebar", visible);
    }
  },
  getters: {
    isVisible: state => {
      return state.showSidebar;
    }
  }
}