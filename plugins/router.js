import { createRouter, createWebHistory } from "vue-router";




const routes = [
    { path: '/', name: 'home', component: () => import('../src/views/Home.vue') },
    { path:'/about',name:'about',component: ()=>import('../src/views/About.vue')}, 
    { path:'/skill',name:'skill',component: ()=>import('../src/views/Skill.vue')} ,
    { path:'/contact',name:'contact',component: ()=>import('../src/views/Contact.vue')} 

];

const router = createRouter({
    routes,
    history:createWebHistory(),
})

export default  router