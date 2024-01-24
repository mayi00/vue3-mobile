<script setup>
import jisuapi from '@/api/jisuapi.js'

defineOptions({
  name: 'Home'
})

// 获取全部省份数据
function getAllProvince() {
  const params = { appkey: process.env.VITE_APP_JISUAPI_APPKEY }
  jisuapi.area
    .province(params)
    .then(res => {
      console.log('获取全部省份：', res)
    })
    .catch(err => {
      console.error('获取全部省份出错：', err)
    })
}
// 根据省份获取市
function getCity() {
  const params = {
    parentid: '51',
    appkey: process.env.VITE_APP_JISUAPI_APPKEY
  }
  jisuapi.area
    .city(params)
    .then(res => {
      console.log('根据省份获取市：', res)
    })
    .catch(err => {
      console.error('根据省份获取市出错：', err)
    })
}
// 根据省份获取市
function getTown() {
  const params = {
    parentid: '162',
    appkey: process.env.VITE_APP_JISUAPI_APPKEY
  }
  jisuapi.area
    .town(params)
    .then(res => {
      console.log('根据市获取区县：', res)
    })
    .catch(err => {
      console.error('根据市获取区县出错：', err)
    })
}
// 名人名言查询
function getYijuQuery() {
  const params = {
    appkey: process.env.VITE_APP_JISUAPI_APPKEY,
    num: 10,
    page: 1,
    classid: 82,
    authorid: ''
  }
  jisuapi.yiju
    .query(params)
    .then(res => {
      console.log('名人名言查询：', res)
    })
    .catch(err => {
      console.error('名人名言查询出错：', err)
    })
}
// 名言类型
function getYijuClass() {
  const params = {
    appkey: process.env.VITE_APP_JISUAPI_APPKEY
  }
  jisuapi.yiju
    .class(params)
    .then(res => {
      console.log('名言类型：', res)
    })
    .catch(err => {
      console.error('名言类型出错：', err)
    })
}
// 名言作者
function getYijuAuthor() {
  const params = {
    appkey: process.env.VITE_APP_JISUAPI_APPKEY
  }
  jisuapi.yiju
    .author(params)
    .then(res => {
      console.log('名言作者：', res)
    })
    .catch(err => {
      console.error('名言作者出错：', err)
    })
}
</script>

<template>
  <div class="">
    <van-button type="primary" @click="getAllProvince">获取全部省份数据</van-button>
    <van-button type="success" @click="getCity">根据省份获取市</van-button>
    <van-button type="default" @click="getTown">根据市获取区县</van-button>
    <van-button type="warning" @click="getYijuQuery">名人名言查询</van-button>
    <van-button type="danger" @click="getYijuClass">名言类型</van-button>
    <van-button type="danger" @click="getYijuAuthor">名言作者</van-button>
  </div>
</template>

<style lang="less" scoped></style>
