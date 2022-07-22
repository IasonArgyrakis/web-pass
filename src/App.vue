<template>
  <v-app >
    <v-app-bar
        app
        color="primary"
        class="mb-3"
    >
      <v-app-bar-nav-icon  @click="drawer = !drawer" ></v-app-bar-nav-icon>


      <v-text-field
          :disabled="getIsDecrypted"
          :type="fieldType"
          hide-details
          placeholder="Master"
          filled
          rounded
          dense
          dark
          single-line
          class="shrink mx-4 text-input-blue"
          v-model="masterPassword"
      />
      <v-btn v-show="!getIsDecrypted" @click="decrypt">Unlock</v-btn>

      <v-spacer></v-spacer>

    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        temporary
        app
    >
      <v-list>
        <v-list-item-group>

          <v-list-item>
            <v-list-item-title ><v-btn text to="/">
              <v-icon>mdi-view-list</v-icon>
              Passwords</v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title ><v-btn text to="/new-password">
              <v-icon>mdi-plus</v-icon>
              New Password</v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title ><v-btn text to="/sync-password">
              <v-icon>mdi-autorenew</v-icon>
              Sync Password</v-btn>
            </v-list-item-title>
          </v-list-item>


        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import {mapGetters, mapMutations} from "vuex";

export default {
  name: 'App',

  beforeMount() {
    this.loadPasswordsListFromStorage()
    if(this.$route.query.data!==undefined&&this.$route.query.data!==""){
      console.log(this.$route.query.data)
      localStorage.setItem("Passlist",this.$route.query.data)
      location.replace(`${location.protocol}//${location.host}/#/`)

    }
  },

  data: () => ({
    drawer: false,
    masterPassword: "",
    passwords:[]
  }),
  methods: {
    ...mapMutations({
      setMasterPassword: "setMasterPassword",
      loadPasswordsListFromStorage:"loadPasswordsListFromStorage",
      decryptStorage:"decrypt"
    }),
    decrypt() {
      this.setMasterPassword(this.masterPassword)
      this.decryptStorage()
    },
    deviceType () {
      const ua = navigator.userAgent;
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
      }
      else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
      }
      return "desktop";
    }
  },
  computed:{
  ...mapGetters({
      getIsDecrypted:"getIsDecrypted"
    }),
    fieldType(){
      if(this.getIsDecrypted){
        return "password"
      }else {
        return "text"
      }
    }
  }
};
</script>
<style scoped lang="scss">

.text-input-blue .v-text-field__slot input {
  color: #00f !important;
}
</style>
