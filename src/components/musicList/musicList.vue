<template>
  <div class="main">
    <div class="top">
      <router-link to="/playlist">
        <div class="micon"><i class="icon-arrow-left2"></i></div>
      </router-link>
      <div class="intro">
        <li>歌单</li>
      </div>
      <div class="menuImg"><img src=""/></div>
    </div>
    <!--=====================-->
    <div class="listBody"  ref="omusicBody">
      <div class="musicBody">
        <div class="musicHeader">
          <img class="background" :src="result.creator.backgroundUrl"/>
          <div class="headerLeft">
            <img :src="result.creator.avatarUrl"/>
          </div>
          <div class="headerRight">
            <p>{{ result.name }}</p>
            <div class="artName">
              <div class="cover"><img :src="result.coverImgUrl"/></div>
              <div class="nickname">{{ result.creator.nickname }}&nbsp;></div>
            </div>
          </div>
        </div>
      <!--================================-->
        <div class="infoBar">
          <ul>
            <span>标签:</span>
            <li v-for="(item,index) in result.tags" :key="index">{{ item }}</li>
            <p v-show="result.description != ''" ref="op">简介:&nbsp;{{ result.description }}</p>
            <div style="width:100%;padding-left:95%" v-show="result.description != ''" @click="show"><b v-if="!flag" ref="down">↓</b><b v-if="flag" ref="up">↑</b></div>
          </ul>
        </div>
        <div class="songBody">
          <ul>
            <p style="background: rgb(238,239,240);padding: 5px 0">歌曲列表</p>
            <li class="song" v-for="(item,index) in result.tracks" :key='index' @click="play(item)">
              <div class="serialNum">{{index + 1}}</div>
              <div class="songName">
                <p style="padding: 8px 0px;color: #000">{{ item.name }}</p>
                <p style="font-size: 14px;padding-bottom: 7px">{{ item.artists[0].name }}&nbsp;-&nbsp;{{item.album.name}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import BScroll from 'better-scroll'
import Vue from 'vue'
export default {
  data () {
    return {
      result: {},
      flag: false,
      songName: '',
      artistName: '',
      picUrl: ''
    }
  },
  created () {
    this.$http.get('/api/list' + this.$route.params.indexp)
      .then((response) => {
        this.result = response.body.data
        this.$nextTick(() => {
          if (!this.omusicBodyScroll) {
            this.omusicBodyScroll = new BScroll(this.$refs.omusicBody, {click: true})
            // console.log(this.omusicBodyScroll)
          } else {
            this.omusicBodyScroll.refresh()
          }
        })
      })
  },
  methods: {
    show () {
      if (!this.flag) {
        this.$refs.op.style.display = 'block'
        this.flag = true
      } else {
        this.$refs.op.style.display = '-webkit-box'
        this.flag = false
      }
    },
    play (item) {
      this.$http.get('https://api.imjad.cn/cloudmusic/?id=' + item.id)
        .then((response) => {
          var url = response.body.data[0].url
          // console.log(item)
          Vue.set(item, 'src', url)
          this.$store.commit('PLAY', item)
        })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.main
  overflow: hidden
  width: 100%
  height: 100%
  position: absolute
  top: 0
  /*z-index: 15*/
  color: rgb(104,104,104)
  background: rgb(248,248,248)
  .top
    width: 100%
    height: 48px
    position: relative
    z-index: 5
    background: rgb(177,168,163)
    .micon
      flex: 1
      height: 100%
      .icon-arrow-left2
        line-height: 48px
        color: #fff
        font-size: 24px
        margin-left: 7px
    .intro
      flex: 5
      height: 100%
      padding-left: 8px
      color: #fff
      li
        height: 100%
        font-size: 24px
        /*text-align: center*/
        line-height: 48px
    .menuImg
      flex: 2
      background: #000
      img
        width: 100%
        height: 100%
  .listBody
    position: relative
    width: 100%
    height: 90%
    .musicBody
      width: 100%
      .musicHeader
        display: flex
        position: relative
        height: 130px
        width: 100%
        background: rgba(177,168,163,0.5)
        .background
          width: 100%
          height: 100%
          position: absolute
          filter: blur(5px)
          z-index: -1
        .headerLeft
          flex: 2
          margin: 5px 9px
          width: 100%
          height: 100%
          img
            width: 90%
            height: 90%
        .headerRight
          flex: 3
          height: 130px
          padding-left: 20px
          p
            margin-right: 10px
            color: #fff
            font-size: 20px
          .artName
            width: 100%
            margin-top: 25px
            .cover
              width: 40px
              height: 40px
              border-radius: 50%
              overflow: hidden
              display: inline-block
              img
                width: 100%
                height: 100%
            .nickname
              height: 48px
              vertical-align: top
              margin-left: 10px
              font-size: 16px
              line-height: 48px
              display: inline-block
              color: rgb(247,248,255)
      .infoBar
        width: 100%
        padding: 8px 9px
        background: #fff
        li
          display: inline-block
          border: 1px solid rgb(238,238,238)
          border-radius: 14px
          font-size: 12px
          padding: 4px
          margin: 10px
        p
          white-space: wrap
          display: -webkit-box
          -webkit-box-orient: vertical
          -webkit-line-clamp: 3
          overflow: hidden
          line-height: 20px
          padding-right: 10px
      .songBody
        width: 100%
        background: rgb(248,248,248)
        .song
          display: flex
          width: 100%
          .serialNum
            flex: 1
            font-size: 18px
            text-align: center
            line-height: 50px
          .songName
            flex: 6
            border-bottom: 1px solid rgba(236,236,236,0.9)
</style>
