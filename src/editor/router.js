import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/editor',
            name: 'editor',
            component: () => import( /* webpackChunkName: "editor" */ './views/editor.vue')
        },
    ]
})
