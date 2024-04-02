<script setup>
import { getAssetsImage } from '@/utils/tools.js'

defineOptions({
  name: 'ChatRobot'
})

defineProps({
  chat: { type: Object, required: true }
})
</script>

<template>
  <div class="chat-robot-container">
    <van-image class="avatar-box" fit="cover" round :src="getAssetsImage('qingyunke.jpg')"></van-image>
    <div class="chat-box">
      <p class="chat" v-html="chat.content"></p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.chat-robot-container {
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
    background-color: #fff;
    line-height: 24px;
    border-radius: 8px;
    word-break: break-all;

    &::before {
      content: '';
      position: absolute;
      top: 14px;
      left: -6px;
      border-top: 6px solid transparent;
      border-right: 6px solid #fff;
      border-bottom: 6px solid transparent;
      border-left: none;
    }
  }
}

.avatar-box {
  margin-right: 8px;
  width: 40px;
  height: 40px;
}
</style>
