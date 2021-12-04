<template>
  <div class="home">
    <Slide/>
    <Banner/> 
    <Shop/>
    
  </div>
</template>

<script >
import Slide from '../components/Slide.vue'
import Banner from '../components/Banners/Banner.vue'
import Shop from '../components/ShopCatalog/Shop.vue'

export default{
  name: "home",
  components: {
    Slide,
    Banner,
    Shop,
  }
}

</script>



