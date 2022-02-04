<template>
  <div class="app" :class="{'nav-open': showSidebar}">
    <top-navbar></top-navbar>
    <div class="wrapper">
      <side-bar>
        <template v-slot:links>
          <div class="sidebar-theme">
            <span class="sidebar-title">Apps</span>
            <sidebar-link
              to="/"
              :name="$t('home.title')"
              :icon="['fas', 'home']"
              group="Apps"
            />
          </div>
        </template>
      </side-bar>

      <div class="content">
        <router-view></router-view>
      </div>

      <!-- <footer-content></footer-content> -->
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
// import FooterContent from "./FooterContent.vue";

export default {
  components: {
    TopNavbar,
    // FooterContent,
  },
  computed: {
    showSidebar() {
      return this.$store.getters["isVisible"];
    },
  },
};
</script>