// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fasClick from 'fastclick'
import store from  './store/index'
  import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import './assets/iconfont.css'
// 初始化样式
import  './assets/reset.css'
// 解决一像素样式
import './assets/border.css'


Vue.config.productionTip = false;
// 使用点击事件的处理
fasClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
