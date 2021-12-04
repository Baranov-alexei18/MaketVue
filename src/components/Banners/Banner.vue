<template>
<div class="container catalog_shop ">
        <div class="row gx-5">
            <div id="cse_1" class="col-6 catalog_shop_elements">
                <div class="text_block_div_1">
                 <p class="p_catalog_title_1">2014 Chuck Taylor ALL STARS</p>
                 
                 <p class="p_catalog_text_1">NOW IN STOCK!</p>
                 <p class="p_catalog_text_1">FREE SHIPPING</p>
                 <p class="p_catalog_text_1_last" > STARTING AT $24.99</p>
                 <button class="btn_show">
                   SHOW ME MORE
                 </button>
              </div>
            </div>

          <div id="cse_2"  class="col-6 catalog_shop_elements">
            <div class="bg_fon">
              <div class="text_block_div_1">
              <p class="p_catalog_title_2">2014 Le Blanc Dress Shoes</p>
              
              <p class="p_catalog_text_2">NOW IN STOCK!</p>
              <p class="p_catalog_text_2">FREE SHIPPING</p>
              <p class="p_catalog_text_2_last" >STARTING AT $299.99</p>
              
              <button id="btn_catalog_2" class="btn_show">
                SHOW ME MORE
              </button>
            </div>
            </div>
            
            
          </div>
        </div>
    </div>
</template>



<style lang="scss">

.catalog_shop{
padding-top: 12px;
  padding-bottom: 20px;
  padding-left: 0;
  padding-right: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: block;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}


    
    .catalog_shop .catalog_shop_elements:first-child{
        padding-right: 10px;
        padding-left: 20px;
    }
    
    .catalog_shop .catalog_shop_elements:last-child{
        padding-left: 10px;
        padding-right: 20px;
    }
    .text_block_div_1{
    background-image: url("../../assets/img/catalog_1.jpg");
    background-size: cover;
        .p_catalog_title_1{
            padding-top: 5% ;
            margin-left: 3%;
        }
    .btn_show{
        margin-left: 3%;
        margin-bottom: 5%;
    }
    }

#cse_2{

.text_block_div_1{
    background-image: url("../../assets/img/catalog_2.jpg");
    background-size: cover;
    .p_catalog_title_2{
        padding-top: 5%;
        margin-left: 3%;
    }
    .p_catalog_text_2_last {
        margin-left: 3%;
    }
    .btn_show{
        margin-left: 3%;
        margin-bottom: 5%;
    }
}
}



@media (max-width: 576px) {

    .catalog_shop .catalog_shop_elements{
      display: inline-block;
      margin: 0 auto;
      min-width: 340px;
    
    }
    .catalog_shop .catalog_shop_elements:first-child{
        padding-left: 0;
        margin-bottom: 1%;
    }
    .catalog_shop .catalog_shop_elements:last-child{
        padding-left: 0;
        padding-right: 10px;
    }
    .catalog_shop{
        padding-top: 1%;
    }
}
@media (max-width: 474px) {
    
    .catalog_shop .catalog_shop_elements{ 
      min-width: 100%;
    }
    .catalog_shop .catalog_shop_elements:first-child{
        padding-left: 3%;
        padding-right: 12px;
        margin-bottom: 1%;
    }
    .catalog_shop .catalog_shop_elements:last-child{
        padding-left: 3%;
        padding-right: 12px;
        margin-bottom: 1%;
    }
    
  
}
</style>