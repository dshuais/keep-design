/*
 * @Author: dushuai
 * @Date: 2024-01-02 18:09:35
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-05 11:58:22
 * @description: 执行命令脚本
 */
import { spawn } from 'child_process';

export default async (command: string, path: string) => {
  // cmd表示命令，args代表参数，如 rm -rf  rm就是命令，-rf就为参数
  const [cmd, ...args] = command.split(' ');
  return new Promise((resolve) => {
    const app = spawn(cmd, args, {
      cwd: path, // 执行命令的路径
      stdio: 'inherit', // 输出共享给父进程
      shell: true // mac不需要开启，windows下git base需要开启支持
    });
    app.on('close', resolve);
  });
};
