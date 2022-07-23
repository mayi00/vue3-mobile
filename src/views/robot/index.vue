<script setup name="Robot">
import { ref, reactive, getCurrentInstance, watch, nextTick } from 'vue'
import ChatRight from './ChatRight.vue'
import ChatLeft from './ChatLeft.vue'
import { questionArr } from './question'
const { proxy } = getCurrentInstance()

const chatList = reactive([])
const inputValue = ref('')
const chatEl = ref(null)
const inputRef = ref(null)

// 发送
function handleSend() {
  if (inputValue.value) {
    const result = {
      role: 'user',
      type: 'text',
      content: inputValue.value
    }
    chatList.push(result)
    proxy.$refs.inputRef.focus()
    setTimeout(() => {
      getAnswer(inputValue.value)
      inputValue.value = ''
    }, 0)
  }
}
// 获取答案
function getAnswer(word) {
  const question = questionArr.find(item => {
    return item.question.includes(word)
  })
  const result = {
    role: 'robot',
    type: 'text',
    content: ''
  }
  if (question) {
    result.content = question.answer
  } else {
    result.content = '小爱正在学习中~'
  }
  chatList.push(result)
}

watch(chatList, () => {
  nextTick(() => {
    setTimeout(() => {
      // chatEl.value.scrollTo({ top: 100, behavior: 'smooth' })
      // chatEl.value.scrollBottom = 0
    }, 16)
  })
})
</script>

<template>
  <div class="container robot-container">
    <!-- 聊天内容 -->
    <div class="chat-box">
      <ul ref="chatEl" class="chat-list">
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
