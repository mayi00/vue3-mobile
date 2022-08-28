/*
 * @Description  : 工具函数
 * @Author       : hzf
 * @Date         : 2022-08-28
 * @LastEditors  : hzf
 * @LastEditTime : 2022-08-28
 * @FilePath     : \vue-mobile\src\utils\utils.js
 */

/**
 * @description  : 获取 [min,max] 之间的随机整数
 * @param         {Number|String} min
 * @param         {Number|String} max
 * @return        {Number}
 * @Author       : hzf
 */
export function getRandom(min, max) {
  min = Number(min)
  max = Number(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * @description  : 判断是否为外部链接
 * @param         {String} path
 * @return        {Boolean}
 * @Author       : hzf
 */
export function isExternalLink(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
