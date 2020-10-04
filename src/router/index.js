import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import RegisterPolice from '../views/RegisterPolice.vue'
import Login from '../views/Login.vue'
import BO from '../views/BO.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/inicio',
    name: 'Home',
    component: Home  
  },
  {
    path: '/bo',
    name: 'BO',
    component: BO 
  },
  {
    path: '/cadastro',
    name: 'Register',
    component: Register  
  },
  {
    path: '/cadastro/policial',
    name: 'RegisterPolice',
    component: RegisterPolice 
  },
  {
    path: '/login',
    name: 'Login',
    component: Login  
  },
  {
    path: '/*',
    name: 'Index',
    component: Index
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
