import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import ChartA from './views/ChartA.vue'
import ChartB from './views/ChartB.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HelloWorld,
    },
    {
        path: '/charta',
        component: ChartA
    },
    {
        path: '/chartb',
        component: ChartB
    }
  ]
})