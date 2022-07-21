/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import CryptoJs from "crypto-js";
import CryptoJS from "crypto-js";


Vue.use(Vuex)
// Create a new store instance.
//@toDo save raw list on new save action at chrome storage
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
        }
    },
    mutations: {

        savePassword(state, payload) {
            if (state.isDecrypted) {
                let list = state.PasswordList
                list.push(payload)
            }else{window.alert("You need to set the master pass before you can save")}
        },
        setMasterPassword(state, payload) {
            payload=payload.toString()
            if(payload!==null||payload!==""){
            state.masterPassword = payload
            state.isDecrypted = true
            }else{
                window.alert("Your master password causes an error")
            }
        },
        savePasswordsList(state) {
            if (state.isDecrypted) {
                let encrypted=CryptoJs.AES.encrypt(JSON.stringify(state.PasswordList), state.masterPassword).toString();
                window.localStorage.setItem("Passlist",encrypted)
                console.log("Encrypted Data Saved")
            } else {
                window.alert("You MUST set a master password")
            }
        },
        loadPasswordsListFromStorage(state){
            var CryptoJS = require("crypto-js");
            if (state.isDecrypted) {


                chrome.storage.sync.get(['Passlist'], function(result) {
                    console.log('Value currently is ' , result.Passlist);
                    if(result.Passlist===undefined) {
                        console.log("No data found creating...")
                        let encrypted = CryptoJS.AES.encrypt(JSON.stringify(state.PasswordList), state.masterPassword).toString();
                        chrome.storage.sync.set({PassList: encrypted}, function () {
                            console.log("Creating On Chrome Storage")
                        });
                    }
                });


                chrome.storage.sync.get(['PassList'], function(result) {
                    console.log('Value currently is ' + result.PassList);
                    let ciphertext = result.PassList
                    console.log("ciphertext Loaded",state.masterPassword)
                    console.log(ciphertext,CryptoJs.enc.Utf8)

                    let bytes  = CryptoJS.AES.decrypt(ciphertext, state.masterPassword);
                    console.log(bytes)
                    state.PasswordList=JSON.parse(bytes.toString(CryptoJs.enc.Utf8))
                    console.log( state.PasswordList)
                });



            } else {
                window.alert("You MUST set a master password In order To decrypt")
            }


        }

    }


})
export default store