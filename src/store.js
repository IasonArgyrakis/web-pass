import Vue from 'vue'
import Vuex from 'vuex'
import CryptoJs from "crypto-js";

Vue.use(Vuex)
// Create a new store instance.
const store = new Vuex.Store({
    state () {
        return {
            masterPassword:"",
            PasswordList: []
        }
    },
    getters:{
        getPasswordList (state) {
            return state.PasswordList
        }
    },
    mutations: {
        savePassword (state,payload) {
            let list=state.PasswordList
                list.push(payload)
        },
        setMasterPassword(state,payload){
            state.masterPassword=payload
        },
        savePasswordsList(state){
              CryptoJs.AES.encrypt(state.PasswordList, state.masterPassword).toString()

        }

    }
})
export default store