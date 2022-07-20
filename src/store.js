import Vue from 'vue'
import Vuex from 'vuex'
import CryptoJs from "crypto-js";

Vue.use(Vuex)
// Create a new store instance.
const store = new Vuex.Store({
    state() {
        return {
            isDecrypted: false,
            masterPassword: "",
            PasswordList: []
        }
    },
    getters: {
        getPasswordList(state) {
            return state.PasswordList
        },
        getIsDecrypted(state) {
            return state.isDecrypted;
        },
    },
    mutations: {

        savePassword(state, payload) {
            if (state.isDecrypted) {
                let list = state.PasswordList
                list.push(payload)
            }else{window.alert("You need to set the master pass before you can save")}
        },
        setMasterPassword(state, payload) {
            state.masterPassword = payload
            state.isDecrypted = true
        },
        savePasswordsList(state) {
            if (state.isDecrypted) {
                window.localStorage.setItem("Passlist", CryptoJs.AES.encrypt(state.PasswordList, state.masterPassword).toString())
            } else {
                window.alert("You have Not set a master password")
            }
        }

    }


})
export default store