<template>
  <v-app>
    <!-- <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn value="recent">
        <span>
          <router-link to="/main" style="color:white; font-weight:bold;"
            >Main</router-link
          >
        </span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn value="favorites">
        <span>
          <router-link to="/test" style="color:white; font-weight:bold;"
            >Test</router-link
          >
        </span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn value="nearby">
        <span>
          <router-link to="/api" style="color:white; font-weight:bold;"
            >API</router-link
          >
        </span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-app-bar> -->

    <v-main>
      <router-view></router-view>
    </v-main>

    <!-- footer -->
    <v-bottom-navigation v-model="value" :input-value="active" color="indigo">
      <v-btn
        v-for="(key, idx) in footer_btn"
        :key="idx"
        class="mx-4"
        icon
        :to="key[1]"
        position: fixed
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

<script>
export default {
  data: () => ({
    // -----Footer-----
    footer_btn: {
      홈: ["mdi-home", "/main"],
      "차트의 창": ["mdi-chart-line", "/test"],
      모의투자: ["mdi-gamepad", "/api"],
      더보기: ["mdi-android", "/main"],
    },
  }),
  // kakao
  name: "LoginKakao",
  shareStoryWeb() {
    this.$kakao.Story.share({
      url: "https://github.com/eggplantiny/vue-kakao-sdk",
      text: "Test story share with vue-kakao-sdk",
    });
  },
  loginWithKakao() {
    this.$kakao.Auth.login({
      success(authObj) {
        alert(JSON.stringify(authObj));
      },
      fail(err) {
        alert(JSON.stringify(err));
      },
    });
  },
};
</script>
