<template>
  <v-app>
    <v-app-bar
        app
        color="primary"

        class="mb-3"
    >
      <v-toolbar-title class="white--text">WebPass</v-toolbar-title>
      <v-btn plain to="/">
        <v-icon color="orange darken-2" class="ml-2 ">mdi-lock</v-icon>
      </v-btn>
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
      <v-btn v-show="getIsDecrypted" color="" to="/new-password">New Password</v-btn>

    </v-app-bar>

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
  },

  data: () => ({
    masterPassword: "",
    passwords:[]
  }),
  methods: {


    ...mapMutations({
      setMasterPassword: "setMasterPassword",
      loadPasswordsListFromStorage:"loadPasswordsListFromStorage"
    }),
    decrypt() {
      this.setMasterPassword(this.masterPassword)
      this.$root.$emit("masterPassUpdate")
    },
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
