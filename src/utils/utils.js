/*
 * @Description  : 工具函数
 * @Author       : hzf
 * @Date         : 2022-08-28
 * @LastEditors  : hzf
 * @LastEditTime : 2022-09-08
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

/**
 * @description  : base64 转图片下载
 * @param         {String} content base64 格式图片
 * @param         {String} fileName 文件名
 * @Author       : hzf
 */
export function downloadImageByBase64(content, fileName) {
  const aLink = document.createElement('a')
  const blob = base64ToBlob(content) // new Blob([content])
  const evt = document.createEvent('HTMLEvents')
  evt.initEvent('click', true, true)// initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
  aLink.download = fileName
  aLink.href = URL.createObjectURL(blob)
  aLink.click()
}

/**
 * @description  : base64 字符串转 Blob 对象
 * @param         {String} content base64 格式文件
 * @return        {} Blob 对象
 * @Author       : hzf
 */
export function base64ToBlob(content) {
  const parts = content.split(';base64,')
  const contentType = parts[0].split(':')[1] // 解析出 mime 类型
  const byteString = window.atob(parts[1]) // base64 解码得到二进制字符串
  const arrayBuffer = new ArrayBuffer(byteString.length) // 创建缓冲数组
  const uint8Array = new Uint8Array(arrayBuffer) // 创建8位无符号整数值的类型化数组
  for (let i = 0; i < byteString.length; i++) {
    uint8Array[i] = byteString.charCodeAt(i)
  }
  return new Blob([uint8Array], { type: contentType })
}
