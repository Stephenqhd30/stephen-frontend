import React, { useState } from 'react';
import {
  PageContainer,
  ProCard,
  ProForm,
  ProFormText,
  ProFormUploadDragger,
} from '@ant-design/pro-components';
import { message, UploadProps } from 'antd';
import { MdEditor } from '@/components';
import { FileUploadBiz } from '@/enums/FileUploadBizEnum';
import { addPost } from '@/services/stephen-backend/postController';
import { uploadFile } from '@/services/stephen-backend/fileController';

/**
 * 创建帖子
 * @param values
 */
const handleCreatePost = async (values: API.PostAddRequest) => {
  try {
    const res = await addPost(values);
    if (res.code === 0 && res.data) {
      message.success('请在个人中心查看我创建的帖子');
      return true;
    } else {
      message.error(`创建失败${res.message}`);
      return false;
    }
  } catch (error: any) {
    message.error(`创建失败${error.message}`);
    return false;
  }
};

/**
 * 创建帖子页面
 * @constructor
 */
const CreatePostPage: React.FC = () => {
  // 帖子封面
  const [cover, setCover] = useState();
  // 帖子内容
  const [content, setContent] = useState<string>('');

  /**
   * 上传文章封面
   */
  const uploadProps: UploadProps = {
    name: 'file',
    multiple: false,
    maxCount: 1,
    customRequest: async (options: any) => {
      const { onSuccess, onError, file } = options;
      try {
        const res = await uploadFile(
          { biz: FileUploadBiz.POST_COVER },
          {
            biz: FileUploadBiz.POST_COVER,
            file: file,
          },
          file,
        );
        if (res.code === 0 && res.data) {
          setCover(res.data as any);
          onSuccess?.(res.data);
        } else {
          onError?.(res.message);
          message.error(`文件上传失败${res.message}`);
          setCover(undefined);
        }
      } catch (error: any) {
        onError(error);
        message.error('文件上传失败', error.message);
      }
    },
    onRemove() {
      setCover(undefined);
    },
  };
  return (
    <PageContainer title={false} breadcrumb={undefined}>
      <ProCard title={'创建帖子'}>
        <ProForm<API.PostVO>
          onFinish={async (values) => {
            await handleCreatePost({
              ...values,
              cover,
              content,
            });
          }}
          submitter={{
            searchConfig: {
              submitText: '新建帖子',
              resetText: '取消',
            },
          }}
        >
          <ProFormText name="title" label="标题" />
          <ProFormText name="content" label="内容">
            <MdEditor value={content} onChange={(value) => setContent(value)} />
          </ProFormText>
          <ProFormUploadDragger
            title={'上传帖子封面'}
            max={1}
            fieldProps={{
              ...uploadProps,
            }}
            name="cover"
            label={'封面'}
          />
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};

export default CreatePostPage;
