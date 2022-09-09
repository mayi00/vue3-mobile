import request from './request'

// 机器人聊天（青云客api）
export function getQingyunke (params) {
  return request({
    url: `/api.php`,
    method: 'get',
    params
  })
}
