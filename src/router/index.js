import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

 const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      isSingle: true,
      component: () => import('@/common/layout'),
      meta: {
        index: 1,
        title: '首页',
        icon: 'el-icon-pie-chart',
      },
      children: [
        {
          path: 'dashboard',
          name: 'DashboardHome',
          meta: {
            index: 1,
            icon: 'el-icon-pie-chart',
            title: '首页',
          },
          component: () => import('@/page/dashboard'),
          hidden: true
        }
      ]
    },
    {
      path: '/product',
      name: 'Product',
      meta: {
        index: 2,
        icon: 'el-icon-collection-tag',
        title: '商品管理'
      },
      component: () => import('@/common/layout'),
      children: [
        {
          path: '/product/list',
          name: 'ProductList',
          component: () => import('@/page/product'),
          meta: {
            title: '商品列表'
          }
        }
      ]
    },
    {
      path: '/order',
      name: 'Order',
      meta: {
        index: 3,
        icon: 'el-icon-s-order',
        title: '订单管理'
      },
      component: () => import('@/common/layout'),
      children: [
        {
          path: '/order/list',
          name: 'OrderList',
          component: () => import('@/page/order'),
          meta: {
            title: '订单列表',
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        title: '登录',
      },
      component: () => import('@/page/login'),
      hidden: true
    },
    {
      path: '*',
      name: 'NotFound',
      meta: {
        title: '404',
      },
      component: () => import('@/page/notFound'),
      hidden: true
    }
  ],
  mode:'history'
})

export default router
