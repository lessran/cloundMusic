<template>
  <div id="app">
    <v-header></v-header>
    <div class="columns">
      <div class="column" @click="slide(1)"><router-link to='/playlist'>发现</router-link></div>
      <div class="column" @click="slide(2)"><router-link to='/mine'>我的</router-link></div>
      <div class="column" @click="slide(3)"><router-link to='/playPage'>电台</router-link></div>
      <transition name="slide">
        <div class="slideBar" :class="Classmove"></div>
      </transition>
    </div>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
import header from '@/components/header/header'
export default {
  data () {
    return {
      Classmove: 'classmove0'
    }
  },
  created () {
  },
  components: {
    'v-header': header
  },
  methods: {
    slide (val) {
      if (val === 1) {
        this.Classmove = 'classmove0'
        // this.$router.push({ path: val })
      } else if (val === 2) {
        this.Classmove = 'classmove1'
        // this.$router.push({ path: val })
      } else {
        this.Classmove = 'classmove2'
        // this.$router.push({ path: val })
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  overflow: hidden
  .columns
    overflow: hidden
    position: relative
    width: 100%
    height: 40px
    background: #fff
    display: flex
    .column
      flex: 1
      line-height: 40px
      text-align: center
      a
        text-decoration: none
    .slideBar
      background: red
      width: 22%
      height: 3px
      position: absolute
      bottom: 0
      left: 5%
      transition: all 0.2s linear
      &.classmove0
        transform: translate3d(5%,0,0)
      &.classmove1
        transform: translate3d(155%,0,0)
      &.classmove2
        transform: translate3d(305%,0,0)
</style>
