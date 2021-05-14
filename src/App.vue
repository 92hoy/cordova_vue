<template>
  <v-app>
    <v-app-bar app color="primary" dark>
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

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <!-- <HelloWorld/> -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script></script>
