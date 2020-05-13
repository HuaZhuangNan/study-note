import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 1. State 主要放数据
const state={
  count: 0,
}
// 2. Mutations 主要放方法(主要用于改变stste里面的数据)
const mutations={
  incCount(state,n){ // 让数据加一
    state.count+=n;
  }
}
// 3. Getter类似计算属性
//改变state里面的count数据的时候会触发genters里面的方法
const getters={
  // state 改变就会触发
  componentCount: (state)=>{
    return state.count*2
  }
}

// 4. Action 类似于Mutations
// 可以包含任何异步操作
const actions={
  incMutationsCount({commit}) {
    commit('incCount',10)
  }
}


// 实例化
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
