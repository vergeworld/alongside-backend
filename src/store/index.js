import Vue from 'vue'
import Vuex from 'vuex'
import { getStorage, setStorage } from '@/unit/storage'
import { TOKEN_KEY } from '@/config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: getStorage(TOKEN_KEY)
  },
  getters: {
  },
  mutations: {
    setUserInfo(state, param) {
      state.userInfo = param
      setStorage(TOKEN_KEY, window.JSON.stringify(param))
    }
  },
  actions: {
  },
  modules: {
  }
})
