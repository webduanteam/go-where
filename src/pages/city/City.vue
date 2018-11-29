<template>
  <div>
    <div class="header">
      城市选项
      <router-link to="/">
        <div  class="iconfont header-back" >&#xe624</div>
      </router-link>
    </div>
    <search :city="citys"></search>
    <citylist :hotcity="hotCities" :city="citys" :letter=" letter"></citylist>
    <alphbet :city="citys" @change="lechange"></alphbet>
  </div>

</template>

<script>
  import Search from '@/pages/city/components/search.vue'
  import Citylist from '@/pages/city/components/citylist.vue'
  import Alphbet from '@/pages/city/components/alphbet.vue'
  import axios from  'axios'
    export default {
    components : {
        Search,
        Citylist,
      Alphbet
    },
        name: "City",
      mounted(){
      this.gitcitylist()
      },
      methods:{
        lechange (letter){
          this.letter=letter
        },

      gitcitylist(){
        axios("api/city.json").then((res)=>{
          res=res.data
          if(res.ret=true
          ){
            this.hotCities=res.data.hotCities
            this.citys=res.data.cities
          }

        })
      }
      },


      data (){
        return{
          hotCities:[],
          citys:{},
          letter:"",


        }
      },
    }
</script>

<style scoped lang="stylus">
    .header
      overflow hidden
      position relative
      height .86rem
      line-height .86rem
      text-align center
      color #fff
      background #00bcd4
      .header-back
        position absolute
        margin-left .2rem
        color white
        font-size .4rem
        top 0
        left 0
</style>
