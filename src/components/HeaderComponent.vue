<template>
  <fragment>
    <v-app-bar app color="primary" class="mb-3">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

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
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-list>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-title
              ><v-btn text to="/">
                <v-icon>mdi-view-list</v-icon>
                Passwords</v-btn
              >
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><v-btn text to="/new-password">
                <v-icon>mdi-plus</v-icon>
                New Password</v-btn
              >
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><v-btn text to="/sync-passwords">
                <v-icon>mdi-autorenew</v-icon>
                Sync Password</v-btn
              >
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </fragment>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "HeaderComponent",
  data: () => ({
    drawer: false,
    masterPassword: "",
  }),
  methods: {
    ...mapMutations({
      setMasterPassword: "setMasterPassword",
      loadPasswordsListFromStorage: "loadPasswordsListFromStorage",
      decryptStorage: "decrypt",
    }),
    decrypt() {
      this.setMasterPassword(this.masterPassword);
      this.decryptStorage();
    },
  },
  computed: {
    ...mapGetters({
      getIsDecrypted: "getIsDecrypted",
    }),
    fieldType() {
      if (this.getIsDecrypted) {
        return "password";
      } else {
        return "text";
      }
    },
  },
};
</script>

<style></style>
