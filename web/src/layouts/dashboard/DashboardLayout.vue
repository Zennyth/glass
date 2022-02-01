<template>
  <div class="app">
    <top-navbar></top-navbar>
    <div class="wrapper">
      <side-bar>
        <template v-slot:links>
          <sidebar-link
            to="/"
            :name="$t('home.title')"
            :icon="['fas', 'home']"
          />
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
};
</script>
