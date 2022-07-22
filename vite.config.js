import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import { viteVConsole } from 'vite-plugin-vconsole'
import postCssPxToRem from 'postcss-pxtorem'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

export default ({ mode }) => {
  // 获取当前环境变量
  const env = loadEnv(mode, process.cwd())
  console.log('>>> 当前环境==>', mode)
  console.log('>>> 环境变量==>', env)

  return defineConfig({
    // 项目根目录
    root: process.cwd(),
    // 公共基础路径
    base: env.VITE_NODE_ENV === 'development' ? '/' : '/vue3-demo/',
    // 环境配置
    mode,
    // 需要用到的插件
    plugins: [
      vue(),
      Components({
        dirs: ['src/components'], // 默认导入组件文件夹，组件会自动导入
        resolvers: [VantResolver()], // Vant 组件自动按需引入
      }),
      // vite-plugin-vue-setup-extend 插件可以在 script 标签中直接使用 name 属性:<script setup name="Home"></script>
      vueSetupExtend(),
      // VConsole 调试工具配置
      viteVConsole({
        entry: path.resolve('src/main.js'), // 入口文件，或者这样: [path.resolve('src/main.js')]
        localEnabled: mode === 'test', // 本地是否启用
        enabled: mode === 'test', // 是否启用，test 环境启用
        config: {
          maxLogNumber: 1000,
          theme: 'light' // 主题颜色 'dark'|'light'
        }
      })
    ],
    // 静态资源服务文件夹
    publicDir: 'public',
    resolve: {
      // 配置路径别名
      alias: {
        "@": path.join(__dirname, "./src")
      },
      // 导入时想要省略的扩展名列表
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    },
    css: {
      // 配置 CSS modules 的行为。选项将被传递给 postcss-modules
      modules: {},
      // 内联的 PostCSS 配置（格式同 postcss.config.js）
      postcss: {
        plugins: [
          postCssPxToRem({
            rootValue: 37.5, // 1rem 的大小
            propList: ['*'], // 需要转换的属性，*全部转换
            unitPrecision: 6 // 转换精度，保留的小数位数
          })
        ]
      },
      // 指定传递给 CSS 预处理器的选项，文件扩展名用作选项的键
      preprocessorOptions: {
        less: {
          avascriptEnabled: true,
          // 全局引入 less 变量 --方式 1
          additionalData: `@import "${path.resolve(__dirname, 'src/assets/style/variables.less')}"; `
          // 全局引入 less 变量 --方式 2
          // modifyVars: {
          //   hack: `true; @import (reference) "${path.resolve('src/assets/styles/variables.less')}";`,
          // }
        }
      },
      // 在开发过程中是否启用 sourcemap
      devSourcemap: true
    },
    // 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
    clearScreen: false,
    server: {
      host: '0.0.0.0',
      // 指定开发服务器端口
      // port: 5173,
      // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
      strictPort: false,
      // 在开发服务器启动时自动打开
      open: true,
      // 反向代理
      proxy: {
        '/api': {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
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
          drop_console: env.VITE_NODE_ENV === 'production',
          drop_debugger: env.VITE_NODE_ENV === 'production'
        }
      },
      // 启用/禁用 gzip 压缩大小报告
      reportCompressedSize: true,
      // chunk 大小警告的限制（以 kbs 为单位）
      chunkSizeWarningLimit: 500
    }
  })
}
