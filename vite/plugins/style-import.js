/*
 * @Description  : Toast、Dialog 等组件样式的自动引入
 * @Author       : hzf
 * @Date         : 2022-08-28
 * @LastEditors  : hzf
 * @LastEditTime : 2022-08-28
 * @FilePath     : \vue-mobile\vite\plugins\style-import.js
 */
import { createStyleImportPlugin, VantResolve } from 'vite-plugin-style-import'

export default function createStyleImport() {
  return createStyleImportPlugin({
    resolves: [ VantResolve() ],
    libs: [
      {
        libraryName: 'vant',
        esModule: true,
        resolveStyle: (name) => {
          return `../es/${name}/style`
        }
      }
    ]
  })
}
