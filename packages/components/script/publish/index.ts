/*
 * @Author: dushuai
 * @Date: 2024-01-03 15:18:58
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-03 18:35:04
 * @description: 发布npm脚本
 */
import run from "../utils/run";
import { pkgPath } from "../utils/paths";
import { series } from "gulp";

export const publishComponent = async () => {
  console.log(`${pkgPath}\\keepDesign`);

  run("release-it", `${pkgPath}\\keepDesign`)
}

export default series(async () => publishComponent());
