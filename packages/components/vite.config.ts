/*
 * @Author: dushuai
 * @Date: 2024-01-02 16:11:16
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-05 12:21:07
 * @description: viteconfig
 */
/// <reference types="vitest" />

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  // 单元测试
  test: {
    environment: 'happy-dom'
  },

  build: {
    outDir: 'es', // 打包后文件目录
    minify: true, // 是否压缩
    rollupOptions: {
      external: ['vue', /\.less/], // 忽略打包vue文件
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
      entry: './index.ts' // 打包入口文件
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
      tsConfigFilePath: '../../tsconfig.json'
    }),
    {
      name: 'style',
      generateBundle(options, bundle) {
        // 这里可以获取打包后的文件目录以及代码code
        const keys: (keyof typeof bundle)[] = Object.keys(bundle);

        for (const key of keys) {
          const bundler: typeof bundle = bundle[
            key
          ] as unknown as typeof bundle;
          // rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件

          this.emitFile({
            type: 'asset',
            fileName: key as string, // 文件名不变 **.less
            source: (bundler.code as unknown as string).replace(
              /\.less/g,
              '.css'
            )
          });
        }
      }
    }
  ]
});
