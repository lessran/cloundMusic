import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  playInfo: {
    songName: '',
    artistName: 'artistName',
    picUrl: 'picUrl',
    src: '',
    id: ''
  }
}
const mutations = {
  PLAY (state, item) {
    state.playInfo.songName = item.name
    state.playInfo.artistName = item.artists[0].name
    state.playInfo.picUrl = item.album.picUrl
    state.playInfo.src = item.src
    state.playInfo.id = item.id
  }
}
const actions = {
}
const getters = {
  getInfo (state) {
    return state.playInfo
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
