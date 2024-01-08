<!--
 * @Author: dushuai
 * @Date: 2023-12-30 18:03:18
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-08 14:36:32
 * @Description: button组件
-->
<script setup lang="ts">
import { computed } from 'vue';
// import type { KButtonProps, KButtonEmits } from './k-button';
import './style/index.scss';
defineOptions({
  name: 'k-button'
});
import _Button from './k-button.vue';

/**
 * 定义instance类型
 */
export type KButtonInstance = InstanceType<typeof _Button>;

/**
 * 定义props类型
 */
export type KButtonProps = {
  type?: string;
};

/**
 * 定义emit类型
 */
export type KButtonEmits = {
  (e: 'click'): void;
};

const buttonProps = defineProps<KButtonProps>();
const emit = defineEmits<KButtonEmits>();

const buttonClass = computed(() => {
  return { [`k-button--${buttonProps.type}`]: buttonProps.type };
});

function handleClick() {
  emit('click');
}
</script>
<template>
  <button class="k-button" :class="buttonClass" @click="handleClick">
    <slot />
  </button>
</template>
