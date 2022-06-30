import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
// import 'normalize.css/normalize.css' // css样式重置
import '@/assets/css/reset.css' // css样式重置
import '@/assets/style/index.less' // 引入自定义样式

const env = import.meta.env
console.log('当前环境变量==>', env)

const app = createApp(App)

app.use(router).use(store).mount('#app')
