import { defineConfig, loadEnv } from 'vite'
import createVitePlugins from './vite'
import * as path from 'path'
import postCssPxToRem from 'postcss-pxtorem'

export default ({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())
  console.info('>>> 当前构建模式：', command)
  console.info('>>> 当前环境：', mode)

  return defineConfig({
    base: '/vue3-mobile/',
    define: {
      'process.env': env
    },
    plugins: [...createVitePlugins(env)],
    // 静态资源服务文件夹
    publicDir: 'public',
    resolve: {
      // 配置路径别名
      alias: {
        '@': path.join(__dirname, './src')
      }
    },
    css: {
      // 配置 CSS modules 的行为。选项将被传递给 postcss-modules
      modules: {},
      // 内联的 PostCSS 配置（格式同 postcss.config.js）
      postcss: {
        plugins: [
          postCssPxToRem({
            // 1rem 的大小
            rootValue: 37.5,
            // 需要转换的属性，*全部转换
            propList: ['*'],
            // 转换精度，保留的小数位数
            unitPrecision: 6
          })
        ]
      },
      // 在开发过程中是否启用 sourcemap
      devSourcemap: true
    },
    clearScreen: false,
    server: {
      host: '0.0.0.0',
      port: 8000,
      open: true,
      // 反向代理
      proxy: {
        // 极速数据API
        '/proxy-jisuapi': {
          target: env.VITE_APP_BASE_URL_JISUAPI,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/proxy-jisuapi/, '')
        },
        // 青云客聊天机器人接口
        [env.VITE_APP_BASE_API_QINGYUNKE]: {
          target: env.VITE_APP_BASE_URL_QINGYUNKE,
          changeOrigin: true,
          rewrite: path => path.replace(new RegExp(`^${env.VITE_APP_BASE_API_QINGYUNKE}`), '')
        }
      }
    },
    build: {
      // 启用/禁用 CSS 代码拆分
      cssCodeSplit: true,
      // Rollup 打包配置，打包文件按照类型分文件夹显示
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          // 打包文件拆分
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          }
        }
      },
      minify: 'terser',
      terserOptions: {
        // 生产环境打包移除 console debugger
        compress: {
          /* eslint-disable */
          drop_console: env.VITE_NODE_ENV === 'production',
          drop_debugger: env.VITE_NODE_ENV === 'production'
          /* eslint-enable */
        }
      },
      // 启用/禁用 gzip 压缩大小报告
      reportCompressedSize: false,
      // chunk 大小警告的限制（以 kbs 为单位）
      chunkSizeWarningLimit: 500
    }
  })
}
