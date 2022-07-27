<template lang="html">
  <section class="header-component">

    <v-app-bar
        app
        color="primary"
        class="mb-3"
    >
      <v-app-bar-nav-icon v-show="isMobile" class="mobileNavicon" @click="onClickNavIcon"/>


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
        v-model="isDrawerActive"
        :temporary="isMobile"
        :permanent="isDesktop"
        :expand-on-hover="expandOnHover"
        :mini-variant.sync="isMiniNav"
        app
    >
      <v-list>
        <v-list-item-group>

          <v-list-item to="/">

            <v-list-item-icon>
              <v-icon>mdi-view-list</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Passwords
            </v-list-item-title>

          </v-list-item>

          <v-list-item to="/new-password">

            <v-list-item-icon>
              <v-icon>mdi-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              New Password
            </v-list-item-title>

          </v-list-item>
          <v-list-item to="/sync-passwords">
            <v-list-item-icon>
              <v-icon>mdi-autorenew</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Sync Passwords
            </v-list-item-title>
          </v-list-item>


        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <div v-show="!isMiniNav" class="pa-2">
          <qrcode-vue :value="webHash" class="mx-auto text-center" :size="200" level="H"/>
          <p class="px-3 overflow-hidden text-wrap">{{ webHash }}</p>
        </div>
      </template>
    </v-navigation-drawer>
  </section>

</template>

<script lang="js">

import {mapGetters, mapMutations} from "vuex";
import QrcodeVue from "qrcode.vue"

export default {
  name: 'header-component',
  props: [],
  components: {
    QrcodeVue
  },
  data: () => ({
    masterPassword: "",
    passwords: [],
    isMobile: false,
    isDesktop: false,
    isMiniNav: true,
    isDrawerActive: false,
    expandOnHover:false,

  }),
  mounted() {
    if (this.getDeviceTypeIsMobile()) {
      this.isMobile = true
      this.isDesktop = false
    } else {
      this.isMobile = false
      this.isDesktop = true
    }
    if(this.isMobile){
      this.expandOnHover=false;
      this.isMiniNav=false;
      this.isDrawerActive=false
    }
    if(this.isDesktop){
      this.expandOnHover=true
      this.isMiniNav=true
    }


  },

  methods: {
    ...mapMutations({
      setMasterPassword: "setMasterPassword",
      decryptStorage: "decrypt",
    }),
    ...mapGetters({
      getDeviceTypeIsMobile: "getDeviceTypeIsMobile"
    }),
    onClickNavIcon() {
      console.log("nav.ico")
      this.isDrawerActive = true
    },
    decrypt() {
      this.setMasterPassword(this.masterPassword)
      this.decryptStorage()
    },

  },
  computed: {
    ...mapGetters({
      getIsDecrypted: "getIsDecrypted",
    }),
    webHash() {
      console.log('impo')
      let data = localStorage.getItem('Passlist');
      return (`${location.protocol}//${location.host}/#/?data=${data}`)
    },
    fieldType() {
      if (this.getIsDecrypted) {
        return "password"
      } else {
        return "text"
      }
    },



  }
}


</script>

<style scoped lang="scss">
.header-component {

}
</style>
