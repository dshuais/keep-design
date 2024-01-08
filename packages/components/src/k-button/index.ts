/*
 * @Author: dushuai
 * @Date: 2023-12-30 18:02:53
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-08 17:21:48
 * @Description: 组件导出文件
 */
import _Button from './k-button.vue';
import { withInstall } from '../../script/utils/install'

export const KButton = withInstall(_Button);
export default KButton;

// export * from './k-button.vue';
export * from './k-button'

/**
 * 定义instance类型
 */
export type KButtonInstance = InstanceType<typeof _Button>;
