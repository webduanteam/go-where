<template>
  <div>
  <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">

    <ol class="carousel-indicators">
      <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-example-generic" data-slide-to="1"></li>
      <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    </ol>

    <div class="carousel-inner carouselheight" role="listbox" >

      <div class="item" v-for="(item ,index) in swiper" :class="{active:index==0}">
        <img :src="item.imgurl"alt="...">
      </div>

    </div>
    <!-- Controls -->
    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>

    </a>
    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>

    </a>
  </div>
</div>
</template>

<script>

    export default {
      props: {
        swiper:Array
      },

        name: "swiper",

      data(){
          return{

          }

      }
    }
</script>

<style scoped>
  img{
    width: 100%;
  }
  .carouselheight{
    height: 300px;
  }

</style>
