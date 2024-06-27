/**
 * showNavbar：是否展示顶部导航栏，true-展示 false-不展示，默认false
 * showNavbarLeftIcon-是否展示顶部导航栏的左侧图标，true-展示 false-不展示，默认true
 * showNavbarRightIcon-是否展示顶部导航栏的右侧图标，true-展示 false-不展示，默认false
 */
export default [
  {
    path: '/jisu-area',
    name: 'JisuArea',
    component: () => import('@/views/jisu/jisu-area.vue'),
    meta: { title: '地区' }
  }
]
