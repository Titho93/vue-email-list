const { createApp } = Vue;

createApp({
  data() {
    return {
      apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
      emails: [],
    };
  },

  methods: {
    getApi() {
      for (let i = 0; i < 10; i++) {
        axios.get(this.apiUrl).then((answer) => {
          this.email = answer.data.response;
          this.emails.push(this.email);
        });
      }
    },
  },

  created() {},

  mounted() {
    this.getApi();
  },
}).mount("#app");
