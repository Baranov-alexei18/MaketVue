module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  css:{
    loaderOptions:{
      sass:{
        prapenData: '@import "@/asset/css/styles.scss";'
      }
    }
  }
};
