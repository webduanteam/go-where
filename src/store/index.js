import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    city:"上海"
  },
  actions:{
    // 可以省去这一步直接在页面通过commit直接调用
    changecity (ctx,city) {
      // 用料理啊调用commit
    ctx.commit('changecity',city)
    }
  },
  mutations:{
    changecity(state,city){
state.city=city
    }
  }
})
