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
        },
        getDataHash(){
            return chrome.storage.sync.get(['Passlist']).then().Passlist;

        },
    },
    mutations: {

        savePassword(state, payload) {
            if (state.isDecrypted) {
                let list = state.PasswordList;
                list.push(payload)
            }
        },
        savePasswordsList(state) {

            if (state.isDecrypted) {
                // Encrypt
                var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(state.PasswordList), state.masterPassword).toString();
                chrome.storage.sync.set({Passlist: ciphertext}, function() {
                    console.log("Encrypted Data Saved")
                });


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

        CheckForPasswordsListFromStorage() {
            chrome.storage.sync.get(['Passlist'], function(result) {
                if(result.Passlist!==undefined){
                    console.log("Chrome Data Found ")
                }
                else{
                    console.log("No data found")
                }
            });

        },
        decrypt(state){
            chrome.storage.sync.get(['Passlist'], function(result) {
                let ciphertext


                if(result.Passlist==undefined){


                    const empty = []
                    const jsonString=JSON.stringify(empty)
                    ciphertext=CryptoJS.AES.encrypt(jsonString, state.masterPassword).toString();
                    chrome.storage.sync.set({Passlist: ciphertext}, function() {
                        console.log("Started Fresh",ciphertext)
                    });

                }else{

                    try {
                        //try_statements
                        // Decrypt
                        var bytes = CryptoJS.AES.decrypt(result.Passlist, state.masterPassword);
                        var originalText = bytes.toString(CryptoJS.enc.Utf8);
                        let JsonObj=JSON.parse(originalText)
                        state.PasswordList = JsonObj
                        state.isDecrypted =true
                    } catch (error) {
                        console.error(error.message)
                        window.alert("incorrect Master Pass re-enter");
                        window.location.reload()
                    }

                }
            });

        },


    }


})
export default store