<!--
 * @Description   : 聊天消息右侧组件
 * @Author        : huazf
 * @Date          : 2022-07-23
 * @LastEditors  : hzf
 * @LastEditTime : 2022-08-28
 * @FilePath     : \vue-mobile\src\views\robot\components\chat-right.vue
-->
<script setup name="ChatRight">
defineProps({
  chat: { type: Object, required: true }
})

// 引入图片
function getImg(name) {
  return new URL(`/src/assets/images/${name}`, import.meta.url).href
}
</script>

<template>
  <div class="chat-right-container">
    <div class="chat-box">
      <p class="chat">{{ chat.content }}</p>
    </div>
    <van-image class="avatar-box" fit="cover" round :src="getImg('user.jpg')"></van-image>
  </div>
</template>

<style lang="less" scoped>
.chat-right-container {
  display: flex;
  justify-content: flex-end;
}

.chat-box {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-left: 52px;
  .chat {
    position: relative;
    padding: 8px 16px;
    min-height: 40px;
    background-color: #c2d9ea;
    line-height: 24px;
    border-radius: 8px;
    word-break: break-all;
    &::after {
      content: '';
      position: absolute;
      top: 14px;
      right: -6px;
      border-top: 6px solid transparent;
      border-right: none;
      border-bottom: 6px solid transparent;
      border-left: 6px solid #c2d9ea;
    }
  }
}

.avatar-box {
  width: 40px;
  height: 40px;
  margin-left: 12px;
}
</style>
