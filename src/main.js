import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router/router";
import VueCookies from "vue-cookies";

Vue.config.productionTip = false;

import VueKakaoSdk from "vue-kakao-sdk";

const apiKey = "552a59f80241b02bd345ca0ecd8ced93";
Vue.use(VueKakaoSdk, { apiKey }); // apiKey 를 반드시 입력해줘야한다.

window.Kakao.init("552a59f80241b02bd345ca0ecd8ced93");

//쿠키를 사용한다.
Vue.use(VueCookies);

//쿠키의 만료일은 7일이다. (글로벌 세팅)
Vue.$cookies.config("7d");
//쿠키 쓰고싶을때
// this.$cookies.set("키", "값", "만료일");

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
