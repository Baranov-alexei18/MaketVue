<template>
  <div class="main">
    <header class="head">
        <h3 class="header-text">
            Whatever header they currently use goes here
        </h3>
        <nav class="navbar navbar-expand navbar-dark nav">
        <div class="con_nav">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ">
              <li class="nav-item" v-for="(menu, index) in headerMenuList" :key="index">
                  <router-link class="nav-link active" aria-current="page" :to="menu.path">
                  {{menu.name}}
                  </router-link>

              </li>
            </ul>

          </div>
        </div>
      </nav>
    </header>
 </div> 
</template>

<script>

 export default{
     name: "nav",
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
header{
      height: 100%;
}

.head {
  background-color: #f1f1f1;
}

.header-text {
  font-family: "ProximaNova";
  font-size: 24px;
  color: black;
  padding-top: 35px;
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
    margin-bottom: calc(15px + 59.5 * ((100vw - 320px) / 1280));
  }
}
@media (min-width: 767px) {
  .header-text {
    margin-bottom: calc(15px + 35 * (100vw / 1280));
  }
}
.con_nav{
padding-right: 0 !important;
margin-left: 0;
margin-right: 0;
}
.nav{
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 60px;
}
.navbar {
  display: flex;
  padding-left: 8% !important;
}
.navbar-dark {
  background-color: black;
  justify-content: center;
  align-items: center;

}
 .nav-item{
font-size: 18px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
padding-left: 3%;
}

.navbar-dark .navbar-nav .show > .nav-link, .navbar-dark .navbar-nav .nav-link.active{
  font-family: "ProximaNova_light"!important;
  font-size: 18px;
  color: white;
  width: 100%;
  padding-right: 0;
  background-color: black;
  text-align: center;
}
.navbar-dark .navbar-nav .show > .nav-link, .navbar-dark .navbar-nav .nav-link.active:hover{
  color: rgb(228, 15, 15);
}
.navbar-dark .navbar-nav .show > .nav-link, .navbar-dark .navbar-nav .nav-link.active:focus{
  color: rgb(228, 15, 15);
}
@media(max-width: 576px){
  .navbar{
    padding-left: 4%;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    height: 40px;
  }
  .navbar-dark .navbar-nav .show > .nav-link, .navbar-dark .navbar-nav .nav-link.active{
  font-size: 14px;
  padding-left: 2%;
  
}
}

@media(max-width: 430px){
  .navbar{
    padding-left: 1% !important;
  }
  .navbar-dark .navbar-nav .show > .nav-link, .navbar-dark .navbar-nav .nav-link.active{
  font-size: 14px;
  padding-left: 1% !important;
}
}
</style>
