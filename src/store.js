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
                // Encrypt
                var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(state.PasswordList), state.masterPassword).toString();
                localStorage.setItem("Passlist", ciphertext);
                console.log("Encrypted Data Saved")
            } else {
                window.alert("You MUST set a master password")
            }
        },
        setMasterPassword(state, payload) {
            payload = payload.toString()
            if (payload !== null || payload !== "") {
                state.masterPassword = payload
            } else {
                window.alert("Your master password causes an error")
            }
        },
        loadPasswordsListFromStorage(state) {
            let ciphertext
            if(localStorage.getItem("Passlist")!==null){
                console.log("old Data Found")
                ciphertext=localStorage.getItem("Passlist")
            }else{
                console.log("no data Found")
            }

            // // Decrypt
            // var bytes = CryptoJS.AES.decrypt(ciphertext, state.masterPassword);
            // var originalText = bytes.toString(CryptoJS.enc.Utf8);
            // let JsonObj=JSON.parse(originalText)
            // state.PasswordList = JsonObj
        },
        decrypt(state){


            let ciphertext
            if(localStorage.getItem("Passlist")==null){
                const empty = []
                const jsonString=JSON.stringify(empty)
                ciphertext=CryptoJS.AES.encrypt(jsonString, state.masterPassword).toString();
                console.log("starting Fresh",typeof jsonString,jsonString,ciphertext)
                localStorage.setItem("Passlist", ciphertext);
            }
            ciphertext=localStorage.getItem("Passlist")


            try {
                //try_statements
                // Decrypt
                var bytes = CryptoJS.AES.decrypt(ciphertext, state.masterPassword);
                var originalText = bytes.toString(CryptoJS.enc.Utf8);
                let JsonObj=JSON.parse(originalText)
                state.PasswordList = JsonObj
                state.isDecrypted =true
            } catch (error) {
                console.error(error.message)
                   window.alert("incorrect Master Pass re enter");
                   window.location.reload()
            }



        }

    }


})
export default store