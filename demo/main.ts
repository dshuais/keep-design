/*
 * @Author: dushuai
 * @Date: 2024-01-02 15:44:32
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-09 16:04:13
 * @description: 心平气和
 */
import { createApp } from 'vue';
import App from './App.vue';
// import keepDesign from '@keep-design/components';
import { KButton } from '@keep-design/components'

const app = createApp(App);

// app.use(keepDesign);
app.use(KButton);
app.mount('#app');
