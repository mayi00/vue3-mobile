import request from './request'

export default {
  // 青云客机器人聊天
  getQingyunke(params) {
    return request({
      url: '/api.php',
      method: 'get',
      params,
      timeout: 1000 * 12
    })
  }
}
