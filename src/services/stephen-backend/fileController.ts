// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';
import {FileUploadBiz} from '@/enums/FileUploadBizEnum';

/** 文件上传 文件上传(使用COS对象存储) POST /file/upload */
export async function uploadFile(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: { biz: FileUploadBiz },
  body: {},
  options?: { [p: string]: any },
) {
  return request<API.BaseResponseString>('/file/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
      uploadFileRequest: undefined,
      ...params['uploadFileRequest'],
    },
    data: body,
    ...(options || {}),
  });
}
