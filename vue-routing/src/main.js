import { createApp } from 'vue';
import { VueRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

const router = new VueRouter({
  history: createWebHistory(),
  routes: []
});

const app = createApp(App);

app.mount('#app');
