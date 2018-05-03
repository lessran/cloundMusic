<template>
  <div class="playMain" ref="playMain">
    <div class="mainBody">
      <div class="playHeader">
        <div class="picon" @click="disappear"><i class="icon-arrow-left2"></i></div>
        <div class="playInfo">
          <p style="color: #fff;font-size: 18px;margin: 4px 0">{{ getInfo.songName }}</p>
          <p>{{ getInfo.artistName }}&nbsp;></p>
        </div>
        <div class="playShare">
          <i class="icon-arrow-left2"></i>
        </div>
      </div>
    <!--================-->
      <div class="playBody">
        <div class="pointer"><img src="./pointer.png"/></div>
        <div class="turntable">
          <div class="imgWrapper">
            <div class="centerImg"><img :src="getInfo.picUrl"/></div>
            <img src="./turntable.png"/>
          </div>
        </div>
        <div class="optionsMenu">
          <div class="oicon"><i class="icon-arrow-left2"></i></div>
          <div class="oicon"><i class="icon-arrow-left2"></i></div>
          <div class="oicon"><i class="icon-arrow-left2"></i></div>
          <div class="oicon"><i class="icon-arrow-left2"></i></div>
        </div>
      </div>
      <div class="playFooter">
      </div>
    </div>
    <!--=============-->
    <div class="footerWrapper" v-if="getInfo.songName != ''&&!flag">
      <aplayer class="musicFooter" :autoplay='true' :mutex='true' :music="{
        title: getInfo.songName,
        artist: getInfo.artistName,
        src: getInfo.src,
        pic: getInfo.picUrl,
        lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
      }">
     </aplayer>
     <div class="showPage"  @click="showPage" v-if='show'></div>
   </div>
  </div>
</template>

<script>
import Aplayer from 'vue-aplayer'
export default {
  data () {
    return {
      flag: false,
      show: true
    }
  },
  created () {
  },
  methods: {
    disappear () {
      this.flag = false
      this.$refs.playMain.style.height = 46 + 'px'
      this.$refs.playMain.style.top = 'auto'
      this.$refs.playMain.style.bottom = 0
      this.show = true
      this.reback()
    },
    showPage () {
      this.$refs.playMain.style.height = '100%'
      this.$refs.playMain.style.top = 0
      this.$refs.playMain.style.bottom = 'auto'
      this.show = false
      this.changeStyle()
    },
    changeStyle () {
      var aplayerBody = document.getElementsByClassName('aplayer-body')[0]
      var musicFooter = document.getElementsByClassName('musicFooter')[0]
      var aplayerPic = document.getElementsByClassName('aplayer-pic')[0]
      var aplayerMusic = document.getElementsByClassName('aplayer-music')[0]
      aplayerPic.style.backgroundImage = 'none'
      musicFooter.classList.add('new-aplayer-body')
      aplayerPic.classList.add('new-aplayer-pic')
      aplayerMusic.classList.add('new-aplayer-music')
    },
    reback () {
      var aplayerBody = document.getElementsByClassName('aplayer-body')[0]
      var musicFooter = document.getElementsByClassName('musicFooter')[0]
      var aplayerPic = document.getElementsByClassName('aplayer-pic')[0]
      var aplayerMusic = document.getElementsByClassName('aplayer-music')[0]
      musicFooter.classList.remove('new-aplayer-body')
      aplayerPic.className = 'aplayer-pic'
      aplayerMusic.className = 'aplayer-music'
    }
  },
  computed: {
    getInfo () {
      return this.$store.getters.getInfo
    }
  },
  components: {
    Aplayer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.playMain
  position: fixed
  width: 100%
  /*height: 46px*/
  bottom: 0
  /*height: 100%*/
  /*top: 0*/
  z-index: 30
  color: rgb(104,104,104)
  img
    width: 100%
    height: 100%
  .mainBody
    position: absolute
    width: 100%
    height: 100%
    top: 0
    background: rgb(55,57,58)
    .playHeader
      display: flex
      width: 100%
      height: 8%
      .picon,.playShare
        flex: 1
        color: #fff
        line-height: 53px
        text-align: center
      .playInfo
        flex: 5
        border-bottom: 1px solid rgb(72,72,72)
    .playBody
      width: 100%
      position: relative
      height: 80%
      .pointer
        position: absolute
        width: 40%
        height: 20%
        left: 50%
      .turntable
        width: 100%
        height: 60%
        position: absolute
        .imgWrapper
          position: absolute
          width: 76%
          margin: 12%
          height: 85%
          top: 13%
          .centerImg
            position: absolute
            width: 68%
            margin: 16%
            height: 69%
            border-radius: 50%
            overflow: hidden
            top: -2px
      .optionsMenu
        position: absolute
        bottom: 18%
        height:8%
        width: 100%
        display: flex
        .oicon
          flex: 1
          text-align: center
          line-height: 42.7px
          font-size: 22px
    .playFooter
      width: 100%
      height: 10%
      position: relative
      background: grey
  .footerWrapper,.musicFooter
    position: fixed
    width: 100%
    height: 66px
    right: 0
    bottom: 0
    .musicFooter
      margin: 0
    .showPage
      position: absolute
      width: 82%
      height: 50px
      top: 0
      right: 0
      /*background: grey*/
    .new-aplayer-body
      top: 75%
    .new-aplayer-pic
      background-color: none
      /*top: 66px*/
      /*margin: 0 auto*/
    .new-aplayer-music
      display: none
</style>
