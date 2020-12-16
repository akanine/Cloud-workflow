import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/views/login/login.vue'
import Main from '@/views/main/main.vue'
import Home from '@/views/home/home.vue'
import Index from '@/views/index/index.vue'
import Users from '@/views/users/users.vue'
import Buy from '@/views/buy/buy.vue'

//admin
import admin from '@/views/admin/admin.vue'
import admin_resource from '@/views/admin/Resource.vue'
import admin_instance from '@/views/admin/Instance.vue'
import admin_response from '@/views/admin/Quality.vue'
import admin_user from '@/views/admin/Tenant.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/buy',
      name: 'Buy',
      component: Buy
    },

    //admin
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      children: [
        {
          path: '/admin/nodes',
          name: '资源管理',
          component: admin_resource,
        },
        {
        path: '/admin/proc_insts',
        name: '实例管理',
        component: admin_instance,
        },
        {
        path: '/admin/avg_response',
        name: '质量管理',
        component: admin_response,
        },
        {
        path: '/admin/users',
        name: '租户管理',
        component: admin_user,
        }
      ]
    }
  ]
})
