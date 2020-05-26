import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Moviesearcher/',
    name: 'Home',
    meta: {layout: 'main'},
    component: Home
  },
  {
    path: '/Moviesearcher/:params',
    name: 'MovieSearcher',
    meta: {layout: 'main'},
    component: Home
  },
  {
    path: '/search', redirect: '/MovieSearcher'
  }, //При очищении input поиска перенаправляем на главную страницу
  {
    path: '/favorites',
    name: 'Favorites',
    meta: {layout: 'others'},
    component: () => import('../views/Favorites.vue')
  },
  {
    path: '/single/:id',
    name: 'Single',
    meta: {layout: 'others'},
    component: () => import('../views/Single.vue')
  },
  {
    path: '/search/:query',
    name: 'MovieSearch',
    meta: {layout: 'main'},
    component: () => import('../views/MovieSearch.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {layout: 'empty'},
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {layout: 'empty'},
    component: () => import('../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
