<template>
  <div>
    <div class="remcoment-title">
 周末去哪
    </div>
    <ul>
      <li class="item boder-bottom" v-for="item in week">

        <div class="item-img">
          <img :src="item.imgUrl" alt="">
        </div>

        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}} </p>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "weekd",
      props:{
          week:Array
      },
      data(){
        return{

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
    margin-top .2rem
    .item-img
      padding .1rem
    .item-info
      padding .1rem
      .item-title
        line-height .54rem
        font-size .32rem
      .item-desc
        line-height .4rem
        color #cccccc

</style>
