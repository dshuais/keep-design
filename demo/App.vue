<!--
 * @Author: dushuai
 * @Date: 2023-12-30 17:53:17
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-03 15:45:49
 * @Description: App
-->
<script setup lang="ts">
import { KButton } from '@lib-template/components'
</script>

<template>
  <div>启动测试</div>
  <div>默认</div>
  <KButton>引入挂载</KButton>
  <KButton type="primary">引入挂载</KButton>
  <div>主要</div>
  <Button type="primary">引入挂载</Button>
  <div>全局挂载</div>
  <k-button type="primary">全局挂载</k-button>
</template>
