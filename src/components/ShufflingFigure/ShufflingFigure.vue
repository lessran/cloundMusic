<template>
  <div class="slide_box">
    <div class="slide" ref="slider">
      <div class="slide-group" ref='slideGroup'>
        <slot>
        </slot>
      </div>
      <div class="dots">
        <span class="dot" :class="{dotActive: (currentPageIndex) === index }" v-for="(item,index) in dots" :key='index'></span>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import BScroll from 'better-scroll'
export default {
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      dots: [],
      currentPageIndex: 0
    }
  },
  mounted () {
    this.setSliderWidth() // 设置轮播图的宽度
    this.init()
    if (this.autoPlay) {
      this.play()
    }
  },
  methods: {
    setSliderWidth () {
      this.children = this.$refs.slideGroup.children
      this.dots = new Array(this.children.length)
      let width = 0
      let sliderWidth = this.$refs.slider.clientWidth
      for (let i = 0; i < this.children.length; i++) {
        width += sliderWidth
      }
      if (this.loop) {
        width += 2 * sliderWidth
      }
      this.$refs.slideGroup.style.width = width + 'px'
    },
    init () {
      var vm = this
      // 实例化scroll
      this.scroll = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false, // 关闭或者打开惯性运动的执行
        snap: {
          loop: this.loop, // 无限滚动
          threshold: 0.3,
          speed: 400 // 滑动的时间
        }, // 隔断（翻页）
        click: true
      })
      this.scroll.on('scrollEnd', () => {
        let pageIndex = this.scroll.getCurrentPage().pageX
        this.currentPageIndex = pageIndex
        if (vm.autoPlay) {
          vm.play()
        }
      })
      this.scroll.on('beforeScrollStart', () => {
        if (vm.autoPlay) {
          clearTimeout(vm.timer)
        }
      })
    },
    play () {
      let pageIndex = this.currentPageIndex + 1// eslint-disable-line
      if (this.loop) {
        pageIndex += 1
      }
      var vm = this
      this.timer = setTimeout(() => {
        vm.scroll.next()
      }, vm.interval)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.slide
  width: 100%
  overflow: hidden
  height: 150px
  position: relative
  .slide-group
    height: 150px
    .slider-item
      width: 100vw
      height: 150px
      float: left
      &:nth-type-of(1)
         background: red
      img
        width: 100%
        height: 100%
  .dots
    position: absolute
    left: 0
    right: 0
    bottom: 10px
    text-align: center
    .dot
      background: rgba(255,255,255,.5)
      display: inline-block
      margin: 0 4px
      height: 8px
      width: 8px
      border-radius: 50%
      &.dotActive
        width: 20px
        border-radius: 5px
        background: rgba(255,255,255,0.8)
</style>
