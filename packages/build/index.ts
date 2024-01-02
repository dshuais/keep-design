/*
 * @Author: dushuai
 * @Date: 2024-01-02 17:21:44
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-02 17:45:13
 * @description: 心平气和
 */
import delPath from "../utils/delpath";
import { series, parallel } from "gulp";
import { pkgPath, componentPath } from "../utils/paths";

// 删除之前打包的文件
export const removeDist = () => {
  return delPath(`${componentPath}/packages/keepDesign`);
}

export default series(async () => removeDist());
