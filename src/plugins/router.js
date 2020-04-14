import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home.vue';
import Login from '@/components/auth/Login.vue';
import Register from '@/components/auth/Register.vue';
import Details from '@/components/post/Details.vue';

const routes =  [
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/product/:id', name: 'product', component: Details }
]   

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes
});