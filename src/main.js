import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import 'normalize.css/normalize.css'
import '@/styles/variables.css' // 全局引入自定义 CSS 变量
import '@/styles/index.less' // 引入自定义样式
import 'lib-flexible' // rem 布局适配
// import 'amfe-flexible'

const env = import.meta.env
console.log('当前环境变量==>', env)

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
