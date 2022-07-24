<script setup name="Robot">
import { ref, reactive, getCurrentInstance, watch, nextTick } from 'vue'
import ChatRight from './ChatRight.vue'
import ChatLeft from './ChatLeft.vue'
import { getQingyunke } from '@/api/robot.js'

const { proxy } = getCurrentInstance()

const chatList = reactive([])
const inputValue = ref('')
const chatEl = ref(null)
const inputRef = ref(null)

// 发送
function handleSend() {
  if (inputValue.value) {
    getAnswer(inputValue.value)
    const result = {
      role: 'user',
      type: 'text',
      content: inputValue.value
    }
    chatList.push(result)
    setTimeout(() => {
      inputValue.value = ''
    }, 0)
  }
  proxy.$refs.inputRef.focus()
}
// 获取答案
function getAnswer(word) {
  const result = {
    role: 'robot',
    type: 'text',
    content: ''
  }
  getQingyunke(word).then(res => {
    if (res.result === 0) {
      result.content = res.content.replace(/{br}/g, ' ')
      chatList.push(result)
    }
  }).catch(() => {
    result.content = '正在学习中~'
    chatList.push(result)
  })
}

watch(chatList, () => {
  nextTick(() => {
    chatEl.value.scrollTo({ top: chatEl.value.scrollHeight, behavior: 'smooth' })
  })
})
</script>

<template>
  <div class="container robot-container">
    <van-nav-bar title="聊天机器人" />
    <!-- 聊天内容 -->
    <div ref="chatEl" class="chat-box">
      <ul class="chat-list">
        <li class="chat-item" v-for="(item, index) in chatList" :key="index">
          <ChatRight v-if="item.role === 'user'" :chat="item"></ChatRight>
          <ChatLeft v-else :chat="item"></ChatLeft>
        </li>
      </ul>
    </div>
    <!-- 输入区域 -->
    <div class="input-box">
      <van-field ref="inputRef" v-model.trim="inputValue" rows="1" type="textarea" :autosize="{ maxHeight: 200 }" placeholder="请输入...">
        <template #button>
          <van-button size="small" type="primary" maxlength="100" @click="handleSend">发送</van-button>
        </template>
      </van-field>
    </div>
  </div>
</template>

<style lang="less" scoped>
.robot-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.chat-box {
  flex: 1;
  padding: 0 8px 8px;
  overflow-y: auto;

  .chat-list {
    min-height: 100%;
    .chat-item {
      padding: 8px 0;
    }
  }
}

.input-box {
  min-height: 60px;
  background-color: #fff;
  border-top: 1px solid #e4e7ed;
  border-bottom: 1px solid #e4e7ed;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
}
</style>
