import { createRouter, createWebHistory } from 'vue-router';
export default createRouter({
    routes: [
        { path: "/", redirect: "/welcome" },
        {
            name: "欢迎页",
            path: '/welcome',
            component: () => import('../pages/Welcome.vue')
        },
        {
            name: "主页面",
            path: '/home',
            component: () => import('../pages/Home.vue'),
            children: [
                {
                    name: "检查界面",
                    path: "/home/check",
                    components: {
                        homeContainer: () => import('../components/Check.vue')
                    }
                },
                {
                    name: "入库界面",
                    path: "/home/entry",
                    components: {
                        homeContainer: () => import('../components/Entry.vue')
                    }
                }
            ]
        }
    ],
    history: createWebHistory()
})