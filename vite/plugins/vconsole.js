/*
 * @Description  : VConsole 调试工具配置
 * @Author       : hzf
 * @Date         : 2022-08-27
 * @LastEditors  : hzf
 * @LastEditTime : 2022-08-28
 * @FilePath     : \vue-mobile\vite\plugins\vconsole.js
 */

import { viteVConsole } from 'vite-plugin-vconsole'
import path from 'path'

export default function createVConsole(env) {
  console.log(env.VITE_NODE_ENV)
  return viteVConsole({
    entry: path.resolve('src/main.js'),
    localEnabled: env.VITE_NODE_ENV === 'test', // 本地是否启用
    enabled: env.VITE_NODE_ENV === 'test', // 是否启用，test 环境启用
    config: {
      maxLogNumber: 1000,
      theme: 'light' // 主题颜色 'dark'|'light'
    }
  })
}
