<template>
  <v-app>
    <v-app-bar
        app
        color="primary"

        class="mb-3"
    >
      <v-toolbar-title class="white--text" >WebPass</v-toolbar-title>
      <v-btn plain to="/"> <v-icon color="orange darken-2" class="ml-2 ">mdi-lock</v-icon></v-btn>
      <v-text-field
          hide-details
          placeholder="Master"
          filled
          rounded
          dense
          dark
          single-line
          class="shrink mx-4"
          v-model="masterPassword"
          @change="setMasterPassword()"
      >
      </v-text-field>
      <v-spacer></v-spacer>
      <v-btn color="" to="/new-password">New Password</v-btn>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    masterPassword:""
  }),
  methods:{
    setMasterPassword(){
      console.log(this.masterPassword)

    }
  }
};
</script>
