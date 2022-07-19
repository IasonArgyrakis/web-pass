<template lang="html">

  <section class="src-components-list-passwords">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div v-for="password in passwords" v-bind:key="password.name">
            <v-card class="my-5 p-3" outlined>
              <v-card-title>{{password.name}}</v-card-title>
              <v-text-field outlined></v-text-field>
            </v-card>
          </div>

        </v-col>

      </v-row>

    </v-container>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-list-passwords',
    props: [],
    mounted () {
      this.smth()

    },
    data () {
      return {
        passwords:[
          {name:"smth",url:"someurl",password:"somepass"},
          {name:"smth2",url:"someurl",password:"somepass"},
          {name:"smth3",url:"someurl",password:"somepass"},
          {name:"smth4",url:"someurl",password:"somepass"},
          {name:"smth5",url:"someurl",password:"somepass"}

        ]

      }
    },
    methods: {

      smth(){
        console.log(this.$store.getters.doneTodos)
      }

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .src-components-list-passwords {

  }
</style>
