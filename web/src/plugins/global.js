import SideBar from "@/components/sidebar";

// css assets
import "@/assets/sass/glass.scss";

// icons
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

export default {
  install(app) {
    app.use(SideBar);
    app.component('fa', FontAwesomeIcon)
  }
}