import Vue from 'vue'
import VueRouter from 'vue-router'
import {buildConfig} from '@/settings'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [{
            path: '/home',
            component: () => import('@/views/home/index'),
            name: 'home',
            meta: {
                pageNav: true,
                needLogin: true,
                name: "大屏首页",
            },
        }, {
            path: '/product',
            component: () => import('@/views/product/index'),
            name: 'product',
            meta: {
                pageNav: true,
                needLogin: true,
                name: "产销监测",
            },
        },]
    },
]


const router = new VueRouter({
    mode: 'hash',
    base: buildConfig.base,
    routes
})

export default router
