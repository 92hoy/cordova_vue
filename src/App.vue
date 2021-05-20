<template>
  <v-app>
    <v-main>
      <router-view></router-view>
      <!-- <div id="app">
        <h2>For Kakao Login Vue</h2>
        <a :href="kakaoLoginLink" alt="kakao login">
          <img alt="kakao logo" src="./assets/kakao_login_large_narrow.png" />
        </a>
        <h2>For Kakao Logout Vue</h2>
        <a :href="kakaoLogoutLink" alt="kakao logout">
          <img alt="kakao logo" src="./assets/kakao_login_large_narrow.png" />
        </a>
      </div> -->
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

      <v-btn @click="kakaoLogin" class="mx-4" icon>
        <span>login</span>
        <v-icon size="30px">
          mdi-android
        </v-icon>
      </v-btn>
      <v-btn @click="kakaoLogout" class="mx-4" icon>
        <span>logout</span>
        <v-icon size="30px">
          mdi-apple
        </v-icon>
      </v-btn>

      <!-- <img
        class="kakao_btn"
        src="@/assets/kakao_login_small.png"
        @click="kakaoLogin"
      /> -->
    </v-bottom-navigation>
    <!-- footer -->
  </v-app>
</template>

<script>
import { mdiAccount } from "@mdi/js";

export default {
  data: () => ({
    client_id: "1b628e1635cbea50af3b62b0bc5ea3b0",
    login_redirect_uri: "http://localhost:8080/account/kakaologin",
    logout_redirect_uri: "http://localhost:8080/account/kakaologin",
    svgPath: mdiAccount,
    // -----Footer-----
    footer_btn: {
      홈: ["mdi-home", "/main"],
      "차트의 창": ["mdi-chart-line", "/test"],
      모의투자: ["mdi-gamepad", "/api"],
      // kakao: ["mdi-android", "/account/kakaologin"],
    },
  }),
  methods: {
    kakaoLogin() {
      console.log(window.Kakao);
      window.Kakao.Auth.login({
        scope: "account_email",
        success: this.GetMe,
      });
      // this.$kakao.Auth.login({
      //   success(authObj) {
      //     alert(JSON.stringify(authObj));
      //     console.log(JSON.stringify(authObj));
      //   },
      //   fail(err) {
      //     alert(JSON.stringify(err));
      //   },
      // });
    },
    GetMe(authObj) {
      console.log("authObj", authObj);
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          const kakao_account = res.kakao_account;
          console.log("res", res);
          const userInfo = {
            email: kakao_account.email,
            password: "",
            account_type: 2,
          };

          // axios
          //   .post("http://localhost:8080/account/kakaologin", {
          //     email: userInfo.email,
          //   })
          //   .then((res) => {
          //     console.log(res);
          //     console.log("데이터베이스에 회원 정보가 있음!");
          //   })
          //   .catch((err) => {
          //     console.log(err);
          //     console.log("데이터베이스에 회원 정보가 없음!");
          //   });
          console.log("userInfo", userInfo);
          alert("로그인 성공!");
          // this.$bvModal.hide("bv-modal-example");
        },
        fail: (error) => {
          this.$router.push("/errorPage");
          console.log(error);
        },
      });
    },
    kakaoLogout() {
      if (window.Kakao.Auth.getAccessToken()) {
        console.log(
          "카카오 인증 엑세스 토큰 존재",
          window.Kakao.Auth.getAccessToken()
        );
        window.Kakao.Auth.logout(() => {
          console.log(
            "카카오 로그아웃 완료",
            "서비스 로그아웃은 직접구현",
            window.Kakao.Auth.getAccessToken()
          );
        });
      } else {
        console.log("이미 로그아웃상태", window.Kakao.Auth.getAccessToken());
      }
      // window.Kakao.API.request({
      //   url: "/v1/user/logout",
      //   success: (res) => {
      //     // const kakao_account = res.kakao_account;
      //     console.log("res", res);
      //     // const userInfo = {
      //     //   email: kakao_account.email,
      //     //   password: "",
      //     //   account_type: 2,
      //     // };
      //     // console.log("userInfo", userInfo);
      //     alert("로그아웃 성공!");
      //   },
      //   fail: (error) => {
      //     this.$router.push("/errorPage");
      //     console.log(error);
      //   },
      // });
    },
  },
};
</script>
