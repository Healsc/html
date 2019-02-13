import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:100
  },
  mutations: {
    add(state,num){
      state.count+=num
    },
    reduce(state){
      state.count--
    }
  },
  actions: {
    addAction({commit}){
      commit("add",20)
    }
  },
  getters:{
    count1(state){
      return state.count+100
    }
  }
})
