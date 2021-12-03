<template>
  <div class="wrap d-flex flex-column min-vh-100">
    <Nav />
    <main class="flex-fill">
    <router-view/>
    </main>
  </div>
</template>



<style>
@import "assets/css/bootstrap.css";
@import "assets/css/fonts.css";
@import "assets/css/style.css";
</style>

<script>
import Nav from "./components/Header-nav.vue";

export default{
  components: {Nav}
}
</script>

