/*
 * @Description  : 自动引入 vant组件和 components 文件夹下的组件
 * @Author       : hzf
 * @Date         : 2022-08-27
 * @LastEditors  : hzf
 * @LastEditTime : 2022-08-27
 * @FilePath     : \vue-mobile\vite\plugins\components.js
 */

import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

export default function createComponents() {
  return Components({
    dirs: ['src/components'], // 默认导入组件文件夹，组件会自动引入
    resolvers: [VantResolver()], // Vant 组件自动按需引入
  })
}