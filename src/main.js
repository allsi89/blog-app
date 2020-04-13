import Vue from 'vue';
import App from './App.vue';
// import PostList from './components/PostList.vue'

// Vue.component('PostList', PostList);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')