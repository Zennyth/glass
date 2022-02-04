import { createRouter, createWebHistory } from 'vue-router'

import DashboardLayout from "@/layouts/web/DashboardLayout"

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/",
    children: [ 
      {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router