import vue from '@vitejs/plugin-vue'
import createAutoImport from './plugins/auto-import'
import createComponents from './plugins/components'
import createEslintPlugin from './plugins/eslint-plugin'
import createLegacy from './plugins/legacy'
import createSetupExtend from './plugins/setup-extend'
import createVConsole from './plugins/vconsole'

export default function createVitePlugins(env) {
  const plugins = [
    vue(),
    createAutoImport(),
    createComponents(),
    createEslintPlugin(),
    createLegacy(),
    createSetupExtend(),
    createVConsole(env)
  ]
  return plugins
}
