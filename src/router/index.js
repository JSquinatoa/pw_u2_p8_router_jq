import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClimaView from '../views/ClimaView.vue'
import ContadorView from '../views/ContadorView.vue'
import EstudianteTablaView from '../views/EstudianteTablaView.vue'
import EstudianteView from '../views/EstudianteView.vue'
import FormularioLibroView from '../views/FormularioLibroView.vue'
import HolaMundoView from '../views/HolaMundoView.vue'
import PreguntaView from '../views/PreguntaView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/estudiante/:cedula',
    name: 'estudianteview',
    component: EstudianteView
  },
  {
    path: '/FormularioLibro',
    name: 'FormularioLibroView',
    component: FormularioLibroView
  },
  {
    path: '/HolaMundo',
    name: 'HolaMundoView',
    component: HolaMundoView
  },
  {
    path: '/Pregunta',
    name: 'PreguntaView',
    component: PreguntaView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Clima',
    name: 'ClimaView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ClimaView.vue')
  },
  {
    path: '/contador/numeros',
    name: 'ContadorView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContadorView.vue')
  },
  {
    path: '/EstudianteTabla',
    name: 'EstudianteTablaView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EstudianteTablaView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
