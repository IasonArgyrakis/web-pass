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
      <template v-slot:prepend>

        <v-tooltip v-if="security==='decrypted'" bottom>
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs"
                 v-on="on" class="d-flex align-center justify-center pa-2 mx-auto">
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="green" d="M12 1L3 5V11C3 16.5 6.8 21.7 12 23C17.2 21.7 21 16.5 21 11V5L12 1M16 15.8C16 16.4 15.4 17 14.7 17H9.2C8.6 17 8 16.4 8 15.7V12.2C8 11.6 8.6 11 9.2 11V8.5C9.2 7.1 10.6 6 12 6S14.8 7.1 14.8 8.5V9H13.5V8.5C13.5 7.7 12.8 7.2 12 7.2S10.5 7.7 10.5 8.5V11H14.8C15.4 11 16 11.6 16 12.3V15.8Z" />
              </svg>
            </div>
          </template>
          <span>Data has been Decrypted</span>
        </v-tooltip>



        <v-tooltip v-if="security==='encrypted'" bottom>
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs"
                 v-on="on" class="d-flex align-center justify-center pa-2 mx-auto">
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="red" d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.1 14.8,9.5V11C15.4,11 16,11.6 16,12.3V15.8C16,16.4 15.4,17 14.7,17H9.2C8.6,17 8,16.4 8,15.7V12.2C8,11.6 8.6,11 9.2,11V9.5C9.2,8.1 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.5V11H13.5V9.5C13.5,8.7 12.8,8.2 12,8.2Z" />
              </svg>
            </div>
          </template>
          <span>Encrypted Data was found enter your master password</span>
        </v-tooltip>

        <v-tooltip v-if="security==='no-data'" bottom>
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs"
                 v-on="on" class="d-flex align-center justify-center pa-2 mx-auto">
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="orange"
                      d="M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2M12 6.95C14.7 7.06 15.87 9.78 14.28 11.81C13.86 12.31 13.19 12.64 12.85 13.07C12.5 13.5 12.5 14 12.5 14.5H11C11 13.65 11 12.94 11.35 12.44C11.68 11.94 12.35 11.64 12.77 11.31C14 10.18 13.68 8.59 12 8.46C11.18 8.46 10.5 9.13 10.5 9.97H9C9 8.3 10.35 6.95 12 6.95M11 15.5H12.5V17H11V15.5Z"/>
              </svg>
            </div>
          </template>
          <span>No Data Was found</span>
        </v-tooltip>

      </template>
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
        <div v-if="getIsDecrypted" v-show="!isMiniNav" class="pa-2">
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
    QrcodeVue,
  },
  data: () => ({
    masterPassword: "",
    passwords: [],
    isMobile: false,
    isDesktop: false,
    isMiniNav: true,
    isDrawerActive: false,
    expandOnHover: false,

  }),
  mounted() {
    if (this.getDeviceTypeIsMobile()) {
      this.isMobile = true
      this.isDesktop = false
    } else {
      this.isMobile = false
      this.isDesktop = true
    }
    if (this.isMobile) {
      this.expandOnHover = false;
      this.isMiniNav = false;
      this.isDrawerActive = false
    }
    if (this.isDesktop) {
      this.expandOnHover = true
      this.isMiniNav = true
    }


  },

  methods: {
    ...mapMutations({
      setMasterPassword: "setMasterPassword",
      decryptStorage: "decrypt",
    }),
    ...mapGetters({
      getDeviceTypeIsMobile: "getDeviceTypeIsMobile",
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
      hasPreviousData: "getPreviousDataExistence",
    }),
    security() {
      let status = "no-data"
      if (this.hasPreviousData) {
        status = "encrypted"
      }
      if (this.getIsDecrypted) {
        status = "decrypted"
      }
      console.log(status)

      return status
    },
    webHash() {
      if (this.getIsDecrypted) {
        let data = localStorage.getItem('Passlist');
        return (`${location.protocol}//${location.host}/#/?data=${data}`)
      }
      return ""
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
