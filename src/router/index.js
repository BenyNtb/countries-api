import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PaysDetails from '../views/PaysDetails.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  { path: '/:country', name: 'PaysDetails', component: PaysDetails },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
