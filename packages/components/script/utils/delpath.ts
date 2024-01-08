/*
 * @Author: dushuai
 * @Date: 2024-01-02 17:08:02
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-08 11:32:11
 * @description: 删除文件
 */
import fs from 'fs';
import { resolve } from 'path';
import { pkgPath } from './paths';

// 保留的文件
const stayFile = ['package.json', 'README.md'];

const delPath = async (path: string) => {
  let files: string[] = [];

  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(async (file: string) => {
      const curPath = resolve(path, file);
      if (fs.statSync(curPath).isDirectory()) {
        if (file != 'node_modules') await delPath(curPath);
      } else {
        if (!stayFile.includes(file)) fs.unlinkSync(curPath);
      }
    });

    if (path != `${pkgPath}/KEEP_DESIGN`) fs.rmdirSync(path);
  }
};

export default delPath;
