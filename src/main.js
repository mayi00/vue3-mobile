import { createApp } from 'vue'
import './styles/reset.css'
import './styles/globals.less'
import './plugins/vant'
import App from './App.vue'
import router from './router'
import store from './store'
// rem 布局适配
import 'amfe-flexible'
// import VConsole from 'vconsole'

const app = createApp(App)
console.log('process.env:', process.env)
console.info('import.meta.env:', import.meta.env)

// app.use(VConsole)
app.use(router)
app.use(store)
app.mount('#app')
