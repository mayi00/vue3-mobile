<script setup name="Home">
import jisuapi from '@/api/jisuapi'

// 获取全部省份数据
function getAllProvince() {
  const params = { appkey: process.env.VITE_APP_JISUAPI_APPKEY }
  jisuapi.area.province(params).then(res => {
    console.log('获取全部省份：', res)
  }).catch(err => {
    console.error('获取全部省份出错：', err)
  })
}
// 根据省份获取市
function getCity() {
  const params = {
    parentid: '51',
    appkey: process.env.VITE_APP_JISUAPI_APPKEY
  }
  jisuapi.area.city(params).then(res => {
    console.log('根据省份获取市：', res)
  }).catch(err => {
    console.error('根据省份获取市出错：', err)
  })
}
// 根据省份获取市
function getTown() {
  const params = {
    parentid: '162',
    appkey: process.env.VITE_APP_JISUAPI_APPKEY
  }
  jisuapi.area.town(params).then(res => {
    console.log('根据市获取区县：', res)
  }).catch(err => {
    console.error('根据市获取区县出错：', err)
  })
}
</script>

<template>
  <div class="">
    <van-button type="primary" @click="getAllProvince">获取全部省份数据</van-button>
    <van-button type="success" @click="getCity">根据省份获取市</van-button>
    <van-button type="default" @click="getTown">根据市获取区县</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<style lang="less" scoped></style>
