/*
 * @Description  : VConsole 调试工具配置
 * @Author       : MDT
 * @Date         : 2024-01-13
 * @LastEditors  : MDT
 * @LastEditTime : 2024-01-14
 * @FilePath     : \h5-vite5\vite\plugins\vconsole.js
 */
import { viteVConsole } from 'vite-plugin-vconsole'
import * as path from 'path'

export default function createVConsole(env) {
  const enabledENV = ['test']
  return viteVConsole({
    entry: path.resolve('src/main.js'),
    // 是否启用
    enabled: enabledENV.includes(env.VITE_NODE_ENV),
    config: {
      log: { maxLogNumber: 100 },
      // 主题颜色 'dark'|'light'
      theme: 'light'
    }
  })
}
