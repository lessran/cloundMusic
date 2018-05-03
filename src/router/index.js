import Vue from 'vue'
import Router from 'vue-router'
import search from '@/components/search/search.vue'
import header from '@/components/header/header.vue'
import playlist from '@/components/playlist/playlist.vue'
import mine from '@/components/mine/mine.vue'
import musicList from '@/components/musicList/musicList.vue'
import playPage from '@/components/playPage/playPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/playlist'
    },
    {
      path: '/header',
      component: header
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/playlist',
      component: playlist
    },
    {
      path: '/mine',
      component: mine
    },
    {
      path: '/musicList',
      name: 'musicList',
      component: musicList
    },
    {
      path: '/playPage',
      component: playPage
    }
  ]
})
