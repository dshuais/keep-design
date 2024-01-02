/*
 * @Author: dushuai
 * @Date: 2024-01-02 17:21:44
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-02 18:39:40
 * @description: 构建
 */
import delPath from "../utils/delpath";
import { series, parallel, src, dest } from "gulp";
import { pkgPath, componentPath } from "../utils/paths";
import less from 'gulp-less'
import autoprefixer from 'gulp-autoprefixer'
import run from "../utils/run";

/**
 * 删除之前打包的文件
 */
export const removeDist = () => {
  return delPath(`${pkgPath}/keepDesign`);
}

/**
 * 打包样式
 */
export const buildStyle = () => {
  return src(`${componentPath}/src/**/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/keepDesign/lib/src`))
    .pipe(dest(`${pkgPath}/keepDesign/es/src`))
}

/**
 * 打包组件
 */
export const buildComponent = () => {
  run('pnpm build', componentPath)
}

export default series(
  async () => removeDist(),
  parallel(
    // async () => buildStyle(),
    async () => buildComponent()
  )
);
