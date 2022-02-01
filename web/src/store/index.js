import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: "glass"
});
 

export default createStore({
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
