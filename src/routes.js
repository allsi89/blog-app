import Home from './components/Home.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import Details from './components/post/Details.vue';
import PostList from './components/post/PostList.vue';
import CreatePost from './components/post/create.vue';
import EditPost from './components/post/Edit.vue';
import UserPosts from './components/post/UserPosts.vue';

export default [
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
  
    { path: '/post/list', name: 'post', component: PostList },
    { path: '/post/create', name: 'post', component: CreatePost },
    { path: '/post/edit/:id', name: 'post', component: EditPost },
    { path: '/post/details/:id', name: 'post', component: Details },

    { path: '/user/posts/:id', name: 'post', component: UserPosts }
]