<template>
  <div class="searchFor">
    <router-link to="/playlist">
      <div class="icon"><i class="icon-arrow-left2"></i></div>
    </router-link>
    <input type="text" class="searchInput" ref="input" v-model="content"/>
    <span class="empty" @click="empty" v-if="content != ''">x</span>
    <div class="start" v-if="content != ''" @click="search">&nbsp;搜索&nbsp;{{ '"' + content + '"'}}</div>
    <div class="topSearch">
      <p>热门搜索</p>
      <li v-for="(item,index) in searchList" :key="index" class="topLabel" @click="search(item)">{{ item }}</li>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import axios from 'axios'
// import Vue from 'vue'
// var $http = axios.create({})
// Vue.prototype.$http = $http
export default {
  data () {
    return {
      content: '',
      searchList:
      [
        '没有理由',
        '我们',
        '渺小却伟大',
        '田馥甄',
        '谢春花',
        'Take Me Hand',
        '病变',
        '你好不好',
        '张国荣',
        '偶像练习生'
      ]
    }
  },
  methods: {
    empty () {
      this.content = ''
    },
    search (item) {
      /* this.content = item
      this.$http.get('/', {
        params: {
          id: this.content
        }
      })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        }) */
      this.$http.get('https://api.imjad.cn/cloudmusic/?id=' + this.content)
        .then((response) => {
          console.log(response)
        })
    }
  },
  computed: {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.searchFor
  width: 100%
  /*height: 40px*/
  background: #d33a31
  position: relative
  top: -94px
  z-index: 20
  .start
    width: 350px
    height: 40px
    line-height: 40px
    margin: 1px auto
    background: #eff
    border: 1px solid rgba(222,222,222,0.8)
  .icon
    display: inline-block
    height: 100%
    width: 40px
    line-height: 40px
    text-align: center
    color: #fff
    font-size: 24px
  .searchInput
    width: 290px
    border: none
    outline: none
    border-bottom: 1px solid #adf
    background: #d33a31
    vertical-align: middle
  .empty
    display: inline-block
    font-size: 22px
    text-align: center
    line-height: 22px
    color: #fff
    margin-left: 10px
  .topSearch
    width: 100%
    /*height: 600px*/
    margin-top: 10px
    background: rgb(255,255,255)
    .topLabel
      display: inline-block
      margin: 15px 0px 0px 15px
      border-radius: 20px
      padding: 4px
      border: 1px solid gray
</style>
