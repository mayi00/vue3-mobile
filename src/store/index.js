import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const getDefaultState = () => {
  return {
    // 用户信息
    userInfo: {
      id: '',
      name: '张三',
      sex: '男'
    },
  }
}

const state = getDefaultState()

const mutations = {
  // 修改用户信息，payload就是用户信息对象
  setUserInfo(state, payload) {
    state.userInfo = payload
  }
}

const actions = {

}

// vuex 本地持久化配置
const plugins = [
  // 默认存储在 localStorage
  createPersistedState({
    // 本地存储 key
    key: 'vue3-demo'
  })
]

// 创建一个 store 实例
const store = createStore({
  state,
  mutations,
  actions,
  plugins
})

export default store
