<!--
 * @Description  : 反应时间测试
 * @Author       : hzf
 * @Date         : 2022-08-28
 * @LastEditors  : hzf
 * @LastEditTime : 2022-09-09
 * @FilePath     : \vue-mobile\src\views\reaction-time\index.vue
-->

<script setup name="ReactionTime">
import { getRandom } from '@/utils/utils.js'

const start = ref(true)
const wait = ref(false)
const end = ref(false)
const desc = ref('反应时间测试')
const tip = ref('当背景颜色从红色变成绿色时，请点击。')
const reactionTime = ref('')

// 点击页面
function handleReaction () {
  if (reactionTime.value) return
  if (start.value) {
    desc.value = '请等待...'
    tip.value = ''
    start.value = false
    wait.value = true
    end.value = false
    waitStart()
  } else if (wait.value) {
  } else if (end.value) {
    endTiming()
    desc.value = `${reactionTime.value} ms`
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

const timer = ref(null)
// 等待
function waitStart () {
  clearTimeout(timer)
  const waitTime = getRandom(1000, 6000)
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
  <div class="common-container">
    <main class="common-main reaction-time-wrapper" :class="{ start: start, wait: wait, end: end}">
      <div class="reaction-time-box" @click="handleReaction">
        <h3 class="desc">{{ desc }}</h3>
        <p class="tip">{{ tip }}</p>
        <van-button v-show="reactionTime" plain type="primary" @click="handleAgain">再测一次</van-button>
      </div>
    </main>
  </div>
</template>

<style lang="less" scoped>
.reaction-time-wrapper {
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
