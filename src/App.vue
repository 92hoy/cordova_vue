<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>

    <!-- footer -->
    <v-bottom-navigation color="indigo" horizontal>
      <v-btn
        v-for="(key, idx) in footer_btn"
        :key="idx"
        class="mx-4"
        icon
        :to="key[1]"
      >
        <span>{{ idx }}</span>
        <v-icon size="30px">
          {{ key[0] }}
        </v-icon>
      </v-btn>
    </v-bottom-navigation>
    <!-- footer -->
  </v-app>
</template>
//
<v-btn @click="loginWithKakao" class="mx-4" icon>
//         <span class="material-icons">
//           login
//         </span>
//       </v-btn>
<script>
import { mdiAccount } from "@mdi/js";

export default {
  data: () => ({
    svgPath: mdiAccount,
    // -----Footer-----
    footer_btn: {
      홈: ["mdi-home", "/main"],
      "차트의 창": ["mdi-chart-line", "/test"],
      모의투자: ["mdi-gamepad", "/api"],
      kakao: ["mdi-android", "/accout/kakaologin"],
    },
  }),
};
</script>
