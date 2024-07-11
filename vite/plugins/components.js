/*
 * @Description  : 自动引入 vant组件和 components 文件夹下的组件
 * @Author       : MDT
 * @Date         : 2022-08-27
 * @LastEditors  : MDT
 * @LastEditTime : 2024-01-13
 * @FilePath     : \h5-vite5\vite\plugins\components.js
 */
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

export default function createComponents() {
  return Components({
    // 默认导入组件文件夹，组件会自动引入
    dirs: ['src/components'],
    // Vant 组件自动按需引入
    resolvers: [VantResolver()]
  })
}
