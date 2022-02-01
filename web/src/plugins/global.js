import SideBar from "@/components/sidebar";

//css assets
import "@/assets/sass/glass.scss";

export default {
  install(app) {
    app.use(SideBar);
  }
}