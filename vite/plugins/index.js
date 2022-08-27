/*
 * @Description  : vite 插件入口
 * @Author       : hzf
 * @Date         : 2022-08-27
 * @LastEditors  : hzf
 * @LastEditTime : 2022-08-27
 * @FilePath     : \vue-mobile\vite\plugins\index.js
 */

import vue from '@vitejs/plugin-vue'
import createAutoImport from './auto-import'
import createComponents from './components'
import createSetupExtend from './setup-extend'
import createVConsole from './vconsole'

export default function createVitePlugins(viteEnv, isBuild) {
  const plugins = [
    vue(),
    createAutoImport(),
    createComponents(),
    createSetupExtend(),
    createVConsole(viteEnv)
  ]

  return plugins
}
