export const render = (oldRender: any) => {
  // 判断权限跳转路由
  oldRender();
};

export async function getInitialState(): Promise<{
  [key: string]: any;
}> {
  return {};
}
