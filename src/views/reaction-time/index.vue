<script setup>
import { getRandom } from '@/utils/utils.js'

defineOptions({
  name: 'ReactionTime'
})

const start = ref(true)
const wait = ref(false)
const end = ref(false)
const title = ref('反应时间测试')
const tip = ref('当背景颜色从红色变成绿色时，请点击。')
const reactionTime = ref('')
const startTime = ref('')
let timer

onBeforeUnmount(() => {
  clearTimeout(timer)
})

// 点击页面
function handleReaction() {
  if (reactionTime.value) return
  if (start.value) {
    title.value = '请等待...'
    tip.value = ''
    start.value = false
    wait.value = true
    end.value = false
    waitStart()
  } else if (end.value) {
    endTiming()
    title.value = `${reactionTime.value} ms`
    start.value = true
    wait.value = false
    end.value = false
    if (reactionTime.value < 100) {
      tip.value = '你确定没有作弊吗？'
    } else if (reactionTime.value < 150) {
      tip.value = '苏炳添在比赛时反应时间最短的一次为124ms'
    } else if (reactionTime.value < 200) {
      tip.value = '博尔特在北京奥运会决赛时的反应时间为165ms'
    } else if (reactionTime.value < 500) {
      tip.value = '一般人反应时间在300ms左右'
    } else if (reactionTime.value < 1000) {
      tip.value = '这个反应时间有点慢呀'
    } else if (reactionTime.value < 2000) {
      tip.value = '你是不是喝多了啊？'
    } else {
      tip.value = '你睡着了吗？'
    }
  }
}
// 等待
function waitStart() {
  clearTimeout(timer)
  const waitTime = getRandom(1000, 6000)
  timer = setTimeout(() => {
    start.value = false
    wait.value = false
    end.value = true
    title.value = '请点击！'
    startTiming()
  }, waitTime)
}
// 开始计时
function startTiming() {
  startTime.value = new Date()
}
// 结束计时
function endTiming() {
  reactionTime.value = new Date() - startTime.value
  startTime.value = ''
}
// 再测一次
function handleAgain() {
  reactionTime.value = ''
  handleReaction()
}
</script>

<template>
  <main class="reaction-time-main" :class="{ start: start, wait: wait, end: end }">
    <div class="reaction-time-box" @click="handleReaction">
      <h3 class="title">{{ title }}</h3>
      <p class="tip">{{ tip }}</p>
      <van-button v-show="reactionTime" plain type="primary" @click="handleAgain">再测一次</van-button>
    </div>
  </main>
</template>

<style lang="less" scoped>
.reaction-time-main {
  width: 100%;
  height: 100%;
  color: #fff;
  cursor: pointer;
}

.reaction-time-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .title {
    font-size: 28px;
    line-height: 48px;
  }

  .tip {
    font-size: 16px;
    line-height: 40px;
  }
}

.start {
  background-color: #2b87d1;
}

.wait {
  background-color: #ee0a24;
}

.end {
  background-color: #07c160;
}
</style>
