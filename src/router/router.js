import Vue from "vue";
import Router from "vue-router";

// 연결할 컴포넌트 import
import HelloWorld from "@/components/HelloWorld.vue";
import Test from "@/components/Test.vue";
import Api from "@/components/api.vue";

// 필수
Vue.use(Router);
export default new Router({
  mode: "history", // history 모드는 자연스러운 url 가능, 지정하지 않으면 해시(#)기호로 url 사용
  routes: [
    {
      path: "/test",
      name: "test",
      component: Test,
    },
    {
      path: "/main",
      name: "main",
      component: HelloWorld,
    },
    {
      path: "/api",
      name: "api",
      component: Api,
    },
  ],
});
