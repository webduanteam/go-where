<template>
    <div class="icons">
      <div class="icon" v-for="item in iconlist">
        <div class="icon-img" >
        <img :src="item.imgurl" alt="">
        </div>
        <p class="icons-icn">图片</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "icons",
      props:{
        iconlist:Array
      },
      data () {
        return {}
      },
      mounted(){
          this.icons()
      },
      methods:
        {
          icons(){
            console.log(this.iconlist)
          }
        }
    }
</script>

<style scoped lang="stylus">
      .icons
        overflow hidden
        height 0
        padding-bottom 50%
        /*background green*/
        .icon
          position relative
          float left
          overflow hidden
          width 25%
          height 0
          padding-bottom: 25%
          .icon-img
            position absolute
            top 0
            boottom .44rem
            left 0
          .icons-icn
            width 100%
            text-align center
            position absolute
            left 0
            bottom 0
            height 1rem
            color #cccccc
            /*line-height .44rem*/

</style>
