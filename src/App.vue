<template>
  <main-container>
    <template v-slot:header>
      <Nav />
    </template>
    
    <main>
    <router-view/>
    </main>
    
  </main-container>
</template>



<style>
@import "assets/css/bootstrap.css";
@import "assets/css/fonts.css";
@import "assets/css/style.css";
</style>

<script>
import Nav from "./components/Header-nav.vue";
import MainContainer from './components/MainContainer.vue';

export default{
  components: {
    Nav,
    MainContainer,
    }
}
</script>
<style scoped>
main{
  padding-right: 0;
}
</style>
