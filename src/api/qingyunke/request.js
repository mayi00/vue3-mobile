import axios from 'axios'

const service = axios.create()

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

const request = async ({ baseURL, url, method, params, data, timeout, headers, responseType }) => {
  return await service({
    baseURL,
    url,
    method,
    params,
    data,
    timeout,
    headers,
    responseType
  })
}

export default request
