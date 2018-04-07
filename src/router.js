import Router from 'vue-router'

import ListView from './components/ListView/_ListView.vue'

export default (Vue) => {
  Vue.use(Router)

  return new Router({
    routes: [
      {
        path: '/',
        name: 'list-view',
        component: ListView,
      },
    ],
  })
}
