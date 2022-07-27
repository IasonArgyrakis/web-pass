<template lang="html">

  <section class="import-component">
    <v-container>
      <v-row>
        <v-col cols="12" xxl="3"
        sm="12">
          <div class="mx-2" >


          </div>

        </v-col>
        <v-col xxl="9"
               sm="12">
          <h2>stuff</h2>
          <v-text-field  :value="webSync">

          </v-text-field>

        </v-col>
      </v-row>
    </v-container>
  </section>

</template>

<script lang="js">

export default {
  name: 'import-component',
  props: [],
  components:{

  },

  data() {
    return {

      qr:{

      color:{ dark: '#000000ff', light: '#ffffffff' },
      type:'image/png',
      quality:	0.92
    }}
  },
  methods: {


  },
  computed: {
    webHash(){
      console.log('impo')
      let data= localStorage.getItem('Passlist');
      return (`${location.protocol}//${location.host}/#/?data=${data}`)
    },
    webSync(){
      return this.$route.query.data
    }

  }
}


</script>

<style scoped lang="scss">
.import-component {

}
</style>
