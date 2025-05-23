import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n.js'
import { createHead } from '@vueuse/head'
import component from './components/ui-components/component.js'
import {MotionPlugin} from '@vueuse/motion'
const app = createApp(App)
const head = createHead()
app.use(head)
component.map(component => app.component(component.name , component))   
app.use(i18n)
app.use(router)
app.use(MotionPlugin)
app.mount('#app')
