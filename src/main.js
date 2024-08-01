import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import  router from '../plugins/router'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

createApp(App).use(router).use(AOS.init()).mount('#app')
