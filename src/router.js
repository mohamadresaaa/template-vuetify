import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AboutMe from './views/AboutMe.vue';
import Blog from './views/‌Blog.vue';
import contactMe from './views/ContactMe.vue';
import notes from './views/notes/index.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about_me',
      name: 'aboutMe',
      component: AboutMe
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/contact_me',
      name: 'contactMe',
      component: contactMe
    },
    {
      path: '/notes',
      name: 'notes',
      component: notes
    }
  ]
})
