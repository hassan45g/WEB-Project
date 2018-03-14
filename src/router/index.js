import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Hotels from '@/components/Hotels'
import Restaurants from '@/components/Restaurants'
import Travel from '@/components/Travel'
import Login from '@/components/User/Login'
import Profile from '@/components/User/Profile'
import Signup from '@/components/User/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/login',
      name: 'LogIn',
      component: Login
    },{
      path: '/profile',
      name: 'Profile',
      component: Profile
    },{
      path: '/signup',
      name: 'SignUp',
      component: Signup
    },{
      path: '/travel',
      name: 'Travel',
      component: Travel
    },{
      path: '/restaurants',
      name: 'Restaurants',
      component: Restaurants
    },{
      path: '/hotels',
      name: 'Hotels',
      component: Hotels
    },
  ]
})
