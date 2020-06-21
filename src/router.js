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
      path: '/nosotros',
      name: 'Nosotros',
      component: () => import(/* webpackChunkName: "login" */ './components/Nosotros')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import(/* webpackChunkName: "create" */ './components/Create.vue'),
      meta: {
        requireLogin: true
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },

    {
      path: '*',
      component: () => import(/* webpackChunkName: "notfound" */ './components/NotFound.vue')
    }
  ]
})
// Authentication
router.beforeEach((to, from, next) =>{
  // Debe estar registrado como usuario en firebase
  let user = Firebase.auth().currentUser;
  // Debe tener autorizacion o estar logueado para acceder a create
  let authRequired = to.matched.some(route => route.meta.requireLogin)
  //Si no está logueado puede acceder al home
  if(!user && authRequired){
    next('home')
  //si está logueado tiene acceso libre
  }else
    next()
})
export default router;
