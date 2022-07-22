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
                console.log("pre-push_payload",typeof payload,payload)
                console.log("pre-push_List",typeof state.PasswordList,state.PasswordList)
                let list=state.PasswordList;
                list.push(payload)
                console.log("after-push_List",typeof state.PasswordList,state.PasswordList)
                console.log(list);
                console.log("after-push",typeof state.PasswordList,state.PasswordList)
            } else {
                window.alert("You need to set the master pass before you can save")
            }
        },
        savePasswordsList(state) {
            //var CryptoJS = require("crypto-js");
            if (state.isDecrypted) {
                console.log(state.PasswordList)
                //let encrypted= JSON.stringify(state.PasswordList)
                // let encrypted = CryptoJS.AES.encrypt(JSON.stringify(state.PasswordList), state.masterPassword).toString();
                localStorage.setItem("Passlist", JSON.stringify(state.PasswordList));
                // chrome.storage.local.set({"Passlist": encrypted}, function () {
                //     console.log('Value is set to ' + encrypted);
                // });
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

                console.log("load-local",localStorage.getItem("Passlist"))
                state.PasswordList=JSON.parse(localStorage.getItem("Passlist"))||[]
                console.log("load", state.PasswordList)
                // chrome.storage.local.get(['Passlist'], function (result) {
                //     let ciphertext = result.Passlist
                //     if (ciphertext === undefined) {
                //         console.log("Cipher Undefinded")
                //         state.PasswordList = [];
                //     } else {
                //         console.log("ciphertext Loaded");
                //         console.log(ciphertext)
                //         state.PasswordList=ciphertext
                //         // const CryptoJS = require("crypto-js");
                //         // const cryptkey = CryptoJS.enc.Utf8.parse(state.masterPassword);
                //         // const crypted = CryptoJS.enc.Base64.parse(ciphertext);
                //         //
                //         // var decrypt = CryptoJS.AES.decrypt({ciphertext: crypted}, cryptkey, {
                //         //     iv: CryptoJS.enc.Hex.parse('00000000000000000000000000000000'),
                //         //     mode: CryptoJS.mode.CBC,
                //         //     padding: CryptoJS.pad.Pkcs7
                //         // });
                //         //
                //         // console.log(decrypt.toString());
                //         // state.PasswordList = JSON.parse(decrypt.toString(CryptoJS.enc.Utf8))
                //     }
                //
                // });




        }

    }


})
export default store