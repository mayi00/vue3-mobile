import request from '@/utils/axios'

// 机器人聊天（青云客api）
export function getQingyunke (params) {
  return request({
    url: `/qingyunke/api.php?key=free&appid=0&msg=${params}`,
    method: 'get',
    // params
  })
}
