<template>
    <div class="col-12 col-md-9 shop_products">
        <p class="featured_products">FEATURED PRODUCTS</p>
        <div class="featured_products_list">
            <ul class="list_product" >
              <li class="list_product_item">
                <div class="cross">
                <div class="pic_cross">
                  <img src="../../assets/img/cross_1.jpg" class="bg img-fluid" alt="">
                  <div class="img_new">
                     <img src="../../assets/img/new.jpg" class="bg img-fluid" alt="">
                  </div>
                </div>
                  <div class="cross_price">
                    <p>Sample Item Title</p>
                    <p class="price">$99.<sup><small>99</small></sup></p>
                  </div>
                </div>
              </li>
              <li class="list_product_item">
                <img src="../../assets/img/cross_2.jpg" class="bg img-fluid" alt="">
                  
                  <div class="cross_price">
                    <p>Sample Item Title</p>
                    <p class="price">$99.<sup><small>99</small></sup></p>
                  </div>
              </li>
              <li class="list_product_item">
                <div class="pic_cross">
                  <img src="../../assets/img/cross_3.jpg" class="bg img-fluid" alt="">
                  <div class="img_new">
                     <img src="../../assets/img/sale.jpg" class="bg img-fluid" alt="">
                  </div>
                </div>
                  <div class="cross_price">
                    <p>Sample Item Title</p>
                    <p class="price">$99.<sup><small>99</small></sup></p>
                  </div>
                
              </li>
            </ul>
        </div>
        
        <p class="featured_products">LATEST PRODUCTS</p>
        <div class="latest_products_list">
            <ul  class="list_product" >
              <li class="list_product_item">
                <div class="pic_cross">
                  <img src="../../assets/img/cross_1.jpg" class="bg img-fluid" alt="">
                  <div class="img_new">
                     <img src="../../assets/img/new.jpg" class="bg img-fluid" alt="">
                  </div>
                </div>
                  <div class="cross_price">
                    <p>Sample Item Title</p>
                    <p class="price">$99.<sup><small>99</small></sup></p>
                  </div>
                
              </li>
              <li class="list_product_item">
                <img src="../../assets/img/cross_2.jpg" class="bg img-fluid" alt="">
                  
                  <div class="cross_price">
                    <p>Sample Item Title</p>
                    <p class="price">$99.<sup><small>99</small></sup></p>
                  </div>
              </li>
              <li class="list_product_item">
                <div class="pic_cross">
                  <img src="../../assets/img/cross_3.jpg" class="bg img-fluid" alt="">
                  <div class="img_new">
                     <img src="../../assets/img/sale.jpg" class="bg img-fluid" alt="">
                  </div>
                </div>
                  <div class="cross_price">
                    <p>Sample Item Title</p>
                    <p class="price">$99.<sup><small>99</small></sup></p>
                  </div>
                
              </li>
              <li class="list_product_item">
                <div class="pic_cross">
                  <img src="../../assets/img/cross_1.jpg" class="bg img-fluid" alt="">
                  <div class="img_new">
                     <img src="../../assets/img/new.jpg" class="bg img-fluid" alt="">
                  </div>
                </div>
                  <div class="cross_price">
                    <p>Sample Item Title</p>
                    <p class="price">$99.<sup><small>99</small></sup></p>
                  </div>
                
              </li>
              <li class="list_product_item">
                <img src="../../assets/img/cross_2.jpg" class="bg img-fluid" alt="">
                  
                  <div class="cross_price">
                    <p>Sample Item Title</p>
                    <p class="price">$99.<sup><small>99</small></sup></p>
                  </div>
              </li>
              <li class="list_product_item">
                <div class="pic_cross">
                  <img src="../../assets/img/cross_3.jpg" class="bg img-fluid" alt="">
                  <div class="img_new">
                     <img src="../../assets/img/sale.jpg" class="bg img-fluid" alt="">
                  </div>
                </div>
                  <div class="cross_price">
                    <p>Sample Item Title</p>
                    <p class="price">$99.<sup><small>99</small></sup></p>
                  </div>
              </li>
            </ul>
        </div>  
    </div>
</template>

<script>


export default {

}

</script>
<style lang="scss">
small {
  border-bottom: 1px solid #eac2c3;
}
.shop_products {
  position: relative;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
    max-width: 100%;
}
.shop_products .list_product {
  position: relative;
  margin: 0;
  padding: 0;
  margin-top: 6%;
  max-width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}
.shop_products .featured_products {
  font-family: "ProximaNova_Conversed";
  font-size: 32px;
  color: black;
  margin: 0;
  margin-bottom: 2%;
}
@media (max-width: 767px) {
.shop_products .featured_products {
    font-size: calc(15px + 28.9 * ((100vw - 320px) / 1280));
  }
}
@media (min-width: 767px) {
.shop_products .featured_products {
    font-size: calc(15px + 17 * (100vw / 1280));
  }
}
.shop_products .featured_products_list {
  position: relative;
  width: 100%;
  height: auto;
  border-top: 1px solid #6a6a6a;
  margin-bottom: 5%;
}
.shop_products .featured_products_list ul.list_product li:nth-child(3n) {
  margin-right: 0;
}
 .shop_products .featured_products_list ul.list_product li {
  margin-right: 4.55%;
  margin-bottom: 5%;
  min-width: 88px;
  -webkit-box-flex: 1;
      -ms-flex: 1 0 30.3%;
          flex: 1 0 30.3%;
}
@media (max-width: 767px) {
   .shop_products .featured_products_list ul.list_product li {
    margin-bottom: calc(5px + 54.4 * ((100vw - 320px) / 1280));
  }
}
@media (min-width: 767px) {
   .shop_products .featured_products_list ul.list_product li {
    margin-bottom: calc(5px + 32 * (100vw / 1280));
  }
}
 .shop_products .featured_products_list ul.list_product li .pic_cross {
  position: relative;
}
 .shop_products .featured_products_list ul.list_product li .pic_cross .img_new {
  position: absolute;
  width: 30%;
  text-align: end;
  top: 2%;
  right: 5%;
  bottom: 0;
}
.shop_products .featured_products_list ul.list_product li .img-fluid {
  margin-bottom: 10%;
}
.shop_products .featured_products_list ul.list_product li .cross_price {
  font-family: "ProximaNova_Conversed";
  font-size: 24px;
  color: black;
  border-top: 1px solid #bebebe;
  max-width: 100%;
}
@media (max-width: 767px) {
.shop_products .featured_products_list ul.list_product li .cross_price {
    font-size: calc(10px + 23.8 * ((100vw - 320px) / 1280));
  }
}
@media (min-width: 767px) {
.shop_products .featured_products_list ul.list_product li .cross_price {
    font-size: calc(10px + 14 * (100vw / 1280));
  }
}
.shop_products .featured_products_list ul.list_product li .cross_price p:first-child {
  margin-top: 7%;
  margin-bottom: 0;
}
.shop_products .featured_products_list ul.list_product li .cross_price .price {
  font-family: "ProximaNova_Conversed";
  font-size: 32px;
  color: #ed1c24;
}
@media (max-width: 767px) {
.shop_products .featured_products_list ul.list_product li .cross_price .price {
    font-size: calc(15px + 28.9 * ((100vw - 320px) / 1280));
  }
}
@media (min-width: 767px) {
.shop_products .featured_products_list ul.list_product li .cross_price .price {
    font-size: calc(15px + 17 * (100vw / 1280));
  }
}

// Latest products
.shop_products .latest_products_list {
  position: relative;
  max-width: 100%;
  height: auto;
  border-top: 1px solid #6a6a6a;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}
.shop_products .latest_products_list ul.list_product li:nth-child(3n) {
  margin-right: 0;
}
.shop_products .latest_products_list ul.list_product li {
  margin-right: 4.55%;
  margin-bottom: 5%;
  min-width: 135px;
  -webkit-box-flex: 0;
      -ms-flex: 0 0 30.3%;
          flex: 0 0 30.3%;
}
@media (max-width: 767px) {
    .shop_products .latest_products_list ul.list_product li {
    margin-bottom: calc(5px + 54.4 * ((100vw - 320px) / 1280));
  }
}
@media (min-width: 767px) {
   .shop_products .latest_products_list ul.list_product li {
    margin-bottom: calc(5px + 32 * (100vw / 1280));
  }
}
 .shop_products .latest_products_list ul.list_product li .pic_cross {
  position: relative;
}
 .shop_products .latest_products_list ul.list_product li .pic_cross .img_new {
  position: absolute;
  width: 30%;
  text-align: end;
  top: 2%;
  right: 5%;
  bottom: 0;
}
 .shop_products .latest_products_list ul.list_product li .img-fluid {
  margin-bottom: 10%;
}
 .shop_products .latest_products_list ul.list_product li .cross_price {
  font-family: "ProximaNova_Conversed";
  font-size: 24px;
  color: black;
  border-top: 1px solid #bebebe;
  max-width: 100%;
}
@media (max-width: 767px) {
.shop_products .latest_products_list ul.list_product li .cross_price {
    font-size: calc(10px + 23.8 * ((100vw - 320px) / 1280));
  }
}
@media (min-width: 767px) {
   .shop_products .latest_products_list ul.list_product li .cross_price {
    font-size: calc(10px + 14 * (100vw / 1280));
  }
}
 .shop_products .latest_products_list ul.list_product li .cross_price p:first-child {
  margin-top: 7%;
  margin-bottom: 0;
}
 .shop_products .latest_products_list ul.list_product li .cross_price .price {
  font-family: "ProximaNova_Conversed";
  font-size: 32px;
  color: #ed1c24;
}
@media (max-width: 767px) {
   .shop_products .latest_products_list ul.list_product li .cross_price .price {
    font-size: calc(15px + 28.9 * ((100vw - 320px) / 1280));
  }
}
@media (min-width: 767px) {
   .shop_products .latest_products_list ul.list_product li .cross_price .price {
    font-size: calc(15px + 17 * (100vw / 1280));
  }
}

 .shop_products .list_product {
  position: relative;
  margin: 0;
  padding: 0;
  margin-top: 6%;
  max-width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}

@media(max-width: 474px){
  .shop_products .latest_products_list ul.list_product li:nth-child(3n) {
  margin-right: 4%;
}
}

@media(max-width: 600px){
  .shop_products { 
    padding-left: 5px;
  }  
}
@media(max-width: 360px){
.shop_products{
  margin: 0;
  margin-left: 0;
}
}
</style>