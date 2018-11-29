<template>
    <ul class="list" >
      <li class="item"v-for="(item ,key) in city" @click="hand">{{key}}</li>

    </ul>
</template>

<script>
    export default {
        name: "alphbet",
      props:{
          city:Object
      },
      methods:{
        hand (e) {
           this.$emit('change', e.target.innerHTML)
          // 点击事件可以获取里面的内容

        }
      }
    }
</script>

<style scoped lang="stylus">
    .list
      display: flex
      flex-direction column
      justify-content center
      position fixed
      top 1.69rem
      right: 0
      bottom 0
      width: .4rem
      .item
        text-align center
        line-height .44rem
        color #00bcd4
</style>
