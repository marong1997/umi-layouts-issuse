export default [
  {
    path: '/',
    name: '首页',
    component: '@/layouts/index',
    access: 'login',
    routes: [
      {
        name: '首页',
        path: '/',
        component: '@/pages/index',
        access: 'login',
      },
      {
        name: 'user',
        path: '/user',
        access: 'user',
        routes: [
          {
            name: 'user/一级页面',
            path: '/user/one',
            component: '@/pages/users',
          },
          {
            name: '/user/detail/:type',
            path: '/user/detail/:type',
            component: '@/pages/users/type',
            access: 'user/detail/:type',
            hideInMenu: true,
          },
        ],
      },

      {
        name: 'version',
        path: '/version',
        component: '@/pages/version',
        access: 'version',
      },
    ],
  },
];
