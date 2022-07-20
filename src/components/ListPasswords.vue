<template lang="html">

  <section class="src-components-list-passwords">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div v-show="!isDecrypted">
            <v-card class="my-5 p-3 red " outlined>
              <v-card-title>You need to decrypt</v-card-title>

            </v-card>
          </div>
          <div v-show="hasNoPasswords&&isDecrypted">
            <v-card class="my-5 p-3 orange lighten-4" outlined>
              <v-card-title>No Passwords</v-card-title>

            </v-card>
          </div>
          <div v-show="!hasNoPasswords&&isDecrypted" v-for="password in passwords" v-bind:key="password.name">
            <v-card class="my-5 pa-3 blue-grey lighten-4" outlined>
              <p>{{ password.name }}</p>
              <div v-for="(keyValue,keyName) in password" :key="keyName" class=" py-1   ">
                <v-text-field
                    :label="keyName"
                    max-width="100px"
                    :value="keyValue"
                    v-model="password[keyName]"
                    class="px-2"
                    persistent-hint
                />

              </div>
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
  mounted() {
    this.UpdateListener();
    this.isDecrypted=this.getIsDecrypted()
    this.passwords = this.getPasswordList()




  },
  data() {
    return {
      passwords: [],
      isDecrypted:false
    }
  },
  methods: {
    ...mapGetters({
      getPasswordList: "getPasswordList",
      getIsDecrypted:"getIsDecrypted"
    }),
    UpdateListener(){
      this.$root.$on("masterPassUpdate",()=>{
        this.isDecrypted=this.getIsDecrypted()
      })
    }

  },
  computed: {

    hasNoPasswords(){
      return this.passwords.length===0
    },

  },
  watch:{
    getIsDecrypted:{
      deep:true,
    }
  }
}


</script>

<style scoped lang="scss">
.src-components-list-passwords {

}
</style>
