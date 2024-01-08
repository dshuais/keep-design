/*
 * @Author: dushuai
 * @Date: 2024-01-02 17:21:44
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-08 11:31:33
 * @description: 构建
 */
import delPath from '../utils/delpath';
import { series, parallel, src, dest } from 'gulp';
import { pkgPath, componentPath } from '../utils/paths';
import sassLang from 'sass'
import glupSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import run from '../utils/run';
const sass = glupSass(sassLang);

/**
 * 删除之前打包的文件
 */
export const removeDist = () => {
  return delPath(`${pkgPath}/KEEP_DESIGN`);
};

/**
 * 打包样式
 */
export const buildStyle = () => {
  // return src(`${componentPath}/src/**/**.less`)
  //   .pipe(less())
  //   .pipe(autoprefixer())
  //   .pipe(dest(`${pkgPath}/keepDesign/lib/src`))
  //   .pipe(dest(`${pkgPath}/keepDesign/es/src`));
  return src(`${componentPath}/src/**/style/**.scss`)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/KEEP_DESIGN/lib/src`))
    .pipe(dest(`${pkgPath}/KEEP_DESIGN/es/src`))
};

/**
 * 打包组件
 */
export const buildComponent = () => {
  run('pnpm build', componentPath);
};

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
