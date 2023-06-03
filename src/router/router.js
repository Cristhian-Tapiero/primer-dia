import { createRouter, createWebHistory } from "vue-router";
import buscadorVue from "../views/buscador.vue";
import searchSectionVue from "../views/search-section.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        component: buscadorVue
    },{
        path: '/search',
        component: searchSectionVue
    }]
})
export default router