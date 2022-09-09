<!--
 * @Description : Demo 页面
 * @Author      : huazf
 * @Date        : 2022-07-24
 * @LastEditors : huazf
 * @LastEditTime: 2022-07-24
 * @FilePath    : \vue-mobile\src\views\demo\index.vue
-->
<script setup name="Demo">
import tools from '@/utils/tools.js'
import { Toast } from 'vant'

const randomStr = reactive({
  length: '10',
  str: '',
  type: ['num']
})
// 获取随机字符串
function handleRandomStr() {
  const upper = randomStr.type.includes('upper')
  const lower = randomStr.type.includes('lower')
  const num = randomStr.type.includes('num')
  const str = tools.getRandomString(randomStr.length, upper, lower, num)
  if (str) {
    randomStr.str = str
  } else {
    Toast('请输入字符串长度')
  }
}
// 一键复制
function handleCopyStr() {
  copyText(randomStr.str)
}
// 一键复制文字
function copyText(text) {
  // 数字没有 .length 不能执行selectText 需要转化成字符串
  const textString = text.toString()
  let input = document.querySelector('#copy-input')
  if (!input) {
    input = document.createElement('input')
    input.id = 'copy-input'
    input.readOnly = 'readOnly' // 防止ios聚焦触发键盘事件
    input.style.position = 'absolute'
    input.style.left = '-1000px'
    input.style.zIndex = '-1000'
    document.body.appendChild(input)
  }
  input.value = textString
  // ios必须先选中文字且不支持 input.select()
  selectText(input, 0, textString.length)
  console.log(document.execCommand('copy'), 'execCommand')
  if (document.execCommand('copy')) {
    document.execCommand('copy')
    Toast('已复制到剪切板')
  }
  input.blur()
  // input自带的select()方法在苹果端无法进行选择，所以需要自己去写一个类似的方法
  // 选择文本。createTextRange(setSelectionRange)是input方法
  function selectText(textbox, startIndex, stopIndex) {
    if (textbox.createTextRange) { // ie
      const range = textbox.createTextRange()
      range.collapse(true)
      range.moveStart('character', startIndex) //起始光标
      range.moveEnd('character', stopIndex - startIndex) //结束光标
      range.select() //不兼容苹果
    } else {
      // firefox/chrome
      textbox.setSelectionRange(startIndex, stopIndex)
      textbox.focus()
    }
  }
}
</script>
  
<template>
  <div class="common-container">
    <main class="common-main">
      <div class="common-card base-card random-card">
        <h4 class="card-title">生成随机字符串</h4>
        <van-cell-group>
          <van-field v-model="randomStr.length" type="number" label="字符串长度" maxlength="3" placeholder="请输入生成的字符串长度"
            input-align="right" />
        </van-cell-group>
        <div class="type-warpper">
          <p class="type-title">选择生成的字符串中所包含的字符类型</p>
          <div class="type-box">
            <van-checkbox-group v-model="randomStr.type">
              <van-checkbox name="upper">大写字母</van-checkbox>
              <van-checkbox name="lower">小写字母</van-checkbox>
              <van-checkbox name="num">数字</van-checkbox>
            </van-checkbox-group>
          </div>
        </div>
        <div class="str-box">
          <p class="str">{{ randomStr.str }}</p>
          <div class="icon-box">
            <van-icon name="records" size="20px" @click="handleCopyStr" />
          </div>
        </div>
        <div class="btn-box">
          <van-button @click="randomStr.str = ''">清空</van-button>
          <van-button type="primary" @click="handleRandomStr">生成随机字符串</van-button>
        </div>
      </div>
    </main>
  </div>
</template>
  
<style lang="less" scoped>
.base-card {
  margin-bottom: 10px;

  .card-title {
    padding: 0 16px;
    font-size: 16px;
    line-height: 24px;
  }
}

// 生成随机字符串
.random-card {
  padding: 10px 0;
  .type-warpper {
    padding: 0 16px;
    border-bottom: 1px solid #ebedf0;
    .type-title,
    .type-box {
      padding: 8px 0;
    }
  }

  .str-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 16px;
    min-height: 44px;
    border-bottom: 1px solid #ebedf0;

    .str {
      flex: 3;
    }

    .icon-box {
      flex: 1;
      text-align: right;
    }
  }

  .btn-box {
    display: flex;
    justify-content: space-around;
    padding: 4px 16px 0;
  }
}
</style>
