import { createApp } from 'vue';
import App from './App.vue';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

import NotFound from './components/nav/NotFound.vue';

import { createRouter, createWebHistory } from 'vue-router';

const router = new createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      path: '/teams',
      name: 'teams',
      components: { default: TeamsList, footer: TeamsFooter }, // alias: '/' -> load this component bu doesn't change the route
      children: [
        {
          path: ':teamId',
          name: 'team-members',
          component: TeamMembers,
          props: true
        }
      ]
    },
    { path: '/users', components: { default: UsersList, footer: UsersFooter } },

    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition;
    }
    return { left: 0, top: 0 };
  }
});

/* router.beforeEnter: (to, from, next) => {
    // ...
} */

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  console.log('Global beforeEach');
  /* if (to.name === 'team-members') {
    next();
  } else {
    next({ name: 'team-members', params: { teamId: 't2' } });
  } */
  next();
});

const app = createApp(App);

app.use(router);

app.mount('#app');
