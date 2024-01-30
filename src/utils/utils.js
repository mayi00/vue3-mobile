/*
 * @Description  : 一些通用的工具函数
 * @Author       : hzf
 * @Date         : 2024-01-13
 * @LastEditors  : hzf
 * @LastEditTime : 2024-01-14
 * @FilePath     : \h5-vite5\src\utils\utils.js
 */

import { Decimal } from 'decimal.js'

/**
 * @description  : 获取 [min,max] 之间的随机整数
 * @param         {Number|String} min
 * @param         {Number|String} max
 * @return        {Number}
 * @Author       : hzf
 */
export function getRandom(min, max) {
  const minNo = Number(min)
  const maxNo = Number(max)
  return Math.floor(Math.random() * (maxNo - minNo + 1)) + minNo
}

/**
 * @description : 获取随机字符串，传入的 length 为空时，则返回 ''，若 hasUppercase , hasLowercase, hasNum 均不传，则默认全部包含
 * @param         {Number|String} length 字符串长度，如不传则默认生成32位
 * @param         {Boolean} hasUppercase  是否包含大写字母
 * @param         {Boolean} hasLowercase 是否包含小写字母
 * @param         {Boolean} hasNum 是否包含数字
 * @return        {Boolean|String} 生成的字符串
 * @Author       : hzf
 */
export function getRandomString(length = 32, hasUppercase = true, hasLowercase = true, hasNum = true) {
  const lengthNo = Number(length)
  let str = ''
  if (!lengthNo || lengthNo < 1) {
    str = ''
  } else {
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz'
    const numChars = '0123456789'
    let chars = ''
    if (!hasUppercase && !hasLowercase && !hasNum) {
      chars = `${upperChars}${lowerChars}${numChars}`
    } else {
      if (hasUppercase) chars += upperChars
      if (hasLowercase) chars += lowerChars
      if (hasNum) chars += numChars
    }
    const maxLength = chars.length
    for (let i = 0; i < lengthNo; i++) {
      str = str + chars.charAt(Math.floor(Math.random() * maxLength))
    }
  }
  return str
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
  // new Blob([content])
  const blob = base64ToBlob(content)
  const evt = document.createEvent('HTMLEvents')
  // initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
  aLink.download = fileName
  evt.initEvent('click', true, true)
  aLink.href = URL.createObjectURL(blob)
  aLink.click()
}

/**
 * @description  : base64 字符串转 Blob 对象
 * @param         {String} content base64 格式文件
 * @return        {Blob} Blob 对象
 * @Author       : hzf
 */
export function base64ToBlob(content) {
  const parts = content.split(';base64,')
  // 解析出 mime 类型
  const contentType = parts[0].split(':')[1]
  // base64 解码得到二进制字符串
  const byteString = window.atob(parts[1])
  // 创建缓冲数组
  const arrayBuffer = new ArrayBuffer(byteString.length)
  // 创建8位无符号整数值的类型化数组
  const uint8Array = new Uint8Array(arrayBuffer)
  for (let i = 0; i < byteString.length; i++) {
    uint8Array[i] = byteString.charCodeAt(i)
  }
  return new Blob([uint8Array], { type: contentType })
}

/**
 * @description  :对数字的处理，大数、小数、去除数字首位多余的0、保留n位小数
 * @param         {String|Number} num 需要处理的数字
 * @param         {String|Number} n 保留几位小数
 * @return        {String} 处理后的数字
 * @Author       : hzf
 */
export function formatNumber(num, n) {
  const decimalNum = new Decimal(num)
  let result = decimalNum.toFixed(Number(n)).toString()
  result = result.replace(/^0+/, '')
  if (/^\./.test(result)) {
    result = `0${result}`
  }
  return result
}
