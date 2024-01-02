/*
 * @Author: dushuai
 * @Date: 2024-01-02 16:11:16
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-02 16:21:08
 * @description: viteconfig
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    outDir: 'es', // 打包后文件目录
    minify: false, // 是否压缩
    rollupOptions: {
      external: ['vue'], // 忽略打包vue文件
      // input: ['index.ts'],
      output: {
        globals: {
          vue: 'Vue'
        },
        dir: 'dist'
      }
    },
    lib: {
      entry: './index.ts', // 打包入口文件
      name: 'keepDesign',
      fileName: 'keepDesign',
      formats: ['es', 'umd', 'cjs']
    }
  },
  plugins: [vue()],
})
