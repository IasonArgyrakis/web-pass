<template lang="html">

  <section class="src-components-new-password">
    <v-container>
      <v-row class="mx-5">
        <v-col cols="12  mt-1  br-2 rounded blue-grey lighten-3">

          <div v-for="(keyValue,keyName) in passwordObj" :key="keyName" class=" py-1   ">
            <v-text-field
                :label="keyName"
                max-width="100px"
                :value="keyValue"
                v-model="passwordObj[keyName]"
                class="px-2"
                persistent-hint
            />

          </div>

        </v-col>
        <v-col cols="12 blue-grey lighten-4 mt-2 rounded">
          <v-combobox auto-select-first dense
                      label="Press Enter to select highlighted Option" :multiple=false v-model="newKeyName"
                      :items="this.keyValues"></v-combobox>
          <v-btn color="secondary" @click="addField()">
            Add Field
            <v-icon
                right
                dark
            >
              mdi-plus
            </v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <v-btn color="primary" @click="savePassObj">
            Save Password Item
            <v-icon
                right
                dark
            >
              mdi-content-save
            </v-icon>
          </v-btn>

        </v-col>


      </v-row>

    </v-container>
  </section>

</template>

<script lang="js">
import CryptoJs from "crypto-js"
import {mapMutations} from "vuex"

export default {
  name: 'src-components-new-password',
  props: [],
  mounted() {
    this.getKey()
    this.makeBasicPassword()
  },
  data() {
    return {
      newKeyName: undefined,
      keyValues: ["Email", "Password", "Number", "Text"],
      key: "",
      passwordObj: {},
      hashedPassword: ""


    }
  },
  methods: {
    ...mapMutations({
      savePassword: "savePassword",
      savePasswordList:"savePasswordsList"
    }),
    getKey() {
      this.key = "pass123"
    },
    makeBasicPassword(){
      Object.assign(this.passwordObj, {name: ""})
      Object.assign(this.passwordObj, {url: ""})
      Object.assign(this.passwordObj, {email: ""})
      Object.assign(this.passwordObj, {password: ""})
      this.$forceUpdate();
    },


    generateHashValue(password) {

      let passHash = CryptoJs.AES.encrypt(password, this.key).toString()
      return passHash

    },

    savePassObj() {
      let passwordAsObj = JSON.parse(JSON.stringify(this.passwordObj))
      let passwordObjAsArray=Object.entries(passwordAsObj)
      let notEmptyData=passwordObjAsArray.filter((item)=>{
        //return only what is not empty
        return item[1]!==""
      })
      let utcTimestamp = new Date().getTime();
      let ready=Object.assign({"uid":utcTimestamp},Object.fromEntries(notEmptyData))
      this.savePassword(ready)
      this.savePasswordList();
      //this.$router.push("home")



    },
    addField() {
      let keyName = this.newKeyName.toLowerCase()
      Object.assign(this.passwordObj, {[keyName]: ""})
      this.$forceUpdate();
    }
  },
  watch:{
    passwordObj:{
      deep:true,
    }
  }
}


</script>

<style scoped lang="scss">
.src-components-new-password {

}
</style>
