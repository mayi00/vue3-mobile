const tools = {
  /**
   * @description : 获取随机字符串，传入的 length 为空时，则返回 false，若 upper, lower, num 均不传，则默认全部包含
   * @param         {Number|String} length 字符串长度，如不传则默认生成32位
   * @param         {Boolean} upper 是否包含大写字母
   * @param         {Boolean} lower 是否包含小写字母
   * @param         {Boolean} num 是否包含数字
   * @return        {Boolean|String} false || 生成的字符串
   * @Author       : hzf
   */
  getRandomString(length = 32, upper = true, lower = true, num = true) {
    length = Number(length)
    if (!length || length < 1) return false
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz'
    const numChars = '0123456789'
    let chars = ''
    if (!upper && !lower && !num) {
      chars = `${upperChars}${lowerChars}${numChars}`
    } else {
      if (upper) chars += upperChars
      if (lower) chars += lowerChars
      if (num) chars += numChars
    }
    const maxLength = chars.length
    let str = ''
    for (let i = 0; i < length; i++) {
      str = str + chars.charAt(Math.floor(Math.random() * maxLength))
    }
    return str
  }
}

export default tools
