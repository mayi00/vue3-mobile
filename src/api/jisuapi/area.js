/*
 * @Description  : 全国省市县行政区划分
 *                 最新全国省、市、县行政区划信息，包含区号、邮编等信息，同时包含国外的国家和地区。
 * @Author       : MDT
 * @Date         : 2024-01-15
 * @LastEditors : MDT
 * @LastEditTime: 2024-08-03
 * @FilePath    : \vue3-mobile\src\api\jisuapi\area.js
 */
import request from './request'

export default {
  // 获取全部省份
  province(params) {
    return request({
      url: '/proxy-jisuapi/area/province',
      method: 'get',
      params
    })
  },
  // 根据省份获取市
  city(params) {
    return request({
      url: '/proxy-jisuapi/area/city',
      method: 'get',
      params
    })
  },
  // 根据市获取区县
  town(params) {
    return request({
      url: '/proxy-jisuapi/area/town',
      method: 'get',
      params
    })
  }
}
