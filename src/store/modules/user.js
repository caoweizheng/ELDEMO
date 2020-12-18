export default {
  state: {
    userName: '',
    userInfo: {}
  },
  mutations: {
    setToken (state, { token }) {
      localStorage.setItem('BLOG_TOKEN', token)
    },
    setUserName (state, { name }) {
      state.userName = name
      localStorage.setItem('username', name)
      this.commit('updateUserInfo')
    },
    updateUserInfo (state) {
      // 根据用户名查询用户信息，并保存到 localStorage
      let username = localStorage.getItem('username')
      state.userInfo = {
        userName: username,
        nickName: username === 'lucy' ? '露西' : '丽丽'
      }
    },
    clearToken (state) {
      localStorage.setItem('BLOG_TOKEN', '')
    }
  }
}
