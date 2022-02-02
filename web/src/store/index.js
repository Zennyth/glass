import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: "glass"
});

import sidebar from "./plugins/sidebar.plugin"
 

export default createStore({
  modules: {
    sidebar
  },
  plugins: [vuexLocal.plugin]
})
