import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASEPATH : '/',
  routes: [
    {
      path: '*',
      name: '404',
      component: () => import('@/pages/Main')
    },
    {
      path: '/home',
      name: 'Main',
      component: () => import('@/pages/Main')
    },
    {
      path: '/work',
      name: 'Work',
      component: () => import('@/pages/Work')
    },
    {
      path: '/work/:id',
      name: 'Detail',
      component: () => import('@/pages/Detail')
    },
    {
      path: '/tech',
      name: 'Tech',
      component: () => import('@/pages/Tech')
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: () => import('@/pages/Contacts')
    },

    /** Routes for admin panel */

    {
      path: '/admin',
      name: 'Admin',
      component: () => import('@/pages/Admin')
    },
    {
      path: '/admin/addwork',
      name: 'AddWork',
      component: () => import('@/pages/Admin/AddWork')
    },
    {
      path: '/admin/addtech',
      name: 'AddTech',
      component: () => import('@/pages/Admin/AddTech')
    },
    {
      path: '/admin/works',
      name: 'Works',
      component: () => import('@/pages/Admin/Works')
    }
    
    /******************************/
  ]
})
