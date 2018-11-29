<template>
  <!--模板里面的根组件-->
    <div class="header">
       <div class="header-left">
         <div  class="iconfont back-icn" >&#xe624</div>
       </div>
      <div class="header-input">
        <span class="iconfont">&#xe632</span>
        输入城市名字
      </div>
      <!--字体颜色的变化主要是router-link的外层加了一个a标签默认的所以直接重新设置颜色-->
      <router-link to="/city">
        <div class="header-right">
          {{this.$store.state.city}}
          <span class="iconfont arrow-icon">&#xe64a</span>
        </div>
      </router-link>

    </div>
</template>

<script>
    export default {
      // props:{
      //   city:String
    // props:['city']
    //     不同的写法
    //   },
        name: "homeHeader"
    }
</script>

<!--scoped就是局部化的样式对其他的样式没有影响-->
<style lang="stylus" scoped >
.header
  display flex
  line-height:.86rem
  background :#00bcd4
  color:#ffffff
  .header-left
    margin-right .4rem
    width :.64rem
    float:left
    .back-icn
      text-align center
      font-size .4rem

  .header-input
    padding-left: .5rem
    flex :1
    background #fff
    height .64rem
    line-height .64rem
    border-radius .1rem
    margin-top:.12rem
    margin-left:.2rem
    color #ccc
  .header-right
    color white
    margin-left .4rem
    width:1.24rem
    float: right
    text-align:center
    .arrow-icon
      font-size .24rem
</style>
