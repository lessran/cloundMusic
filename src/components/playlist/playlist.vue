<template>
  <div class="playList" ref="olist">
    <div class="listWrapper">
      <div class="loopMain">
        <div class="recommed">
          <Shuffling-figure :loop = 'loop' :autoPlay='autoPlay'>
            <div class="slider-item"><img src="./img1.png"/></div>
            <div class="slider-item"><img src="./img2.png"/></div>
            <div class="slider-item"><img src="./img3.png"/></div>
            <div class="slider-item"><img src="./img4.png"/></div>
            <div class="slider-item"><img src="./img6.png"/></div>
            <div class="slider-item"><img src="./img5.png"/></div>
          </Shuffling-figure>
        </div>
      <!--====================-->
        <div class="navBody">
          <ul>
            <li><div class="sicon"></div><p>私人FM</p></li>
            <li><div class="sicon"></div><p>每日推荐</p></li>
            <li><div class="sicon"></div><p>歌单</p></li>
            <li><div class="sicon"></div><p>排行榜</p></li>
          </ul>
        </div>
      </div>
    <!--====================-->
      <ul class="topSong">
        <p style="margin: 10px 0">推荐歌单&nbsp;></p>
          <li class="topSection clearfix" v-for="(item,index) in playList" :key='index'>
            <router-link :to="{name: 'musicList', params: {indexp: item.index}}"  >
              <img :src="item.imgUrl"/>
              <p style="fontSize: 12px;padding: 0 15px">{{ item.info }}</p>
            </router-link>
          </li>
      </ul>
      <ul class="exclusiveDelivery">
        <p style="margin: 10px 0">独家放送&nbsp;></p>
        <li class="exclusiveSection" style="margin-right: 2px"><img src="http://p1.music.126.net/7wr1SP13cazrtW0NBa_-AQ==/109951163160409895.jpg"/><p>2018古风新歌 恰似故人归 续更</p></li>
        <li class="exclusiveSection"><img src="http://p1.music.126.net/JVvA_M_TRD4u1DvWNdFp0g==/109951163240014811.jpg"/><p> 抓住春天的尾巴 来一场24小时的摇滚聚会</p></li>
        <li class="exclusiveSection clearfix"><img src="http://p1.music.126.net/EWC8bPR8WW9KvhaftdmsXQ==/3397490930543093.jpg"/></li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import ShufflingFigure from '@/components/ShufflingFigure/ShufflingFigure'
export default {
  name: 'recommend',
  components: {
    ShufflingFigure
  },
  data () {
    return {
      playList:
      [{
        info: '耳朵喜欢你',
        index: 1,
        imgUrl: 'http://p1.music.126.net/mgsngyqV7mnUv90bllqXIA==/19093019416553456.jpg'
      },
      {
        info: '婚礼上惊艳全场的歌曲',
        index: 2,
        imgUrl: 'http://p1.music.126.net/Ql3YeXByNpYyYgyPaAUIzQ==/109951163176018746.jpg'
      },
      {
        info: '说不出名字的经典英文歌',
        index: 3,
        imgUrl: 'http://p1.music.126.net/OprWzFC8IICUArdhi76y_A==/18503681185570221.jpg'
      },
      {
        info: '想在春天和你一起做的事',
        index: 4,
        imgUrl: 'http://p1.music.126.net/5iJ5D2IpFwZv9IHGdwxz5A==/109951162891832409.jpg'
      },
      {
        info: '忽忆堂前事 难舍于花间',
        index: 5,
        imgUrl: 'http://p1.music.126.net/NSudkuEc6aGb2MXqoiiuIg==/109951163151903159.jpg'
      },
      {
        info: '我没有很想你 只是经常梦见你',
        index: 6,
        imgUrl: 'http://p1.music.126.net/pKXVcaSummU_ye7KaSDD8w==/109951163179223308.jpg'
      }],
      loop: true,
      autoPlay: true
    }
  },
  created () {
    this.$nextTick(() => {
      if (!this.olistScroll) {
        this.olistScroll = new BScroll(this.$refs.olist, {click: true})
        // console.log(this.olistScroll)
      } else {
        this.olistScroll.refresh()
      }
    })
  },
  methods: {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.playList
  width: 100%
  height: 85%
  z-index: -1
  position: absolute
  top: 94px
  /*padding-top: 1px*/
  background: rgb(242,244,245)
  .loopMain
    width: 100%
    /*height: 140px*/
    .navBody
      width: 100%
      ul
        display: flex
        text-align: center
        padding: 15px 0
      li
        flex: 1
        .sicon
          width: 50px
          height: 50px
          border-radius: 50%
          margin: 5px auto
          border: 1px solid red
  .topSong
    list-style: none
    overflow: hidden
    .topSection
      float: left
      text-align: center
      /*height: 90px*/
      width: 32.7%
      margin-right: 2px
      margin-bottom: 8px
      &:last-child
        margin-right: 0px
      img
        width: 100%
        height: 100%
  .exclusiveDelivery
    width: 100%
    list-style: none
    overflow: hidden
    margin-top: 25px
    .exclusiveSection
      float: left
      width: 49.6%
      text-align: center
      margin-bottom: 8px
      img
          width: 100%
          height: 120px
        p
          font-size: 12px
          padding: 0 15px
      &:last-child
        width: 100%
        img
          width: 100%
          height: 160px
</style>
