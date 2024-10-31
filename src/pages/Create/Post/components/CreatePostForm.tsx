import React, { useState } from 'react';
import { ProForm, ProFormText, ProFormUploadDragger } from '@ant-design/pro-components';
import { MdEditor, TagTreeSelect } from '@/components';
import { Grid, message, UploadProps } from 'antd';
import { uploadFileUsingPost } from '@/services/stephen-backend/fileController';
import { addPostUsingPost } from '@/services/stephen-backend/postController';
import { history } from '@@/core/history';
import { FileUploadBiz } from '@/enums/FileUploadBizEnum';

const { useBreakpoint } = Grid;

/**
 * 创建帖子
 * @param values
 */
const handleCreatePost = async (values: API.PostAddRequest) => {
  try {
    const res = await addPostUsingPost(values);
    if (res.code === 0 && res.data) {
      message.success('创建成功3s之后跳转到创建的帖子页');
      setTimeout(() => {
        history.push(`/post/${res.data}`);
      }, 3000);
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
 * 创建帖子表单
 * @constructor
 */
const CreatePostForm: React.FC = () => {
  const scene = useBreakpoint();
  const isMobile = !scene.md;
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
        const res = await uploadFileUsingPost(
          {
            biz: FileUploadBiz.POST_COVER,
          },
          {
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
    <ProForm<API.PostVO>
      onFinish={async (values) => {
        await handleCreatePost({
          ...values,
          cover,
        });
      }}
      layout={isMobile ? 'vertical' : 'horizontal'}
    >
      <ProFormText name="title" label="标题" />
      <ProFormText name="content" label="内容">
        <MdEditor
          value={content}
          onChange={(value) => setContent(value)}
          placeholder={'请填写内容'}
        />
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
      <TagTreeSelect name={'tags'} label={'标签'} />
    </ProForm>
  );
};

export default CreatePostForm;
