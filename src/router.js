import Vue from 'vue'
import Router from 'vue-router'

import ListView from './components/ListView/_ListView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list-view',
      component: ListView,
    },
  ],
})

