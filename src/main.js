import Vue from 'vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import store from './stores/store';

import App from './App.vue'
import Login from './components/Auth/Login';
import Singup from './components/Auth/Singup';
import Todo from './components/Todo';
import Tasks from './components/Tasks';
import NotesModal from './components/NotesModal';

// import { component } from 'vue/types/umd';


Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  {
    path:'/',
    component: Login,
    name: 'login'
  },
  {
    path:'/signup',
    component: Singup,
    name: 'signup'
  },
  {
    path:'/todo',
    component: Todo,
    name: 'todo',
    children:[
      {
        path:'/list/:id',
        components: { tasks:Tasks },
        name: 'tasks',
        children:[
          {
            path:'task/:taskId',
            components: {notes: NotesModal},
            name: 'notes'
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
  base: '/',
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
