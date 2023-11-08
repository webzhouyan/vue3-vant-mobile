import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
  ],
  shortcuts: {
    'flex-xy-center': 'flex items-center justify-center',
    'flex-y-center': 'flex items-center',
    'flex-x-center': 'flex justify-center',
  },
})
