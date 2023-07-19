import { defineConfig } from 'umi';
import routes from './src/routes';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  access: {
    strictMode: true,
  },
  // layout: {
  //   title: '',
  //   navTheme: 'dark',
  //   name: 'ant-design-pro',
  //   theme: 'PRO',
  //   locale: false,
  //   showBreadcrumb: true,
  //   siderWidth: 208,
  //   layout: 'side',
  //   contentWidth: 'Fluid',
  //   fixSiderbar: true,
  //   colorWeak: false,
  //   pwa: false,
  //   // logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  //   iconfontUrl: '',
  //   fixedHeader: true,
  // },
  mfsu: {},
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  fastRefresh: {},
});
