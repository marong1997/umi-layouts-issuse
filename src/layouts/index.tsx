import { ProLayout } from '@ant-design/pro-components';
import { history } from 'umi';
import routes from '@/routes';
import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import './index.less';

const flatten = (arr: any[], new_arr: any[] = []) => {
  arr?.forEach((item) => {
    const { routes, ...others } = item || {};
    if (routes?.length > 0) {
      new_arr.push(others, ...flatten(routes));
    } else {
      new_arr.push(others);
    }
  });
  return new_arr;
};

export default (props: any) => {
  const [pathname, set_pathname] = useState('/');
  const [user_avatar, set_user_avatar] = useState('');

  // 判断是否有权限，无权限展示403页面
  const renderContent = () => {
    return props?.children;
  };

  // 无layouts页面path获取
  const getNoLayoutPagePathArray = (menus: any) => {
    // 无需权限页面 + 研究生嵌入页面链接
    let paths: string[] = [];
    menus?.forEach((item: any) => {
      const {
        access,
        hideChildrenInMenu = false,
        menuRender = true,
        hideInMenu = false,
        routes,
        path,
      } = item || {};
      if (
        (access === 'login' || access === 'homePage') &&
        hideChildrenInMenu &&
        !menuRender &&
        !hideInMenu
      ) {
        paths.push(path);
        if (routes?.length > 0) {
          // 有子节点，需要flatten之后将其遍历path
          flatten(routes).forEach((children) => {
            const { path } = children || {};
            paths.push(path);
          });
        }
      }
    });
    return paths;
  };

  // 无layouts页面展示
  if (getNoLayoutPagePathArray(routes).includes(history.location.pathname)) {
    return renderContent();
  }

  return (
    <>
      <ProLayout
        layout="mix"
        fixSiderbar={true}
        splitMenus={true}
        siderMenuType="group"
        menu={{
          locale: false,
          request: async () => {
            return [
              {
                path: '/',
                name: '首页',
              },
              {
                name: '首页/一级路由',
                path: '/user',
                routes: [{ name: 'user/one', path: '/user/one' }],
              },
              {
                name: 'version',
                path: '/version',
              },
            ];
          },
        }}
        // route={{ path: '/', component: '@/layouts', routes }}
        location={{ pathname }}
        avatarProps={{
          render: (props, dom) => {
            return (
              <div>
                <img src={user_avatar} />
                hhhhh
              </div>
            );
          },
        }}
        actionsRender={(props) => {
          // if (props?.isMobile) return [];
          // if (typeof window === 'undefined') return [];
          return [<Button>hhh</Button>];
          // return [
          //   props.layout !== 'side' && document.body.clientWidth > 1400 ? (
          //     <SearchInput />
          //   ) : undefined,
          //   <InfoCircleFilled key="InfoCircleFilled" />,
          //   <QuestionCircleFilled key="QuestionCircleFilled" />,
          //   <GithubFilled key="GithubFilled" />,
          // ];
        }}
        headerTitleRender={(logo, title, _) => {
          return <>hhhhhh</>;
        }}
        menuItemRender={(item, dom) => {
          const { name, nameEn, source, icon, path } = item || {};
          return (
            <div
              onClick={() => {
                set_pathname(item?.path || '/');
                history.push(item?.path);
              }}
              key={path}
            >
              {dom}00
            </div>
          );
        }}
      >
        {renderContent()}
      </ProLayout>
    </>
  );
};
