import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/base/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/register',
    children:[
      {
        path: 'register',
        name: 'register',
        component: () => import('@/views/base/register')
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/base/login')
      }
    ]
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index'),
    redirect: '/index/homepage',
    children:[
      {
        path: 'homePage',
        name: 'homePage',
        component: () => import('@/views/homePage/index')
      }
    ]
  },
  {
    path: '/classify',
    name: 'classify',
    component: () => import('@/views/index'),
    redirect: '/classify/index',
    children:[
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/classify/index')
      }
    ]
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/views/index'),
    redirect: '/detail/index',
    children:[
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/detail/index')
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
