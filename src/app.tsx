import { AvatarDropdown, AvatarName, Footer } from '@/components';
import { history, RunTimeLayoutConfig } from '@umijs/max';
import React from 'react';
import Settings from '../config/defaultSettings';
import { UnAccessiblePage } from '@/pages/Exception';
import { requestConfig } from '@/requestConfig';
import { getLoginUser } from '@/services/stephen-backend/userController';

const loginPath = '/user/login';

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<InitialState> {
  const initialState = {
    currentUser: undefined,
  };
  // 如果不是登录页面，执行
  const { location } = history;
  try {
    if (location.pathname !== loginPath) {
      const res = await getLoginUser();
      if (res.code === 0) {
        initialState.currentUser = res.data as any;
        // 保存token信息到本地
        localStorage.setItem('stephen-token', res?.data?.token || '');
      }
    }
  } catch (error: any) {}
  // 返回一个 Promise<InitialState> 类型的值
  return initialState;
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
// @ts-ignore
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    avatarProps: {
      src: initialState?.currentUser?.userAvatar,
      title: <AvatarName />,
      render: (_, avatarChildren) => {
        return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
      },
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    menuHeaderRender: undefined,
    // 自定义 403 页面
    unAccessible: <UnAccessiblePage />,
    childrenRender: (children) => {
      return <>{children}</>;
    },
    ...Settings,
  };
};

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request = requestConfig;
