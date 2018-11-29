<template>
    <div>
      <div class="remcoment-title">
        热销推荐
      </div>
      <ul>
        <li class="item boder-bottom" v-for="item  in remcoment">
          <div class="item-img">
            <img :src="item.imgurl" alt="">
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "remcoment",
        props:{
        remcoment:Array
       },
      data (){
        return {

        }
      },
      mounted (){
        this.recoment()
      },
      methods:{
          recoment(){
            console.log(this.recoments)
          }
      }
    }
</script>

<style scoped lang="stylus">
    .remcoment-title
      margin-top .2rem
      line-height .8rem
      background #cccccc
      text-indent .2rem
    .item
      overflow hidden
      display flex
      height 1.9rem
      margin-top .2rem
      .item-img
        padding .1rem
      .item-info
        flex 1
        padding .1rem
        .item-title
          line-height .54rem
          font-size .32rem
        .item-desc
          line-height .4rem
          color #cccccc
        .item-button
          background #ff9300
          padding .1rem
          border-radius .6rem
          color #ffffff
          margin-top .2rem
</style>
