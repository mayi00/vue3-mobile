<script setup>
import ChatUser from './chat-user.vue'
import ChatRobot from './chat-robot.vue'
import api from '@/api/qingyunke'

defineOptions({
  name: 'Qingyunke'
})

// 输入的内容
const inputValue = ref('')
const refInput = ref(null)
// 聊天内容记录
const chatList = reactive([])
const refChatMain = ref(null)

watch(chatList, () => {
  nextTick(() => {
    refChatMain.value.scrollTo({ top: refChatMain.value.scrollHeight, behavior: 'smooth' })
  })
})

init()
function init() {
  const chat = {
    role: 'robot',
    type: 'text',
    content: '你好，我是菲菲智能聊天机器人。'
  }
  chatList.push(chat)
}
// 发送
function handleSend() {
  if (inputValue.value) {
    const chat = {
      role: 'user',
      type: 'text',
      content: inputValue.value
    }
    chatList.push(chat)
    getAnswer(inputValue.value)
    inputValue.value = ''
    refInput.value.focus()
  }
}
// 输入框键盘回车
function handleKeydownEnter(e) {
  if (e.keyCode === 13) {
    handleSend()
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
  api
    .getQingyunke(params)
    .then(res => {
      if (res.result === 0) {
        chat.content = res.content.replace(/{br}/g, '</br>').replace(/\[/g, '【').replace(/\]/g, '】')
      } else {
        chat.content = '正在学习中~'
      }
    })
    .catch(() => {
      chat.content = '出错了~'
    })
    .finally(() => {
      chatList.push(chat)
    })
}
</script>

<template>
  <div class="chat-container">
    <!-- 聊天内容 -->
    <main ref="refChatMain" class="main">
      <ul class="chat-list">
        <li v-for="(item, index) in chatList" :key="index" class="chat-item">
          <ChatUser v-if="item.role === 'user'" :chat="item"></ChatUser>
          <ChatRobot v-else :chat="item"></ChatRobot>
        </li>
      </ul>
    </main>
    <!-- 输入区域 -->
    <footer class="footer">
      <textarea
        ref="refInput"
        v-model.trim="inputValue"
        class="textarea"
        placeholder="请输入..."
        maxlength="1000"
        @keydown.enter="handleKeydownEnter"
      ></textarea>
      <van-button type="primary" size="small" class="send-btn" @click="handleSend">发送</van-button>
    </footer>
  </div>
</template>

<style lang="less" scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f1f1f1;
}

.main {
  flex: 1;
  padding: 8px;
  overflow-y: auto;

  .chat-list {
    min-height: 100%;

    .chat-item {
      padding: 8px 0;
    }
  }
}

.footer {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  height: 56px;
  background-color: #f3f3f3;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);

  .textarea {
    flex: 1;
    padding: 4px 8px;
    height: 40px;
    resize: none;
    line-height: 20px;
    border: 0;
    border-radius: 8px;

    // 隐藏滚动条
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .send-btn {
    margin-left: 8px;
    width: 50px;
  }
}
</style>
