import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'normalize.css/normalize.css' // css样式重置
import '@/assets/css/reset.css' // css样式重置
import '@/styles/index.less' // 引入自定义样式
import 'lib-flexible' // rem 布局适配
import Vconsole from 'vconsole'

const env = import.meta.env
console.log('当前环境变量==>', env)
// 测试环境生成 Vconsole
env.VITE_NODE_ENV === 'test' ? new Vconsole : ''

const app = createApp(App)

app.use(router).use(store).mount('#app')
