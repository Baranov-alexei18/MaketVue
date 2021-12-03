import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/men',
    name: 'Men',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Men.vue')
  },
  {
    path: '/women',
    name: 'Women',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Women.vue')
  },
  {
    path: '/kids',
    name: 'Kid',
    component: () => import(/* webpackChunkName: "about" */ '../views/Kids.vue')
  },
  {
    path: '/sports',
    name: 'Sport',
    component: () => import(/* webpackChunkName: "about" */ '../views/Sports.vue')
  },
  {
    path: '/brands',
    name: 'Brand',
    component: () => import(/* webpackChunkName: "about" */ '../views/Brands.vue')
  },
  {
    path: '/collections',
    name: 'Collections',
    component: () => import(/* webpackChunkName: "about" */ '../views/Collections.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
