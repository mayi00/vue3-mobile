/*
 * @Description  : VConsole 调试工具配置
 * @Author       : hzf
 * @Date         : 2024-01-13
 * @LastEditors  : hzf
 * @LastEditTime : 2024-01-14
 * @FilePath     : \h5-vite5\vite\plugins\vconsole.js
 */
import { viteVConsole } from 'vite-plugin-vconsole'
import * as path from 'path'

export default function createVConsole(env) {
  return viteVConsole({
    entry: path.resolve('src/main.js'),
    // 是否启用
    enabled: env.VITE_NODE_ENV !== 'test',
    config: {
      log: { maxLogNumber: 100 },
      // 主题颜色 'dark'|'light'
      theme: 'light'
    }
  })
}
