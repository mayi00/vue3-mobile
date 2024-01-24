/**
 * showTopNavBar：是否展示顶部导航栏，true-展示 false-不展示，不设置则默认不展示
 * showTopNavBarLeftIcon-是否展示顶部导航栏的左侧图标，true-展示 false-不展示，不设置则默认展示
 * showTopNavBarRightIcon-是否展示顶部导航栏的右侧图标，true-展示 false-不展示，不设置则默认不展示
 */
export const routes = [
  {
    path: '/',
    redirect: '/quick-entry'
  },
  {
    path: '/quick-entry',
    name: 'QuickEntry',
    component: () => import('@/views/quick-entry/index.vue'),
    meta: {
      title: '快捷入口列表'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '主页',
      showTopNavBar: true,
      showTopNavBarRightIcon: true
    }
  },
  {
    path: '/qingyunke',
    name: 'Qingyunke',
    component: () => import('@/views/qingyunke/index.vue'),
    meta: {
      title: '聊天机器人',
      showTopNavBar: true,
      showTopNavBarLeftIcon: false
    }
  },
  {
    path: '/reaction-time',
    name: 'ReactionTime',
    component: () => import('@/views/reaction-time/index.vue'),
    meta: {
      title: '反应时间测试'
    }
  },
  {
    path: '/aes',
    name: 'Aes',
    component: () => import('@/views/aes/index.vue'),
    meta: {
      title: 'AES加解密',
      showTopNavBar: true
    }
  }
]
