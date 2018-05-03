<template>
  <div>
    <div class="top">
      <div class="informationBar" @click="poping">
        <i class="icon-menu"></i>
      </div>
    <!--================-->
      <div class="navOptions">
          <div class="mv"><i class="icon-play"></i></div>
          <div class="music"><i class="icon-music"></i></div>
          <div class="user"><i class="icon-users"></i></div>
      </div>
        <router-link to="/search">
          <div class="search" @click="searchSong" ref="search">
            <i class="icon-search"></i>
          </div>
        </router-link>
    </div>
    <!--===================-->
    <div class="information" v-show="isPop">
        <div class="option" >
          <div class="head"><img src="./optionBack.png"/></div>
          <div class="oul"  ref="oulS">
            <ul>
              <div class="optionsFont"><img src="./optionsFont.png"/></div>
              <li class="options" v-for="(item,index) in informationArr" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="footer"><img src="./footImg.png"/></div>
        </div>
        <div class="blank" @click="disappear">{{getInfo.songName}}</div>
      </div>
      <playpage v-show = '!isPop'></playpage>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import playPage from '@/components/playPage/playPage.vue'
export default {
  data () {
    return {
      informationArr:
      [
        '我的消息',
        'VIP会员',
        '商场',
        '在线听歌免流量',
        '我的好友',
        '附近的人',
        '个性换肤',
        '听歌识曲',
        '定时停止播放',
        '扫一扫',
        '音乐闹钟',
        '驾驶模式',
        '音乐云盘',
        '优惠券'
      ],
      isPop: false
    }
  },
  created () {
  },
  methods: {
    poping () {
      this.isPop = true
      this.$nextTick(() => {
        if (!this.oulScroll) {
          this.oulScroll = new BScroll(this.$refs.oulS, {click: true})
          console.log(this.oulScroll)
        } else {
          this.oulScroll.refresh()
        }
      })
    },
    disappear () {
      this.isPop = false
    },
    searchSong () {
      let search = this.$refs.search
      search.addEventListener('touchstart', () => {
        search.style.opacity = 0.7
        search.style.border = '1px ' + 'solid ' + 'gray'
      })
      search.addEventListener('touchend', () => {
        search.style.opacity = 1
        search.style.border = ''
      })
    }
  },
  computed: {
    getInfo () {
      return this.$store.getters.getInfo
    }
  },
  components: {
    playpage: playPage
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.top
  width: 100%
  height: 54px
  position: relative
  overflow: hidden
  background: #d33a31
  display: flex
  .informationBar,.navOptions,.search
    text-align: center
    height: 100%
    float: left
    flex: 1
    .icon-menu
      font-size: 24px
      color: #fff
      margin-left: 0 auto
      line-height: 54px
  .navOptions
    flex: 3
    display: flex
    /*width: 231px*/
    margin 0 20px
    .mv,.music,.user
      flex: 1
      line-height: 54px
      font-size: 24px
      vertical-align: middle
      color: #fff
      margin-left: 0px
  .search
    width: 50px
    height: 52px
    opacity: 1
    /*border: 1px solid gray*/
    /*background: blue*/
    /*&.light-enter-active,&.light-leave-active
      transition: all 0.5s linear
    &.light-enter,&.light-leave-active
      opacity: 0.5*/
    .icon-search
      line-height: 54px
      font-size: 24px
      color: #fff
.information
  position: absolute
  overflow: hidden
  z-index: 5
  top: 0
  left: 0
  width: 100%
  height: 100%
  .option
    position: relative
    background: #fff
    float: left
    width: 86%
    height: 100%
    .head
      position: absolute
      width: 100%
      height: 34%
      z-index: 10
      img
        width: 100%
        height: 100%
    .oul
      position: relative
      top: 34%
      height: 62%
      .optionsFont
        position: absolute
        left: 0
        width: 34px
        height: 560px
        img
          width: 100%
          height: 100%
      .options
        list-style: none
        width: auto
        height: 40px
        margin-left: 34px
        font-size: 14px
        line-height: 40px
        background: #fff
    .footer
      position: fixed
      top: 94.5%
      left: -7px
      width: 86%
      height: 42px
      z-index: 5
      img
        width: 102%
        height: 100%
  .blank
    position: absolute
    right: 0
    top :0
    width: 14%
    height: 100%
    background: rgba(0,0,0,0.3)
</style>
