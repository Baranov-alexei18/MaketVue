<template>
  <div class="home">
    <Slide/>
    <MainContainer>
      Home Page 
    </MainContainer>
  </div>
</template>

<script >
import MainContainer from '../components/MainContainer.vue'
import Slide from '../components/Slide.vue'

export default{
  name: "home",
  components: {
    MainContainer,
    Slide,
  }
}

</script>



