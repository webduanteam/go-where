<template>
    <div class="list" ref="wrapper">
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper" >
            <div class="button">{{this.$store.state.city}}</div>
          </div>

        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hotcity"
          @click="handcity(item.name)">
            <div class="button">{{item.name}}</div>
          </div>

        </div>
      </div>
      <div class="area" v-for="(item ,key) in city"
           :key="key"
           :ref="key"
      >
        <div class="title">{{key}}</div>
        <div class="item-list" v-for="ite in item"
        >
          <div class="item" @click="handcity(ite.name)">{{ite.name}}</div>

        </div>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll';
    export default {
      props:{
        hotcity:Array,
        city:Object,
        letter:String
      },
        name: "citylist",
      mounted(){
       this.scroll=new BScroll(this.$refs.wrapper)

      },


      watch:{
        letter(){
          if( this.letter){

            // 获取元素
            const element = this.$refs[this.letter][0]
            // 语法就是自动滚动到某个元素的位置
            this.scroll.scrollToElement(element)
            console.log(element)
          }

        }
      },
      methods:{
        handcity (city) {
          // 用于修改数据vuex
         this.$store.dispatch('changecity', city)
          this.$router.push('/')
          // 路由有两种方式一种是编是路由一种是标签是,标签是的会自动的生成一个a标签

        }

        }
    }
</script>

<style scoped lang="stylus">
           .title
                  height .4rem
                  background #eee
                  padding .4rem
                  color#666
              .button-list
                  padding .2rem
                  overflow hidden
                  .button-wrapper
                    float left
                    width 33.33%
                    .button
                      padding 0.1rem
                      margin .2rem
                      text-align center
                      border: .02rem solid #ccc
                      border-radius .06rem
              .item-list
                    line-height .76rem
                    border-bottom
                    color #666
                    padding-left.2rem
                    margin-top 0.1rem
                    .item
                      border-bottom: solid 1px #ccc
</style>
