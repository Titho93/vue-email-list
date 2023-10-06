const { createApp } = Vue;

createApp({
  data() {
    return {
      apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
      email: "",
    };
  },

  methods: {
    getApi() {
      axios.get(this.apiUrl).then((answer) => {
        this.email = answer.data.response;
      });
    },
  },

  mounted() {
    this.getApi();
  },
}).mount("#app");
