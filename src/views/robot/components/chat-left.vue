<!--
 * @Description  : 聊天消息左侧组件
 * @Author       : huazf
 * @Date         : 2022-07-23
 * @LastEditors  : hzf
 * @LastEditTime : 2022-08-28
 * @FilePath     : \vue-mobile\src\views\robot\components\chat-left.vue
-->
<script setup name="ChatLeft">
defineProps({
  chat: { type: Object, required: true }
})

// 引入图片
function getImg(name) {
  return new URL(`/src/assets/images/${name}`, import.meta.url).href
}
</script>

<template>
  <div class="chat-left-container">
    <van-image class="avatar-box" fit="cover" round :src="getImg('qingyunke.jpg')"></van-image>
    <div class="chat-box">
      <p class="chat" v-html="chat.content"></p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.chat-left-container {
  display: flex;
}

.chat-box {
  position: relative;
  flex: 1;
  display: flex;
  padding-right: 52px;
  .chat {
    position: relative;
    padding: 8px 16px;
    min-height: 40px;
    background-color: #fefefe;
    line-height: 24px;
    border-radius: 8px;
    word-break: break-all;
    &::before {
      content: '';
      position: absolute;
      top: 14px;
      left: -6px;
      border-top: 6px solid transparent;
      border-right: 6px solid #fefefe;
      border-bottom: 6px solid transparent;
      border-left: none;
    }
  }
}

.avatar-box {
  width: 40px;
  height: 40px;
  margin-right: 12px;
}
</style>
