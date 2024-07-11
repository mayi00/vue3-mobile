/*
 * @Description  : 自动引入 vue 相关 API
 * @Author       : MDT
 * @Date         : 2022-08-27
 * @LastEditors  : MDT
 * @LastEditTime : 2022-08-27
 * @FilePath     : \vue-mobile\vite\plugins\auto-import.js
 */
import autoImport from 'unplugin-auto-import/vite'

export default function createAutoImport() {
  return autoImport({
    imports: [
      'vue',
      'vue-router',
      {
        vue: ['defineProps', 'defineEmits', 'defineExpose', 'withDefaults']
      },
      'pinia'
    ],
    eslintrc: {
      enabled: true,
      filepath: './vite/.eslintrc-auto-import.json',
      globalsPropValue: true
    },
    dts: false
  })
}
