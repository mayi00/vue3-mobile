<!--
 * @Description  : 反应时间测试
 * @Author       : hzf
 * @Date         : 2022-08-28
 * @LastEditors  : hzf
 * @LastEditTime : 2022-08-28
 * @FilePath     : \vue-mobile\src\views\reaction-time\index.vue
-->

<script setup name="ReactionTime">
import { getRandom } from '@/utils/utils.js'

const start = ref(true)
const wait = ref(false)
const end = ref(false)
const desc = ref('反应时间测试')
const tip = ref('当背景颜色从红色变成绿色时，请点击。')

// 点击页面
function handleReaction () {
  if (start.value) {
    desc.value = '请等待...'
    tip.value = ''
    start.value = false
    wait.value = true
    end.value = false
    waitStart()
  } else if (wait.value) {
  } else if (end.value) {
    const reactionTime = endTiming()
    desc.value = `${reactionTime} ms`
    tip.value = '点击再次测试'
    start.value = true
    wait.value = false
    end.value = false
  }
}

const timer = ref(null)
// 等待
function waitStart () {
  clearTimeout(timer)
  const waitTime = getRandom(1000, 5000)
  timer.value = setTimeout(() => {
    start.value = false
    wait.value = false
    end.value = true
    desc.value = '请点击！'
    startTiming()
  }, waitTime)
}
const startTime = ref('')
// 开始计时
function startTiming() {
  startTime.value = new Date()
}
// 结束计时
function endTiming() {
  const reactionTime = new Date() - startTime.value
  startTime.value = ''
  return reactionTime
}
</script>

<template>
  <div class="common-container">
    <div class="common-main reaction-time-main" :class="{ start: start, wait: wait, end: end}">
      <div class="reaction-time-box" @click="handleReaction">
        <h3 class="desc">{{ desc }}</h3>
        <p class="tip">{{ tip }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.reaction-time-main {
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
  .desc {
    font-size: 28px;
    line-height: 50px;
  }
  .tip {
    font-size: 16px;
    line-height: 36px;
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
