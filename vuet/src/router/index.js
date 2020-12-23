import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddActivity from "../components/addActivity/AddActivity";
import AddClient from "../components/addClient/AddClient";
import ShowActivities from "../components/showActivities/ShowActivities";
import ShowClients from "../components/showClients/ShowClients";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/showActivities'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
    path: '/addActivity',
    component: AddActivity
    },
    {
      component: AddClient,
      path: '/addClient'

    },
    {
      component: ShowActivities,
      path: '/showActivities'
    },
    {
      component: ShowClients,
      path: '/showClients'
    }
  ]
})
