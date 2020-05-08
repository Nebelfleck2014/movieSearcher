import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(messagePlugin)

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

