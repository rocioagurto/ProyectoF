import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Firebase from 'firebase'


Vue.use(Router)

const router= new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/create',
      name: 'create',
      component: () => import(/* webpackChunkName: "login" */ './components/Create.vue'),
      meta: {
        requireLogin: true
      }
    },

    {
      path: '/home',
      name: 'home',
      component: Home,
     
    },
  
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },

    {
      path: '*',
      component: () => import(/* webpackChunkName: "login" */ './components/Pagina404.vue')
    }
  ]
})
router.beforeEach((to, from, next) =>{
  let user = Firebase.auth().currentUser;
  let authRequired = to.matched.some(route => route.meta.requireLogin)
  if(!user && authRequired){
    next('home')
  }else
    next()
})
export default router;
