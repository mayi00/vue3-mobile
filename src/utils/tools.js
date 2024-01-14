/*
 * @Description  : 本项目专用的一些工具函数
 * @Author       : hzf
 * @Date         : 2024-01-14
 * @LastEditors  : hzf
 * @LastEditTime : 2024-01-14
 * @FilePath     : \h5-vite5\src\utils\tools.js
 */

// 引入 /assets/images 目录下的图片
export const getAssetsImage = name => {
  return new URL(`/src/assets/images/${name}`, import.meta.url).href
}
