import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{},
    falg:0,
    count:0
  },
  mutations: {
    addcount (state) {
      console.log("addcount")
      state.count++
    },
    minuscount(state){
      state.count--
    }
  },
  actions: {
    changeUser(state,data){
      state.userInfo=data
    }
  }
})
