<script setup name="Robot">
import ChatRight from './components/chat-right.vue'
import ChatLeft from './components/chat-left.vue'
import { getQingyunke } from '@/api/robot/index.js'

const inputValue = ref('') // 输入的内容
const inputEl = ref(null)
const chatList = reactive([]) // 聊天内容记录
const chatEl = ref(null)

watch(chatList, () => {
  nextTick(() => {
    chatEl.value.scrollTo({ top: chatEl.value.scrollHeight, behavior: 'smooth' })
  })
})

// 输入框键盘回车
function handleKeydownEnter(e) {
  if (e.keyCode === 13) {
    handleSend()
  }
}
// 输入框失焦
function handleBlur() {}
// 发送
function handleSend() {
  if (inputValue.value) {
    getAnswer(inputValue.value)
    const chat = {
      role: 'user',
      type: 'text',
      content: inputValue.value
    }
    chatList.push(chat)
    setTimeout(() => {
      inputValue.value = ''
    }, 0)
    inputEl.value.focus()
  }
}
// 获取答案
function getAnswer(val) {
  const chat = {
    role: 'robot',
    type: 'text',
    content: ''
  }
  const params = {
    key: 'free',
    appid: '0',
    msg: val
  }
  getQingyunke(params).then(res => {
    if (res.result === 0) {
      chat.content = res.content.replace(/{br}/g, '</br>')
        .replace(/\[/g, '【')
        .replace(/\]/g, '】')
      chatList.push(chat)
    }
  }).catch(() => {
    chat.content = '正在学习中~'
    chatList.push(chat)
  })
}
</script>

<template>
  <div class="common-container">
    <!-- 聊天内容 -->
    <main ref="chatEl" class="common-main chat-wrapper">
      <ul class="chat-list">
        <li class="chat-item" v-for="(item, index) in chatList" :key="index">
          <chat-right v-if="item.role === 'user'" :chat="item"></chat-right>
          <chat-left v-else :chat="item"></chat-left>
        </li>
      </ul>
    </main>
    <!-- 输入区域 -->
    <div class="common-footer input-wrapper">
      <textarea ref="inputEl" v-model.trim="inputValue" class="textarea" placeholder="请输入..." maxlength="100" @keydown.enter="handleKeydownEnter" @blur="handleBlur"></textarea>
      <van-button type="primary" size="small" round class="send-btn" @click="handleSend">发送</van-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.chat-wrapper {
  padding: 0 8px 56px;
  .chat-list {
    min-height: 100%;
    .chat-item {
      padding: 8px 0;
    }
  }
}

.input-wrapper {
  min-height: 56px;
  max-height: 100px;
  background-color: var(--primary-bg-color);

  .textarea {
    flex: 1;
    padding: 4px 16px;
    height: 40px;
    line-height: 32px;
    border-radius: 20px;
    // 隐藏滚动条
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .send-btn {
    margin-left: 8px;
    width: 48px;
  }
}
</style>
