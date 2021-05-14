<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="100"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          This is API.vue
        </h1>
      </v-col>

      <v-form ref="form" id="api_app">
        <v-container fluid>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.apgb"
                id="apgb"
                color="purple darken-2"
                label="apgb"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.userid"
                id="userid"
                color="blue darken-2"
                label="userid"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.gamedt"
                id="gamedt"
                color="blue darken-2"
                label="gamedt"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.gameseq"
                id="gameseq"
                color="blue darken-2"
                label="gameseq"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <button
          @click="submitbtn"
          type="button"
          class="ma-2 v-btn v-btn--fab v-btn--outlined v-btn--round theme--light v-size--large indigo--text"
        >
          <span class="v-btn__content"
            ><i
              aria-hidden="true"
              class="v-icon notranslate mdi mdi-pencil theme--light"
            ></i
          ></span>
        </button>
        <v-container fluid>
          <v-textarea
            id="result"
            name="input-7-1"
            filled
            label="Label"
            auto-grow
            v-model="form.result"
          ></v-textarea>
        </v-container>
      </v-form>
    </v-row>
  </v-container>
</template>

<script>
// import Vue from "vue";
import { post_form_api } from "../api/api.js";

export default {
  name: "HelloWorld",
  data() {
    const defaultForm = Object.freeze({
      apgb: "gameresult",
      userid: "1564049716",
      gamedt: "20210310",
      gameseq: "1",
      result: "",
    });
    return {
      form: Object.assign({}, defaultForm),
      defaultForm,
    };
  },
  computed: {
    formIsValid() {
      return (
        this.form.apgb &&
        this.form.userid &&
        this.form.gamedt &&
        this.form.gameseq &&
        this.form.result
      );
    },
  },
  methods: {
    async submitbtn() {
      const input_data = new FormData();
      input_data.append("apgb", this.form.apgb);
      input_data.append("userid", this.form.userid);
      input_data.append("gamedt", this.form.gamedt);
      input_data.append("gameseq", this.form.gameseq);
      let response = await post_form_api(input_data);
      response = JSON.stringify(response);
      //   console.log("res", response.status);

      this.form.result = response;
      //   this.form.result = response;
    },
  },
};
</script>
