/*
 * @Description : 一些通用的工具函数
 * @Author      : MDT
 * @Date        : 2024-03-27
 * @LastEditors : MDT
 * @LastEditTime: 2024-07-20
 * @FilePath    : \vue3-mobile\src\utils\utils.js
 * 代码是写出来给人看的，附带能在机器上运行。
 * Copyright (c) 2024 by MDT, All Rights Reserved.
 */
import { Decimal } from 'decimal.js'

/**
 * @description  : 获取 [min,max] 之间的随机整数
 * @param         {Number|String} min
 * @param         {Number|String} max
 * @return        {Number}
 * @Author       : MDT
 */
export function getRandom(min, max) {
  const minNo = Number(min)
  const maxNo = Number(max)
  return Math.floor(Math.random() * (maxNo - minNo + 1)) + minNo
}

/**
 * @description : 获取随机字符串
 *                传入的 length 为空时，则返回 ''
 *                若 hasUppercase , hasLowercase, hasNum 均不传，则默认全部包含
 * @param         {Number|String} length 字符串长度，如不传则默认生成32位
 * @param         {Boolean} hasUppercase  是否包含大写字母
 * @param         {Boolean} hasLowercase 是否包含小写字母
 * @param         {Boolean} hasNum 是否包含数字
 * @return        {String} 生成的字符串
 * @Author      : MDT
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
 * @Author       : MDT
 */
export function isExternalLink(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @description  : base64 转图片下载
 * @param         {String} content base64 格式图片
 * @param         {String} fileName 文件名
 * @Author       : MDT
 */
export function downloadImageByBase64(content, fileName) {
  const aLink = document.createElement('a')
  const blob = base64ToBlob(content)
  aLink.href = URL.createObjectURL(blob)
  aLink.download = fileName
  aLink.style.display = 'none'
  document.body.appendChild(aLink)
  aLink.click()
  setTimeout(() => {
    document.body.removeChild(aLink)
    URL.revokeObjectURL(aLink.href)
  }, 0)
}

/**
 * @description  : base64 字符串转 Blob 对象
 * @param         {String} content base64 字符串
 * @return        {Blob} Blob 对象
 * @Author       : MDT
 */
export function base64ToBlob(content) {
  const parts = content.split(';base64,')
  const contentType = parts[0].split(':')[1]
  const byteString = window.atob(parts[1])
  const uint8Array = new Uint8Array(byteString.length)
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
 * @Author       : MDT
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
