// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /captcha/captcha */
export async function getCaptcha(options?: { [key: string]: any }) {
  return request<API.BaseResponseCaptcha>('/captcha/captcha', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /captcha/check */
export async function checkCaptchaCode(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.checkCaptchaCodeParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean>('/captcha/check', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /captcha/create */
export async function createCaptcha(options?: { [key: string]: any }) {
  return request<any>('/captcha/create', {
    method: 'GET',
    ...(options || {}),
  });
}
