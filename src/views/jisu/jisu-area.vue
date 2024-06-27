<script setup>
// import { areaTree } from './areaTree'

defineOptions({
  name: 'JisuArea'
})

// delNull(areaTree)
function delNull(arr) {
  arr.forEach(item => {
    delete item.weathercode
    delete item.hasaqi
    delete item['2345id']
    delete item['2345code']
    delete item.sinacode
    delete item.sinaurl
    delete item.baiduid
    if (item.children && item.children.length > 0) {
      delNull(item.children)
    }
  })
  console.log(JSON.stringify(arr))
}

// getArea()
function getArea() {
  const depth1 = []
  const depth2 = []
  const depth3 = []
  areaTile.forEach(item => {
    item.children = []
    switch (item.depth) {
      case '1':
        depth1.push(item)
        break
      case '2':
        depth2.push(item)
        break
      case '3':
        depth3.push(item)
        break
    }
  })

  depth3.forEach(depth3Item => {
    depth2.find(depth2Item => {
      if (depth2Item.id === depth3Item.parentid) {
        depth2Item.children.push(depth3Item)
      }
      return depth2Item.id === depth3Item.parentid
    })
  })

  depth2.forEach(depth2Item => {
    depth1.find(depth1Item => {
      if (depth1Item.id === depth2Item.parentid) {
        depth1Item.children.push(depth2Item)
      }
      return depth1Item.id === depth2Item.parentid
    })
  })
  console.log(JSON.stringify(depth1))
}

// init()
function init() {
  const arr = str.split('), (')
  const areaList = []
  arr.forEach(item => {
    const subList = item.split("','")
    const ary = []
    subList.forEach(sub => {
      let a
      a = sub.replace(/'/g, '')
      a = a === 'NULL' ? null : a
      ary.push(a)
    })
    const obj = {
      id: ary[0],
      name: ary[1],
      parentid: ary[2],
      parentname: ary[3],
      topid: ary[4],
      topname: ary[5],
      districtcode: ary[6],
      idcardcode: ary[7],
      zipcode: ary[8],
      areacode: ary[9],
      licenseplate: ary[10],
      code: ary[11],
      shortcode: ary[12],
      weathercode: ary[13],
      hasaqi: ary[14],
      '2345id': ary[15],
      '2345code': ary[16],
      sinacode: ary[17],
      sinaurl: ary[18],
      baiduid: ary[19],
      lat: ary[20],
      lng: ary[21],
      depth: ary[22]
    }
    areaList.push(obj)
  })
  console.log(areaList)
  console.log(JSON.stringify(areaList))
}
</script>

<template>
  <div class=""></div>
</template>
