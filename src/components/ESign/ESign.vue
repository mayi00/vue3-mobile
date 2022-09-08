<!--
 * @Description  : 基于 vue-esign 封装的电子签名组件
 * @Author       : hzf
 * @Date         : 2022-09-08
 * @LastEditors  : hzf
 * @LastEditTime : 2022-09-08
 * @FilePath     : \vue-mobile\src\components\ESign\ESign.vue
-->
<script setup name="ESign">
import vueEsign from 'vue-esign'

const props = defineProps({
  bgColor: { type: String, default: ''},
  lineWidth: { type: String||Number, default: 4 },
  lineColor: { type: String, default: '#000000'},
})
const emit = defineEmits(['on-confirm'])

const esign = ref(null)
const width = ref(100)
const height = ref(100)
const lineW = ref(4)
const orientation = ref('portrait')
watch(() => props.lineWidth, () => {
  lineW.value = Number(props.lineWidth)
}, {
  immediate: true
})

window.addEventListener('resize', resizeChange)
resizeChange()
// 屏幕大小变化
function resizeChange() {
  const clientWidth = document.documentElement.clientWidth || document.body.clientWidth
  const clientHeight = document.documentElement.clientHeight || document.body.clientHeight
  console.log(clientWidth, clientHeight)
  if (clientWidth < clientHeight) {
    // 竖屏
    width.value = clientWidth * 0.88
    height.value = clientHeight
    orientation.value = 'portrait'
  } else {
    // 横屏
    width.value = clientWidth
    height.value = clientHeight * 0.88
    orientation.value = 'landscape'
  }
}
// 清空签名
function handleClear() {
  esign.value.reset()
}
// 确定
function handleConfirm() {
  esign.value.generate().then(res => {
    emit('on-confirm', res)
  }).catch(err => {
    console.log(err)
  })
}
onBeforeUnmount(() => {
  // 移除事件监听
  window.removeEventListener('resize', resizeChange)
})
</script>
  
<template>
  <div class="esign-container">
    <div class="esign-warpper">
      <div class="esign-tip-box">
        <p class="esign-tip">请在此签名</p>
      </div>
      <div class="esign-box">
        <vue-esign v-if="orientation === 'portrait'" ref="esign" v-model:bgColor="bgColor" :lineWidth="lineW" :lineColor="lineColor" :width="width" :height="height" />
        <vue-esign v-if="orientation === 'landscape'" ref="esign" v-model:bgColor="bgColor" :lineWidth="lineW" :lineColor="lineColor" :width="width" :height="height" />
      </div>
    </div>
    <div class="btn-warpper">
      <div class="btn clear-btn" @click.stop="handleClear"><span class="btn-text">清空</span></div>
      <div class="btn confirm-btn" @click.stop="handleConfirm"><span class="btn-text">确定</span></div>
    </div>
  </div>
</template>
  
<style lang="less" scoped>
// 纵向
@media screen and (orientation: portrait) {
  .esign-container {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    height: 100%;
  }

  .esign-warpper {
    position: relative;
    flex: 1;
    background-color: #f9f9f9;
    .esign-tip-box {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      z-index: 9;
      .esign-tip {
        font-size: 44px;
        color: #ddd;
        transform: rotate(90deg);
      }
    }
    .esign-box {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
    }
  }

  .btn-warpper {
    display: flex;
    flex-direction: column;
    width: 12vw;
    z-index: 99;
    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      height: 100%;
      .btn-text {
        transform: rotate(90deg);
      }
    }
    .clear-btn {
      background-color: #fff;
      color: #1989fa;
      border: 1PX solid #1989fa;
    }
    .confirm-btn {
      background-color: #1989fa;
      color: #fff;
    }
  }
}

// 横向
@media screen and (orientation: landscape) {
  .esign-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .esign-warpper {
    position: relative;
    flex: 1;
    background-color: #f9f9f9;
    .esign-tip-box {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      z-index: 9;
      .esign-tip {
        font-size: 36px;
        color: #ddd;
      }
    }
    .esign-box {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
    }
  }

  .btn-warpper {
    display: flex;
    height: 12vh;
    z-index: 99;
    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      height: 100%;
    }
    .clear-btn {
      background-color: #fff;
      color: #1989fa;
      border: 1PX solid #1989fa;
    }
    .confirm-btn {
      background-color: #1989fa;
      color: #fff;
    }
  }
}
</style>