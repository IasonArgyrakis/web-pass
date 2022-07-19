import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// Create a new store instance.
const store = new Vuex.Store({
    state () {
        return {
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
        }
    }
})
export default store