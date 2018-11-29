<template>
  <div>
    <div class="search">
      <input type="text" placeholder="输入城市名或拼音" class="search-input" v-model="keyword">
    </div>
    <div class="search-content"  ref="search"
         v-show="keyword"

    >
<ul>
  <li v-for="item in list"
      @click="handcity(item.name)"
  >{{item.name}}</li>
</ul>

    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
    export default {
      props:{
        city:Object,
      },
        name: "search",
      watch:{
        keyword () {
          if (this.timer) {
            clearTimeout(this.timer)
          }
          if (!this.keyword) {
            this.list = []
            return
          }
          this.timer = setTimeout(() => {
            const result = []
            for (let i in this.city) {
              this.city[i].forEach((value) => {
                // 在数据里是否能找到关键词
                if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                  result.push(value)
                }
              })
            }
            this.list = result
          }, 100)
        }
      },

      data(){
          return{
            keyword:'',
            list:[],
            timer: null

          }
      },
      // 创建钩子函数
      mounted () {
        this.scroll = new Bscroll(this.$refs.search)
      },
      methods:{
        handcity (city) {
          // 用于修改数据vuex
          this.$store.dispatch('changecity', city)
          this.keyword=''
        }

      }
    }
</script>

<style scoped lang="stylus">
    .search
      padding .1rem
      background #00bcd4
      height .82rem
      /*padding .01rem*/
      .search-input
        width 100%
        line-height .62rem
        height .62rem
        text-align center
        border-radius .06rem
        /*box-sizing border-box*/
    .search-content
      z-index: 1
      overflow: hidden
      position: absolute
      top: 1.58rem
      left: 0
      right: 0
      bottom: 0
      background: #eee
      height 1000px
</style>
