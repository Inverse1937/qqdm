import Vue from 'vue'
import VueRouter from 'vue-router'
import BookSearch from '../components/show/BookSearch.vue'
import Home from '../views/viewzone/Home.vue'
import Update from '../views/viewzone/Update.vue'
import BookDetails from '../views/BookDetails.vue'
import Weekly from '../views/Weekly.vue'
import ComicDetails from '../views/ComicDetails.vue'
import Personal from '../views/Personal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/booksearch',
    name:'booksearch',
    component:BookSearch
  },
  {
    path:'/update',
    name:'update',
    component:Update
  },
  {
    path:'/details',
    name:'details',
    component:BookDetails
  },
  {
    path:'/weekly',
    name:'weekly',
    component:Weekly
  },
  {
    path:'/comic',
    name:'comic',
    component:ComicDetails
  },
  {
    path:'/personal',
    name:'personal',
    component:Personal
  },
  {
    path:'/writer',
    name:'writer',
    component:() => import('../views/Writer.vue')
  },
  {
    path:'/error',
    name:'error',
    component:() => import('../views/Error.vue')
  },
  {
    path:'/external',
    name:'external',
    component:()=>import('../views/External.vue')
  },
  {
    path: '/bookrank',
    name: 'bookrank',
    component: () => import(/* webpackChunkName: "about" */ '../views/viewzone/BookRank.vue')
  },
  {
    path: '/classify',
    name: 'classify',
    component: () => import(/* webpackChunkName: "about" */ '../views/viewzone/Classify.vue')
  },
  {
    path: '/special',
    name: 'special',
    component: () => import(/* webpackChunkName: "about" */ '../views/viewzone/Special.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
