/*
 * @Author: dushuai
 * @Date: 2024-01-03 15:18:58
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-08 11:35:11
 * @description: 发布npm脚本
 */
import run from '../utils/run';
import { pkgPath } from '../utils/paths';
import { series } from 'gulp';

export const publishComponent = async () => {
  // console.log(`${pkgPath}\\KEEP_DESIGN`);

  run('release-it', `${pkgPath}\\KEEP_DESIGN`);
};

export default series(async () => publishComponent());
