import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Exam01 from "./components/Exam01"
import List from "./components/List"
import Login from "./components/Login.vue"
import GoodList from "./components/GoodList.vue"
import Exam02 from './components/Exam02'
import Exam03 from './components/Exam03'
import Exam04 from './components/Exam04'
import Exam from './components/Exam.vue'
import Exam05 from './components/Exam05.vue'
import Exam06 from './components/Exam06.vue'
import Home from './components/Home.vue'
import NewsList from './components/NewsList.vue'
import Exam07 from './components/Exam07.vue'
import Exam08 from './components/Exam08.vue'
import ShopCart from './components/ShopCart.vue'
import Exam09 from './components/Exam09'
import Exam10 from './components/Exam10'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:HelloContainer},
    {path:"/exam01",component:Exam01},
    {path:"/list",component:List},
    {path:"/login",component:Login},
    {path:"/GoodList/:lid",component:GoodList,props:true},
    {path:'/exam02',component:Exam02},
    {path:'/exam03',component:Exam03},
    {path:'/exam04',component:Exam04},
    {path:'/exam',component:Exam},
    {path:'/exam05',component:Exam05},
    {path:'/exam06',component:Exam06},
    {path:'/home',component:Home},
    {path:'/newsList',component:NewsList},
    {path:'/exam07',component:Exam07},
    {path:'/exam08',component:Exam08},
    {path:'/exam09',component:Exam09},
    {path:'/exam10',component:Exam10},
    {path:'/shopCart',component:ShopCart},
  ]
})
