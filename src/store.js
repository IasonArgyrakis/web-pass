import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// Create a new store instance.
const store = new Vuex.Store({
    state () {
        return {
            count: 0
        }
    },
    getters:{
        doneTodos (state) {
            return state.count
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})
export default store