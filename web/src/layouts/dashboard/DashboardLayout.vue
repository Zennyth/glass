<template>
  <div class="wrapper">
    <side-bar>
      <template v-slot:links>
        <sidebar-link to="/" :name="$t('home.title')" icon="tim-icons icon-double-left"/>
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <div class="content">
        <router-view></router-view>
      </div>

      <footer-content></footer-content>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import FooterContent from "./FooterContent.vue";

export default {
  components: {
    TopNavbar,
    FooterContent
  },
};
</script>
