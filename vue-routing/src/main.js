import { createApp } from 'vue';
import App from './App.vue';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

import { createRouter, createWebHistory } from 'vue-router';

const router = new createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      path: '/teams',
      component: TeamsList, // alias: '/' -> load this component bu doesn't change the route
      children: [{ path: ':teamId', component: TeamMembers, props: true }]
    },
    { path: '/users', component: UsersList },

    { path: '/:notFound(.*)', redirect: '/' }
  ],
  linkActiveClass: 'active'
});

const app = createApp(App);

app.use(router);

app.mount('#app');
