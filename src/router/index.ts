/*
 * @Author: kelvin
 * @Date: 2019-11-24 10:24:05
 * @LastEditTime: 2020-04-25 23:53:28
 * @FilePath: /demo/src/router/index.ts
 * @Description: router
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/viewIndex/index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/register',
        name: 'register',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/viewIndex/register.vue')
    },
    {
        path: '/books',
        name: 'books',
        component: () => import('./../views/viewBooks/index.vue')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
