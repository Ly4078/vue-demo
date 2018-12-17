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
      console.log("addcount111:",state.count)
      state.count=1;
      console.log("addcount:",state.count)
    },
    minuscount(state){
      state.count++;
    },
    changeUser(state,data){
      state.userInfo=data;
      console.log(state.userInfo)
    }
  },
  actions: {
    
    
  }
})
