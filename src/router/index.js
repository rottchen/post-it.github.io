import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from '../views/CreateView.vue'
import EditView from '../views/EditView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: HomeView
  },
  {
    path: '/crear',
    name: 'crear',
    component: CreateView
  },
  {
    path: '/editar/:titulo/:categoria/:contenido',
    name: 'editar',
    component: EditView
  }
]

const router = new VueRouter({
  routes
})

export default router
