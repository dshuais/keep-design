<!--
 * @Author: dushuai
 * @Date: 2023-12-30 17:53:17
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-08 15:16:47
 * @Description: App
-->
<script setup lang="ts">
// import { KButton } from '@lib-template/components';
// import type { KButtonInstance } from '@lib-template/components/src/k-button/k-button.vue'
</script>

<template>
  <div>启动测试</div>
  <div>默认</div>
  <KButton>引入挂载</KButton>
  <KButton type="primary">引入挂载</KButton>
  <div>主要</div>
  <KButton type="primary">引入挂载</KButton>

  <div>全局挂载</div>
  <k-button type="primary">全局挂载</k-button>
  <k-button>123</k-button>
</template>
