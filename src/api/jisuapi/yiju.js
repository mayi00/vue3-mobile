import request from './request'

const baseUrl = import.meta.env.VITE_NODE_ENV === 'development' ? '/proxy-jisuapi' : ''

export default {
  // 名人名言查询
  query(params) {
    return request({
      url: `${baseUrl}/yiju/query`,
      method: 'get',
      params
    })
  },
  // 名言类型
  class(params) {
    return request({
      url: `${baseUrl}/yiju/class`,
      method: 'get',
      params
    })
  },
  // 名言作者
  author(params) {
    return request({
      url: `${baseUrl}/yiju/author`,
      method: 'get',
      params
    })
  }
}
