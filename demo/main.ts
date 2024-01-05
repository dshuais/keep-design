import { createApp } from 'vue';
import App from './App.vue';
import libConponents from '@lib-template/components';

const app = createApp(App);

app.use(libConponents);
app.mount('#app');
