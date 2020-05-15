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
          name: '首页',
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
      path: '/allocate',
      name: '调配管理',
      meta: {
        index: 2,
        icon: 'el-icon-collection-tag',
        title: '调配管理'
      },
      component: () => import('@/common/layout'),
      children: [
        {
          path: '/allocate/list',
          name: '出货单',
          component: () => import('@/page/allocate'),
          meta: {
            title: '出货单'
          }
        },
        {
          path: '/allocate/create-shipment',
          name: '新建出货单',
          component: () => import('@/page/allocate/create-allocate-shipment'),
          hidden: true,
          meta: {
            title: '新建出货单'
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
  mode: 'history'
})

export default router
