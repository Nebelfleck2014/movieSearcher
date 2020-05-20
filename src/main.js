import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import messagePlugin from '@/utils/message.plugin'
import Paginate from '@/components/app/Pagination'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import Search from '@/components/app/Search'
import MovieCard from '@/components/app/MovieCard'
import VuePaginate from 'vue-paginate'
Vue.use(VuePaginate)

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.component('Loader', Loader)
Vue.component('Pagination', Paginate)
Vue.component('Search', Search)
Vue.component('MovieCard', MovieCard)

const firebaseConfig = {
  apiKey: "AIzaSyCZ07HehDy0JYK10ImuQQ4IVvP4eAvGQPQ",
  authDomain: "moviesearcherdemo.firebaseapp.com",
  databaseURL: "https://moviesearcherdemo.firebaseio.com",
  projectId: "moviesearcherdemo",
  storageBucket: "moviesearcherdemo.appspot.com",
  messagingSenderId: "1002829744409",
  appId: "1:1002829744409:web:237defca360fdf26721d88"
}

firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

