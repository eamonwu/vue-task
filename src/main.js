import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/global.css'
import router from './modules/router'
import pinia from './modules/pinia'

const app = createApp(App)
app.use(ElementPlus).use(router).use(pinia)
app.mount('#app')
