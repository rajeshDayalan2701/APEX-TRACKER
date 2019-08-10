import Vue from 'vue';
import Router from 'vue-router';
import Search from './components/search.vue';
import Profile from './components/profile.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search
    },
    {
      path: '/profile/:platform/:gamertag',
      name: 'Profile',
      component: Profile
    }
  ]
})