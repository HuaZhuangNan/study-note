<template>
  <div id="home">
    store数据:<p v-text="count"></p>
    <p v-text="componentCount"></p>
    <button @click="incCount">触发Mutations</button>
    <button @click="incMutationsCount">触发Actions</button>
  </div>
</template>

<script>
// 1. 引入数据
import store from '@/vuex/store.js'

export default {
  name: 'home',
  data() {
    return {
      
    }
  },
  computed: {
    count(){  // 这里写才会更新数据
      return store.state.count
    },
    componentCount(){
      return store.getters.componentCount;
    }
  },
  // 2. 注册
  store,
  methods: {
    incCount(){
      // 触发方法
      store.commit('incCount',20);
    },
    incMutationsCount(){ 
      // 触发方法
      store.dispatch('incMutationsCount');
    }
    
  }
}
</script>
