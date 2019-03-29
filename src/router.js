import vue from 'vue'
import vueRouter from 'vue-router'

vue.use(vueRouter);

const routes = [{
        path: "/",
        component: () =>
            import ('./view/ShowBlogs.vue')
    },
    {
        path: "/add",
        component: () =>
            import ('./view/AddBlog.vue')
    },
    {
        path: "/blog/:id",
        component: () =>
            import ('./view/SingleBlog.vue')
    },
    {
        path: "/edit/:id",
        component: () =>
            import ('./view/EditBlog.vue')
    }, {
        path: "*",
        redirect: "/"
    }
];

const router = new vueRouter({
    routes,
    mode: "history"
});


export default router;