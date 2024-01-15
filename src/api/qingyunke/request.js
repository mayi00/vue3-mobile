import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API_QINGYUNKE
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    if (!config.timeout) {
      config.timeout = 1000 * 10
    }
    return config
  },
  error => {
    return new Promise((resolve, reject) => {
      // 处理请求错误
      console.error('请求错误==>', error)
      reject(error)
    })
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    return new Promise((resolve, reject) => {
      if (response.status === 200) {
        resolve(response.data)
      } else {
        reject(response)
      }
    })
  },
  error => {
    return new Promise((resolve, reject) => {
      // 处理响应错误
      console.error('响应错误==>', error)
      reject(error)
    })
  }
)

const request = async ({ url, method, params, data, timeout }) => {
  return await service({
    url,
    method,
    params,
    data,
    timeout
  })
}

export default request
