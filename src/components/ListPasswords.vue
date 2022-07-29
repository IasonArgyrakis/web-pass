<template lang="html">

  <section class="src-components-list-passwords">
    <v-container>
      <v-row>
        <v-col cols="12 no-gutters">


            <div v-if="getDataStatus==='decrypted'">
              <div v-show="!hasNoPasswords" v-for="password in getPasswordList" v-bind:key="password.uid">
                <v-card :disabled="!getIsDecrypted" elevation="6" class="mx-1 my-3 pa-2 ">
                  <div class="password-detail pa-1"
                       v-show="isNotKey('uid',keyName)"
                       v-for="(keyValue,keyName) in password" :key="keyName">
                    <div class="d-flex align-content-center">
                      <p class="col-3  pt-2 ma-0 px-0  text-end text--secondary text-capitalize">{{ keyName }}</p>
                      <p :class="['col-7  pt-2 ma-0 sensitive ml-1 mr-auto',{'blured-text':isNotKey(['email','name'],keyName)}]"
                         @click="toClipboard(keyValue)">
                        {{ keyValue }}</p>
                      <v-icon class="ml-2" medium
                              @click="toClipboard(keyValue)">
                        mdi-content-copy
                      </v-icon>
                    </div>
                  </div>
                </v-card>
              </div>
              <v-card v-show="hasNoPasswords" color="amber  lighten-3 ">
                <v-card-title class="text--white">No Passwords</v-card-title>
              </v-card>
            </div>
            <div v-else-if="getDataStatus==='encrypted'">
              <v-card dark color="red">
                <v-card-title class="text--white">You Need to Decrypt First</v-card-title>
                <v-card-subtitle>You can reset your storage from the <v-btn  dark outlined color="gray" small text to="/settings">settings page</v-btn></v-card-subtitle>
              </v-card>
            </div>
          <div v-else-if="getDataStatus==='no-data'">
            <v-card dark color="blue darken-4">
              <v-card-title class="text--white">No data found</v-card-title>
              <v-card-subtitle>You can start by setting a master Password Above</v-card-subtitle>
            </v-card>
          </div>


        </v-col>

      </v-row>

    </v-container>
  </section>

</template>

<script lang="js">
import {mapGetters} from "vuex"

export default {
  name: 'src-components-list-passwords',
  props: [],
  data() {
    return {
      isDecrypted: false
    }
  },
  methods: {

    isNotKey(UnwantedKey, comparedValue) {
      if (Array.isArray(UnwantedKey)) {
        let toBool = UnwantedKey.map(item =>
            item === comparedValue
        )
        return !toBool.includes(true)
      } else
        return UnwantedKey !== comparedValue;
    },
    toClipboard(value) {
      navigator.clipboard.writeText(value);
    },


  },
  computed: {
    hasNoPasswords() {
      return this.getPasswordList.length === 0
    },
    ...mapGetters({
      getPasswordList: "getPasswordList",
      getIsDecrypted: "getIsDecrypted",
      getPreviousDataExistence:"getPreviousDataExistence",
      getDataStatus:"getDataStatus"
    }),

  },
  watch: {



  }
}


</script>

<style scoped lang="scss">
.src-components-list-passwords {
  & .password-detail:not(:last-child) {
    border-bottom: 1px solid rgba(115, 110, 110, 0.4);
  }

  .password-detail {


  }

}

.blured-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: transparent;
  text-shadow: 0px 0px 18px black;
  transition: text-shadow 0.1s linear;

  &:hover {
    text-shadow: 0px 0px 0px black;
  }
}

</style>