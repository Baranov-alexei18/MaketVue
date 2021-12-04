<template>
    <div class="container col-10 catalog_shop ">
        <div class="row gx-5">
            <Catalog/>
            <ShopAside/>
        </div>
    </div>
</template>


<script >
import Catalog from '../ShopCatalog/Catalog.vue'
import ShopAside from '../ShopCatalog/ShopAside.vue'

export default{
  components: {
    Catalog,
    ShopAside,
  }
}

</script>

<style lang="scss">
.main_shop {
  height: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  -webkit-box-pack: left;
      -ms-flex-pack: left;
          justify-content: left;
}
</style>