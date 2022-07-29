<template lang="html">

  <section class="settings-component">
    <v-container>
      <v-row>
        <v-col cols="12 no-gutters">
          <h1>settings-component Component</h1>
          <v-btn  @click="clear" class="white--text" color="red">CLEAR LOCAL</v-btn>
        </v-col>
      </v-row>
    </v-container>

  </section>

</template>

<script lang="js">

export default {
  name: 'settings-component',
  props: [],
  mounted() {

  },
  data() {
    return {}
  },
  methods: {
    clear(){
      localStorage.clear()
      this.$router.push({name:"home"})
      window.location.reload()
    }
  },
  computed: {}
}


</script>

<style scoped lang="scss">
.settings-component {

}
</style>
