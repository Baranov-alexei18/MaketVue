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
           {name: "Men's", path:"/"},
           {name: "Women's", path:"/about"},
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
  .navbar-dark{
    background: black;
  }
  .nav{
    padding-left: 10% !important;
  }
  
</style>
