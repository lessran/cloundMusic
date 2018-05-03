<template>
  <div class="mine">
    <li class="lists" v-for="(item,index) in list" :key="index">
      <div class="iconWrapper"></div>
      <p>{{ item }}</p>
    </li>
    <p style="background: rgb(223,224,225);padding: 8px 20px;font-size: 12px">创建的歌单</p>
    <li class="buildLists" @click="showFav">
      <div class="navImgWrapper"></div>
      <div class="textWrapper">
        <p>我喜欢的音乐</p>
        <p style="font-size: 12px;color: rgb(104,104,104)">123首</p>
      </div>
    </li>
    <favorite v-if='flag' :flag='flag' @show='hideFav'></favorite>
  </div>
</template>

<script type="text/javascript">
import favorite from '@/components/favorite/favorite.vue'
export default {
  data () {
    return {
      list: [
        '本地音乐',
        '最近播放',
        '下载管理',
        '我的电台',
        '我的收藏'
      ],
      flag: false
    }
  },
  methods: {
    showFav (g) {
      // console.log(g)
      this.flag = true
    },
    hideFav (flag) {
      // console.log(g)
      this.flag = flag
    }
  },
  components: {
    favorite
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.mine
  position: absolute
  width: 100%
  height: 80%
  top: 94px
  background: rgb(236,241,242)
  .lists,.buildLists
    width: 100%
    height: 48px
  .lists
    p
      margin-left: 50px
      line-height: 48px
  .buildLists
    display: flex
    .navImgWrapper
      flex: 1
      width: 48px
      height: 48px
    .textWrapper
      flex: 5
      p
        margin: 5px
</style>
