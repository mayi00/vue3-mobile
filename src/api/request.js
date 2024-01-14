import axios from 'axios'

const service = axios.create()

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
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    // 处理响应错误
    console.log('响应错误==>', error)
    return Promise.reject(error)
  }
)

export default service
