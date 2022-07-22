/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
// Create a new store instance.
//@toDo save raw list on new save action at chrome storage
const store = new Vuex.Store({
    state() {
        return {
            isDecrypted: false,
            masterPassword: "",
            PasswordList: [],
        }
    },
    getters: {
        getPasswordList(state) {
            return state.PasswordList
        },
        getIsDecrypted(state) {
            return state.isDecrypted;
        }
    },
    mutations: {

        savePassword(state, payload) {
            if (state.isDecrypted) {
                let list=state.PasswordList;
                list.push(payload)
            }
        },
        savePasswordsList(state) {
            //var CryptoJS = require("crypto-js");
            if (state.isDecrypted) {
                console.log(state.PasswordList)

                localStorage.setItem("Passlist", JSON.stringify(state.PasswordList));

                console.log("Encrypted Data Saved")
            } else {
                window.alert("You MUST set a master password")
            }
        },
        setMasterPassword(state, payload) {
            console.log("run")
            payload = payload.toString()
            if (payload !== null || payload !== "") {
                state.masterPassword = payload
                state.isDecrypted = true
            } else {
                window.alert("Your master password causes an error")
            }
        },
        loadPasswordsListFromStorage(state) {
                state.PasswordList=JSON.parse(localStorage.getItem("Passlist"))||[]
        }

    }


})
export default store