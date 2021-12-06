<template>
    <div class="main">
    <header class="head">
        <h3 class="header-text">
            Whatever header they currently use goes here
        </h3>
    </header>
     
  <nav class="navbar navbar-expand-sm navbar-dark nav">
  <div class="container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" v-for="(menu, index) in headerMenuList" :key="index">
            <router-link class="nav-link active" aria-current="page" :to="menu.path">
            {{menu.name}}
            </router-link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>

    </div> 
</template>

<script>

 export default{
     name: "Nav",
     data(){
       return{
         headerMenuList: [
           {name: "Men's", path:"/men"},
           {name: "Women's", path:"/women"},
           {name: "Kids", path:"/kids"},
           {name: "Sports", path:"/sports"},
           {name: "Brands", path:"/brands"},
           {name: "Collections", path:"/collections"},
         ],

         show: false,
       }
     },


 }

</script>

<style>
.head {
  background-color: #f1f1f1;
  margin-bottom: 20px;
}

.header-text {
  font-family: "ProximaNova";
  font-size: 24px;
  color: black;
  padding-top: 55px;
  width: 100%;
  text-align: center;
  vertical-align: center;
  
}
@media (max-width: 767px) {
  .header-text {
    font-size: calc(15px + 15.3 * ((100vw - 320px) / 1280));
  }
}
@media (min-width: 767px) {
  .header-text {
    font-size: calc(15px + 9 * (100vw / 1280));
  }
}
@media (max-width: 767px) {
  .header-text {
    margin-bottom: calc(20px + 59.5 * ((100vw - 320px) / 1280));
  }
}
@media (min-width: 767px) {
  .header-text {
    margin-bottom: calc(20px + 35 * (100vw / 1280));
  }
}

.nav{
  width: 100%;
}
.panel_nav .navbar {
  display: flex;
}
.panel_nav .navbar-dark {
  background-color: black;
  justify-content: center;
  align-items: center;
}
.navbar-dark .navbar-nav .show > .nav-link, .navbar-dark .navbar-nav .nav-link.active{
  font-family: "ProximaNova_light"!important;
  font-size: 18px;
  color: white;
  text-align: center;
}
@media (max-width: 767px) {
  .panel_nav .nav-item {
    font-size: calc(12px + 10.2 * ((100vw - 320px) / 1280));
  }
}
@media (min-width: 767px) {
  .panel_nav .nav-item {
    font-size: calc(12px + 6 * (100vw / 1280));
  }
}

  .navbar-dark{
    background: black;
  }
  .nav{
    padding-left: 6% !important;
  }
  
  @media(max-width: 474px){
    .nav{
      position: absolute;
      top: -20px;
    }
    header{max-height: 56px;}
    
  }
</style>
