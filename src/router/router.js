import { createRouter, createWebHistory } from "vue-router";
import buscadorVue from "../views/buscador.vue";
import searchSectionVue from "../views/search-section.vue";
import aboutVue from "../views/about.vue";
const router = createRouter({
    history: createWebHistory('/primer-dia/'),
    routes: [{
        path: '/',
        component: buscadorVue
    },{
        path: '/search',
        component: searchSectionVue
    },{
        path: '/about',
        component: aboutVue
    }]
})
export default router