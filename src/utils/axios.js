import axios from 'axios'

const env = import.meta.env
const baseURL = env.VITE_NODE_ENV === 'development' ? '/api' : ''

const service = axios.create({
  baseURL,
  timeout: 1000 * 10
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // 处理请求错误
    console.log('请求错误==>', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data
    } else {

    }
  },
  error => {
    // 处理响应错误
    console.log('响应错误==>', error)
    return Promise.reject(error)
  }
)

export default service
