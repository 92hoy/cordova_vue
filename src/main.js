import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router/router";
Vue.config.productionTip = false;

import VueKakaoSdk from "vue-kakao-sdk";

const apiKey = "552a59f80241b02bd345ca0ecd8ced93";
Vue.use(VueKakaoSdk, { apiKey }); // apiKey 를 반드시 입력해줘야한다.

// window.Kakao.init("552a59f80241b02bd345ca0ecd8ced93");

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
