<template>
  <v-app >
    <header-component/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>


import HeaderComponent from "@/components/HeaderComponent";
import {mapGetters} from "vuex";

export default {
  name: 'App',
  components: {HeaderComponent},
  beforeMount() {
    this.loadPasswordsListFromStorage()
    if(this.$route.query.data!==undefined&&this.$route.query.data!==""){
      console.log(this.$route.query.data)
      localStorage.setItem("Passlist",this.$route.query.data)
      location.replace(`${location.protocol}//${location.host}/#/`)

    }
  },

  data: () => ({


  }),
  methods: {
    ...mapGetters({
      loadPasswordsListFromStorage:"getPasswordsListFromStorage",
    })
  },
  computed:{


  }
};
</script>
<style scoped lang="scss">

.text-input-blue .v-text-field__slot input {
  color: #00f !important;
}
</style>
