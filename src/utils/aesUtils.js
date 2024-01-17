/*
 * @Description  : AES加密解密
 * @Author       : hzf
 * @Date         : 2024-01-17
 * @LastEditors  : hzf
 * @LastEditTime : 2024-01-17
 * @FilePath     : \h5-vue3\src\utils\aesUtils.js
 */
import CryptoJS from 'crypto-js'

/**
 * @description  : AES加密，带偏移量
 * @param         {String} word 明文
 * @param         {String} secretKey 密钥
 * @param         {String} secretIv 偏移量
 * @return        {String} 密文
 * @Author       : hzf
 */
export function encrypt(word, secretKey, secretIv) {
  const key = CryptoJS.enc.Utf8.parse(secretKey)
  const iv = CryptoJS.enc.Utf8.parse(secretIv)
  const wordArray = CryptoJS.enc.Utf8.parse(word)
  const encrypted = CryptoJS.AES.encrypt(wordArray, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return CryptoJS.enc.Base64.stringify(encrypted.ciphertext)
}

/**
 * @description  : AES解密，带偏移量
 * @param         {String} word 密文
 * @param         {String} secretKey 密钥
 * @param         {String} secretIv 偏移量
 * @return        {String} 明文
 * @Author       : hzf
 */
export function decrypt(word, secretKey, secretIv) {
  const key = CryptoJS.enc.Utf8.parse(secretKey)
  const iv = CryptoJS.enc.Utf8.parse(secretIv)
  const encryptedWordArray = CryptoJS.enc.Base64.parse(word)
  const decrypted = CryptoJS.AES.decrypt({
    ciphertext: encryptedWordArray
  }, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return decrypted.toString(CryptoJS.enc.Utf8)
}

/**
 * @description  : AES加密
 * @param         {String} word 明文
 * @param         {String} secretKey 密钥
 * @return        {String} 密文
 * @Author       : hzf
 */
export function encryptECB(word, secretKey) {
  const key = CryptoJS.enc.Utf8.parse(secretKey)
  const wordArray = CryptoJS.enc.Utf8.parse(word)
  const encrypted = CryptoJS.AES.encrypt(wordArray, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
  return encrypted.toString()
}

/**
 * @description  : AES解密
 * @param         {String} word 密文
 * @param         {String} secretKey 密钥
 * @return        {String} 明文
 * @Author       : hzf
 */
export function decryptECB(word, secretKey) {
  const key = CryptoJS.enc.Utf8.parse(secretKey)
  const decrypted = CryptoJS.AES.decrypt(word, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
  return decrypted.toString(CryptoJS.enc.Utf8)
}
