/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import * as CryptoJS from 'crypto-js'




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
                let list = state.PasswordList;
                list.push(payload)
            }
        },
        savePasswordsList(state) {
            //var CryptoJS = require("crypto-js");
            if (state.isDecrypted) {
                console.log(state.PasswordList)

                // Encrypt
                var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(state.PasswordList), state.masterPassword).toString();
                localStorage.setItem("Passlist", ciphertext);
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
            let ciphertext
            if(localStorage.getItem("Passlist")!==null){
                console.log("old Data Found")
                ciphertext=localStorage.getItem("Passlist")
            }else {
                const empty = []
                const jsonString=JSON.stringify(empty)
                ciphertext=CryptoJS.AES.encrypt(jsonString, state.masterPassword).toString();
                console.log("starting Fresh",typeof jsonString,jsonString,ciphertext)
            }

            // Decrypt
            var bytes = CryptoJS.AES.decrypt(ciphertext, state.masterPassword);
            console.log("orignal dec",bytes.toString(CryptoJS.enc.Utf8));
            var originalText = bytes.toString(CryptoJS.enc.Utf8);
            console.log("orignal text",originalText); // 'my message'
            let JsonObj=JSON.parse(originalText)
            console.log(JsonObj.length)
            state.PasswordList = JsonObj
        }

    }


})
export default store