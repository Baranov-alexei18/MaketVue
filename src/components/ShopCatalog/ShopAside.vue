<template>
    <div class="col-3">
        <div class="aside">
          <div class="aside_categories">
            <p class="p_aside">CATEGORIES</p>
            <ul id="btn_active_list" class="categories_list">
              <li class="categories_list_item" v-for="(item,index) in items" :key="index">
                <div class="container">
                  <div class="row justify-content-between">
                    <div class="col-3 mycol">
                      <p class="p_item">{{item.title}}</p>
                    </div>
                    <div class="col img_list p-0">
                      <img src="../../assets/img/tire.jpg" class="bg img-fluid" alt="">
                    </div>
                    
                    <div class="col-2 mycol">
                      <span type="button" class="circle_btn"  v-if="plus==='+'"  v-on:click="ActiveButton">{{plus}}</span>
                      <span type="button" class="circle_btn_active" v-else-if="plus==='-'"  @click="ActiveButton"> {{minus}}</span>
                    </div>    
                  </div>
                </div>
              </li>
            </ul>
          </div>
        
          <div class="aside_sellers">
            <p class="p_aside">BEST SELLERS</p>
            <div class="sellers_cell">
              <div class="sellers_pic">
              <img src="../../assets/img/cross_1_aside.jpg" style="margin-bottom: 1px;"  alt="">
              </div>
              <div class="sellers_text">
              <p>Sample Item Title Goes Here</p>
              <p class="price_1">
                $120.<sup><small style="border-bottom: 1px solid #cdcdcd;">00</small></sup>
              </p>
              <p class="price_2">
                $120.<sup><small >00</small></sup>
              </p>
              </div>     
            </div>
          
            <div class="sellers_cell">
              <div class="sellers_pic">
              <img src="../../assets/img/cross_1_aside.jpg" style="margin-bottom: 1px;"  alt="">
              </div>
              <div class="sellers_text">
              <p class="">Sample Item Title Goes Here</p>
              <p class="price_1">
                $120.<sup><small style="border-bottom: 1px solid #cdcdcd;">00</small></sup>
              </p>
              <p class="price_2">
                $120.<sup><small>00</small></sup>
              </p>
              </div>     
            </div>
        
            <div class="sellers_cell">
              <div class="sellers_pic">
              <img src="../../assets/img/cross_1_aside.jpg" style="margin-bottom: 1px;"  alt="">
              </div>
              <div class="sellers_text">
              <p>Sample Item Title Goes Here</p>
              <p class="price_1">
                $120.<sup><small style="border-bottom: 1px solid #cdcdcd;">00</small></sup>
              </p>
              <p class="price_2">
                $120.<sup><small>00</small></sup>
              </p>
              </div>     
            </div>

          </div>
        
          <div class="aside_tags">
          <p class="p_aside">TAGS</p>
          <p class="tags">
            Tag, Tag, Tag, Tag, Tag, Tag,
            Tag, Tag, Tag, Tag, Tag, Tag,
            Tag, Tag, Tag, Tag, Tag, Tag,
            Tag, Tag, Tag, Tag, Tag, Tag,
            Tag, Tag, Tag, Tag, Tag.
          </p>  
          </div>

          <div class="aside_offers">
          <p class="p_aside">SPECIAL OFFERS</p>
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <li type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></li>
              <li type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></li>
              <li type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></li>
              <li type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></li>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="../../assets/img/cross_3_coursel.jpg" class="d-block w-100" alt="">
                <div class="carousel_item_div">
                  <p class="carousel-p">item Title Here</p>
                  <p class="carousel-p-title">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                  <button class="btn_show">
                    SHOW ME MORE
                  </button>
                </div>
              </div>

              <div class="carousel-item ">
                <img src="../../assets/img/cross_3_coursel.jpg" class="d-block w-100" alt="">
                <div class="carousel_item_div">
                  <p class="carousel-p">item Title Here</p>
                  <p class="carousel-p-title">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                  <button class="btn_show">
                    SHOW ME MORE
                  </button>
                </div>
              </div>
              <div class="carousel-item">
                <img src="../../assets/img/cross_3_coursel.jpg" class="d-block w-100" alt="">
                <div class="carousel_item_div">
                  <p class="carousel-p">item Title Here</p>
                  <p class="carousel-p-title">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                  <button class="btn_show">
                    SHOW ME MORE
                  </button>
                </div>
              </div>
              <div class="carousel-item">
                <img src="../../assets/img/cross_3_coursel.jpg" class="d-block w-100" alt="">
                <div class="carousel_item_div">
                  <p class="carousel-p">item Title Here</p>
                  <p class="carousel-p-title">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                  <button class="btn_show">
                    SHOW ME MORE
                  </button>
                </div>
              </div>
            </div>
            
          </div>
          </div>
        </div>
      </div>
</template>


<script >

export default ({
    el:'#btn_active_list',
    data: function () {
    return {
      plus: '+',
      minus: '-',
      items: [
          {title: "Men's"},
          {title: "Women's"},
          {title: "Kids"},
          {title: "Sports"},
      ]
    }
    },
    
    methods:{
        ActiveButton: function(){
         if(this.plus === '+'){
        this.plus = '-';
         }
         else if(this.plus === '-'){
        this.plus="+";
        this.style.background='#6a6a6a';
        }
    }
 }
});

</script>




<style lang="scss">
.col-3 {
  padding-right: 0px;
}
.aside {
  height: 1530px;
  min-width: 130px;
  margin-right: 20px;

    .p_aside {
    font-family: "ProximaNova";
    font-size: 18px;
    color: black;
    padding-top: 4%;
    padding-bottom: 3.5%;
    padding-left: 5%;
    border-bottom: 1px solid #cccccc;
    }
    @media (max-width: 767px) {
  .aside .p_aside {
    font-size: calc(5px + 18.7 * ((100vw - 320px) / 1280));
  }
    }
    @media (min-width: 767px) {
  .aside .p_aside {
    font-size: calc(5px + 11 * (100vw / 1280));
  }
    }
    .aside_categories {
    margin-top: 19%;
    background-color: #e9e9e9;
    border: 1px solid #cccccc;
    max-width: 100%;
    
    .categories_list {
  padding-left: 5%;
          .categories_list_item {
             font-family: "ProximaNova";
             font-size: 18px;
             color: #6a6a6a;
             display: -webkit-box;
             -webkit-box-align: center;
                  -ms-flex-align: center;
               align-items: center;
            max-width: 100%;
            margin-bottom: 10px;
            }
@media (max-width: 767px) {
   .categories_list_item {
    font-size: calc(7px + 18.7 * ((100vw - 320px) / 1280));
  }
}
@media (min-width: 767px) {
   .categories_list_item {
    font-size: calc(7px + 11 * (100vw / 1280));
  }
}
 .img_list {
     display: flex;
     margin: auto 0;
  padding-left: 1%;
  padding-right: 1%;
  width: 100%;

}
.img_list img{
width: 100%;
}


 .container {
 
  width: 90%;
  padding-left: 0;
  padding-right: 0;
}
 .p_item {
  margin: 0;
}
 .circle_btn {
  font-family: "ProximaNova";
  font-size: 18px;
  color: white;
  height: 18px;
  width: 18px;
  text-align: center;
  padding-top: 3%;
  border-radius: 50%;
  background-color: #6a6a6a;
}
}

}

}

.aside .aside_sellers {
  margin-top: 48px;
  background-color: #e9e9e9;
  border: 1px solid #cccccc;
}
.aside .aside_sellers .sellers_cell {
  max-width: 100%;
  height: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  text-align: center;
  margin-top: 10%;
}
.aside .aside_sellers .sellers_cell .sellers_pic {
  width: 40%;
  height: auto;
  padding-left: 5%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  /*центрируем элемент по горизонтали */
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.aside .aside_sellers .sellers_cell .sellers_pic img {
  width: 100%;
  height: auto;
}
.aside .aside_sellers .sellers_cell .sellers_text p {
  font-family: "ProximaNova";
  font-size: 18px;
  color: black;
  text-align: left;
  padding-top: 2%;
  padding-bottom: 0;
  margin-bottom: 0;
  line-height: 0.95;
  margin: 0;
}
@media (max-width: 767px) {
  .aside .aside_sellers .sellers_cell .sellers_text p {
    font-size: calc(6px + 20.4 * ((100vw - 320px) / 1280));
  }
}
@media (min-width: 767px) {
  .aside .aside_sellers .sellers_cell .sellers_text p {
    font-size: calc(6px + 12 * (100vw / 1280));
  }
}
.aside .aside_sellers .sellers_cell .sellers_text .price_1 {
  font-family: "ProximaNova";
  font-size: 14px;
  color: #a3a3a3;
  padding-top: 7px;
  padding-left: 10%;
}
@media (max-width: 767px) {
  .aside .aside_sellers .sellers_cell .sellers_text .price_1 {
    font-size: calc(4px + 17 * ((100vw - 320px) / 1280));
  }
}
@media (min-width: 767px) {
  .aside .aside_sellers .sellers_cell .sellers_text .price_1 {
    font-size: calc(4px + 10 * (100vw / 1280));
  }
}
.aside .aside_sellers .sellers_cell .sellers_text .price_2 {
  font-family: "ProximaNova";
  font-size: 18px;
  color: #ed1c24;
  padding-top: 4px;
  padding-left: 10%;
}
.aside .aside_sellers .sellers_cell:last-child {
  margin-bottom: 5%;
}
.aside .aside_tags {
  margin-top: 48px;
  background-color: #e9e9e9;
  border: 1px solid #cccccc;
}
.aside .aside_tags .tags {
  font-family: "ProximaNova";
  font-size: 18px;
  color: #6a6a6a;
  padding-left: 5%;
  padding-right: 2%;
}
@media (max-width: 767px) {
  .aside .aside_tags .tags {
    font-size: calc(6px + 20.4 * ((100vw - 320px) / 1280));
  }
}
@media (min-width: 767px) {
  .aside .aside_tags .tags {
    font-size: calc(6px + 12 * (100vw / 1280));
  }
}
.aside .aside_offers {
  margin-top: 48px;
  background-color: #e9e9e9;
  border: 1px solid #cccccc;
  height: auto;
}
.aside .aside_offers .carousel_item_div {
  padding-left: 5%;
  margin-bottom: 50px;
}
.aside .aside_offers .carousel_item_div .carousel-p {
  font-family: "ProximaNova";
  font-size: 18px;
  color: black;
}
@media (max-width: 767px) {
  .aside .aside_offers .carousel_item_div .carousel-p {
    font-size: calc(6px + 20.4 * ((100vw - 320px) / 1280));
  }
}
@media (min-width: 767px) {
  .aside .aside_offers .carousel_item_div .carousel-p {
    font-size: calc(6px + 12 * (100vw / 1280));
  }
}
.aside .aside_offers .carousel_item_div .carousel-p-title {
  font-family: "ProximaNova_light";
  font-size: 14px;
  color: black;
}
@media (max-width: 767px) {
  .aside .aside_offers .carousel_item_div .carousel-p-title {
    font-size: calc(4px + 23.8 * ((100vw - 320px) / 1280));
  }
}
@media (min-width: 767px) {
  .aside .aside_offers .carousel_item_div .carousel-p-title {
    font-size: calc(4px + 14 * (100vw / 1280));
  }
}
.aside .aside_offers .carousel-indicators li {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid #d1d1d1;
  background-color: #e9e9e9;
}
.aside .aside_offers .carousel-indicators .active {
  background-color: #ed1c24;
}

.circle_btn_active{
  font-family: "ProximaNova";
  font-size: 18px;
  color: white;
  height: 18px;
  width: 18px;
  text-align: center;
  padding-top: 3%;
  border-radius: 50%;
  background:#cd0000;
}
@media (max-width: 767px) {
  .aside .p_aside {
    font-size: calc(5px + 18.7 * ((100vw - 320px) / 1280));
  }
}
@media (min-width: 767px) {
  .aside .p_aside {
    font-size: calc(5px + 11 * (100vw / 1280));
  }
}
.mycol{
 padding-left: 2%; 
 padding-right: 1%;
}
.categories_list_item:nth-child(2){
  img{
    margin-left: 18%;
  }
}
.categories_list_item:nth-child(3){
  .col-3{
    width: 20%;
  }
  img{
    
    width: 120%;
  }
}

</style>