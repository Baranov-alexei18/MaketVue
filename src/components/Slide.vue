<template>
    <div class="bg_div">
      <img src="../assets/img/bg.jpg"  class="bg img-fluid" alt=" ">

      <div class="col-5 text_block_div">
        <h3>Big Title Here</h3>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc sed malesuada sapien. Nulla aliquam orci nec massa hendrerit tincidunt.
          Donec in sollicitudin lacus. Curabitur et faucibus nulla.
          Maecenas sit amet semper libero, in iaculis   felis. Aliquam erat volutpat. 
          Donec sollicitudin turpis eget tortor tincidunt euismod.</p>
        
        <button class="btn_show">
          SHOW ME MORE
        </button>
      </div>
    </div>
</template>

<style lang="scss">
  .bg_div {
  position: relative;
  max-width: 100%;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}
.bg_div .text_block_div {
  position: absolute;
  top: 20%;
  left: 50%;
  right: 0;
  overflow: hidden;
}
.bg_div .text_block_div h3 {
  font-family: "ProximaNova";
  font-size: 36px;
  color: black;
  margin-bottom: 25px;
}
@media (max-width: 767px) {
  .bg_div .text_block_div h3 {
    font-size: calc(10px + 44.2 * ((100vw - 320px) / 1280));
  }
}
@media (min-width: 767px) {
  .bg_div .text_block_div h3 {
    font-size: calc(10px + 26 * (100vw / 1280));
  }
}
@media (max-width: 767px) {
  .bg_div .text_block_div h3 {
    margin-bottom: calc(1px + 40.8 * ((100vw - 320px) / 1280));
  }
}
@media (min-width: 767px) {
  .bg_div .text_block_div h3 {
    margin-bottom: calc(1px + 24 * (100vw / 1280));
  }
}
.bg_div .text_block_div p {
  font-family: "ProximaNova_light";
  font-size: 18px;
  color: black;
  margin-bottom: 25px;
}
@media (max-width: 767px) {
  .bg_div .text_block_div p {
    font-size: calc(5px + 22.1 * ((100vw - 320px) / 1280));
  }
}
@media (min-width: 767px) {
  .bg_div .text_block_div p {
    font-size: calc(5px + 13 * (100vw / 1280));
  }
}
@media (max-width: 767px) {
  .bg_div .text_block_div p {
    margin-bottom: calc(1px + 40.8 * ((100vw - 320px) / 1280));
  }
}
@media (min-width: 767px) {
  .bg_div .text_block_div p {
    margin-bottom: calc(1px + 24 * (100vw / 1280));
  }
}

</style> 