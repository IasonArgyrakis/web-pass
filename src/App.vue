<template>
  <v-app>
    <header-component />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";

export default {
  name: "App",
  components: {
    HeaderComponent,
  },

  beforeMount() {
    this.loadPasswordsListFromStorage();
    if (this.$route.query.data !== undefined && this.$route.query.data !== "") {
      console.log(this.$route.query.data);
      localStorage.setItem("Passlist", this.$route.query.data);
      location.replace(`${location.protocol}//${location.host}/#/`);
    }
  },

  methods: {
    deviceType() {
      const ua = navigator.userAgent;
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
      } else if (
        /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
          ua
        )
      ) {
        return "mobile";
      }
      return "desktop";
    },
  },
};
</script>
<style scoped lang="scss">
.text-input-blue .v-text-field__slot input {
  color: #00f !important;
}
</style>
