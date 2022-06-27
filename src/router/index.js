import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/home.vue';

const routes = [
    {
        path: '/',
        redirect: '/home',
    }, //重定向   如果访问/结尾，就重定向到/home页面去
    {
        path: '/home',
        component: Home
    }, {
        path: '/login',
        component: () => import( /* webpackChunkName: "about" */'../views/userCenter/login/login.vue')
    },
    {
        path: '/ActivityDetail',
        component: () => import( /* webpackChunkName: "about" */'../views/act/ActivityDetail.vue')
    }
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})
export default router;