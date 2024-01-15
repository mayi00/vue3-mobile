import axios from 'axios'

const service = axios.create()

// 请求拦截器
service.interceptors.request.use(
  config => {
    if (!config.timeout) {
      config.timeout = 1000 * 10
    }
    console.log('【请求config：】', config)
    return config
  },
  error => {
    return new Promise((resolve, reject) => {
      // 处理请求错误
      console.error('【请求错误】', error)
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
        reject(response.data)
      }
    })
  },
  error => {
    return new Promise((resolve, reject) => {
      // 处理响应错误
      console.error('【响应错误】', error)
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
