<script setup>
const refSign = ref(null)
// 撤销操作
function undo() {
  refSign.value.undoSignature()
}
// 保存操作
function save() {
  const { isEmpty, data } = refSign.value.saveSignature()
  console.log(isEmpty, data)
}
</script>

<template>
  <div class="box">
    <VueSignaturePad ref="refSign" width="300px" height="150px" />
  </div>
  <div>
    <button @click="save">保存</button>
    <button @click="undo">撤销</button>
  </div>
</template>

<style scoped>
.box {
  width: 300px;
  height: 150px;
  border: 1px solid red;
}
</style>
