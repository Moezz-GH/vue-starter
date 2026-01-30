import { createRouter, createWebHistory } from 'vue-router'
import hero from '@/components/Hero/hero.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Hero',
      component: hero,
    },
   
  ],
  scrollBehavior(to, from, savedPosition) {
    // Scroll to element if hash is present
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    // Otherwise scroll to top
    return { top: 0 };
  }

});

export default router