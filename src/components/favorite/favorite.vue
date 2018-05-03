<template>
  <div class="favMain">
    <div class="favHeader">
      <div class="micon" @click="hideFav"><i class="icon-arrow-left2"></i></div>
      <div class="intro">
        <li>歌单</li>
      </div>
      <div class="menuImg"><img src=""/></div>
    </div>
    <div class="favBody"></div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    flag: {
      type: Boolean
    }
  },
  data () {
    return {}
  },
  methods: {
    hideFav () {
      this.$emit('show', this.reFlag)
    }
  },
  computed: {
    reFlag () {
      return !this.flag
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.favMain
  position: fixed
  top: 0
  width: 100%
  height: 100%
  .favHeader
    width: 100%
    height: 48px
    position: relative
    z-index: 10
    display: flex
    background: rgb(236,221,216)
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
</style>
