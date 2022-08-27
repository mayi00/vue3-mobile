/*
 * @Description  : setup扩展插件，支持在script标签中使用name属性
 *                 usage: <script setup name="Home"></script>
 * @Author       : hzf
 * @Date         : 2022-08-27
 * @LastEditors  : hzf
 * @LastEditTime : 2022-08-27
 * @FilePath     : \vue-mobile\vite\plugins\setup-extend.js
 */

import vueSetupExtend from 'vite-plugin-vue-setup-extend'

export default function createSetupExtend() {
  return vueSetupExtend()
}
