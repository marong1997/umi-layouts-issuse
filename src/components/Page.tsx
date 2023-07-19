import React from 'react';
import {
  PageContainer,
  RouteContext,
  RouteContextType,
} from '@ant-design/pro-layout';
import { Link } from 'umi';
import RouteConfig from '@/routes';

const route_component_enum = (route_enum: {} = {}, arr: any[] = []) => {
  arr?.forEach((item) => {
    const { path, component, routes } = item;
    route_enum[path] = component ? true : false;
    if (routes?.length > 0) {
      route_component_enum(route_enum, routes);
    }
  });
  return route_enum;
};

const route_map_enum = route_component_enum({}, RouteConfig);

/* 处理面包屑的跳转逻辑，如果页面不存在或者是当前页面就不可跳转 */
const itemRender = (
  route: any,
  params: object,
  routes: any[],
  paths: string[],
) => {
  // const headOrLast =
  //   routes.indexOf(route) === routes.length - 1 || routes.indexOf(route) === 0;
  return !route_map_enum?.[route.path] ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={route.path}>{route.breadcrumbName}</Link>
  );
};

interface IPageProps {
  children: React.ReactNode | React.ReactNode[];
  header?: any;
  tabList?: {
    tab: string;
    key: string;
    disabled?: boolean;
    component?: React.ReactElement;
  }[];
  onTabChange?: (props: any) => void;
  tabActiveKey?: string;
  footer?: any;
  className?: any;
  style?: any;
}

const Page = (props: IPageProps) => {
  const { children, header, ...restProps } = props;

  return (
    <RouteContext.Consumer>
      {(value: RouteContextType) => {
        return (
          <PageContainer
            header={{
              ...header,
              breadcrumb: {
                routes:
                  header?.breadcrumb?.routes || value?.breadcrumb?.routes || [],
                itemRender,
              },
            }}
            {...restProps}
          >
            {children}
          </PageContainer>
        );
      }}
    </RouteContext.Consumer>
  );
};

export default Page;
