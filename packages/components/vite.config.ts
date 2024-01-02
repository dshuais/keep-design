/*
 * @Author: dushuai
 * @Date: 2024-01-02 16:11:16
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-02 16:57:07
 * @description: viteconfig
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    outDir: 'es', // 打包后文件目录
    minify: false, // 是否压缩
    rollupOptions: {
      external: ['vue'], // 忽略打包vue文件
      input: ['index.ts'],
      output: [
        {
          format: 'es', // 打包格式
          entryFileNames: '[name].mjs', // 打包后的文件名
          preserveModules: true, // 让打包目录和我们目录对应
          exports: 'named',
          dir: '../keepDesign/es' // 打包后的文件目录
        },
        {
          format: 'cjs', // 打包格式
          entryFileNames: '[name].js', // 打包后的文件名
          preserveModules: true, // 让打包目录和我们目录对应
          exports: 'named',
          dir: '../keepDesign/lib' // 打包后的文件目录
        }
      ]
    },
    lib: {
      entry: './index.ts', // 打包入口文件
      // name: 'keepDesign',
      // fileName: 'keepDesign',
      // formats: ['es', 'umd', 'cjs']
    }
  },
  plugins: [
    vue(),
    dts({
      entryRoot: './src',
      outputDir: ['../keepDesign/es/src', '../keepDesign/lib/src'],
      // 指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: '../../tsconfig.json',
    })
  ],
})
