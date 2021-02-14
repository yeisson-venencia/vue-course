import { createApp } from 'vue';
import App from './App.vue';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

import { createRouter, createWebHistory } from 'vue-router';

const router = new createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/teams', component: TeamsList },
    { path: '/users', component: UsersList },
    { path: '/teams/:teamId', component: TeamMembers }
  ],
  linkActiveClass: 'active'
});

const app = createApp(App);

app.use(router);

app.mount('#app');
