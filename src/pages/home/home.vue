<template>
    <div>
      <home-header ></home-header>
      <!--组件之间传递数据-->
      <home-swiper :swiper="swiperlist"></home-swiper>
      <icons :iconlist="iconslist"></icons>
      <remcoment :remcoment="remcomentlist"></remcoment>
      <weekd :week="weekdlist"></weekd>
    </div>
</template>

<script>
  import  HomeHeader  from './components/homeheader'
  import  HomeSwiper  from './components/swiper'
  import  Icons from './components/icons'
  import  Remcoment from './components/remcoment'
  import  Weekd from './components/weekd'
  import axios from 'axios'
    export default {
      name: "home",
      components:{
          HomeHeader,
          HomeSwiper,
          Icons,
          Remcoment,
          Weekd
      },
      data(){
        return{
          swiperlist:[],
          iconslist:[],
          remcomentlist:[],
          weekdlist:[],
          // 类型只是表示没有实际意义 this就是VUE实例
        }
      },
      // 钩子函数ref操作时涉及到生命周期 下一步进行 API的封装
      mounted (){
      this.githomelist()
      },
      methods:{
        //进行数据的访问
        githomelist(){
        axios.get("/api/index.json").then((res)=>{
             var res=res.data;
             /*数据的测试打印

             * */
            console.log(res.data.swiperlist[0].imgurl);

              if(res.status=="0"){
                  this.swiperlist=res.data.swiperlist;
                  this.iconslist=res.data.iconlist;
                  this.remcomentlist=res.data.remcomentList;
                this.weekdlist=res.data.weekendList
              }

        })
        }

      }
    }
</script>

<style scoped>

</style>
