import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import md5 from 'md5'
import'mint-ui/lib/style.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
axios.defaults.withCredentials=true
Vue.prototype.axios=axios
Vue.prototype.md5=md5
//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css' 
// import Axios from 'axios';
//按需加载mint-ui组件库中一个组件Header
//1.按需引入Header
import MintUI from 'mint-ui'

// import {Header} from "mint-ui"
// import { Button } from "mint-ui"
// import { Field } from 'mint-ui';
// import { Swipe, SwipeItem } from 'mint-ui';
// import { Lazyload } from 'mint-ui';
Vue.use(MintUI)
Vue.use(ElementUI)
// Vue.use(Lazyload);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Field.name, Field);
// //2.注册Header
// //希望Header组件可以像标签直接使用
// //标签：Header.name="mt-header"
// Vue.component(Header.name,Header)
// Vue.component(Button.name, Button);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
Vue.filter("datetimeFilter",function(val){
  var now=new Date(val);
  var y=now.getFullYear();
  var month=now.getMonth()+1;
  var d=now.getDate();
  var h=now.getHours();
  var m=now.getMinutes();
  var s=now.getSeconds();
  month<10 && (month="0"+month)
  d<10 && (d="0"+d)
  h<10 && (h="0"+h)
  return `${y}-${month}-${d} ${h}:${m}:${s}`
  
})
