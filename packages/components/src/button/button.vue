<!--
 * @Author: dushuai
 * @Date: 2023-12-30 18:03:18
 * @LastEditors: dushuai
 * @LastEditTime: 2023-12-30 21:39:17
 * @Description: button组件
-->
<script setup lang="ts">
import { computed } from 'vue';
import './index.less'
defineOptions({
  name: 'k-button'
})
type ButtonProps = {
  type?: string
}

const buttonProps = defineProps<ButtonProps>()

const buttonClass = computed(() => {
  return { [`k-button--${buttonProps.type}`]: buttonProps.type }
})

</script>
<template>
  <button class="k-button" :class="buttonClass">
    <slot />
  </button>
</template>
