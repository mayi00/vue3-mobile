<script setup>
import { encrypt, decrypt, encryptECB, decryptECB } from '@/utils/aesUtils.js'

defineOptions({
  name: 'Aes'
})

const secretKey = 'WdY1gRxcJXKRgiLv'
const secretIv = 'WdY1gRxcJXKRgiLv'

const enc = encrypt('123456', secretKey, secretIv)
const dec = decrypt(enc, secretKey, secretIv)
console.log('加密', enc)
console.log('解密', dec)

const encECB = encryptECB('123456', secretKey)
const decECB = decryptECB(encECB, secretKey)
console.log('encECB', encECB)
console.log('decECB', decECB)
</script>

<template>
  <div class=""></div>
</template>
