import {ProForm, ProFormText, ProFormTextArea, ProFormUploadDragger} from '@ant-design/pro-components';
import '@umijs/max';
import { Grid, message, Modal, UploadProps } from 'antd';
import React, { useState } from 'react';
import { updatePostUsingPost } from '@/services/stephen-backend/postController';
import { MdEditor, TagTreeSelect } from '@/components';
import { uploadFileUsingPost } from '@/services/stephen-backend/fileController';

interface UpdateProps {
  oldData?: API.Post;
  onCancel: () => void;
  onSubmit: (values: API.PostUpdateRequest) => Promise<void>;
  visible: boolean;
}

const { useBreakpoint } = Grid;

/**
 * 更新节点
 *
 * @param fields
 */
const handleUpdate = async (fields: API.PostUpdateRequest) => {
  const hide = message.loading('正在更新');
  try {
    const res = await updatePostUsingPost(fields);
    if (res.code === 0 && res.data) {
      hide();
      message.success('更新成功');
      return true;
    }else {
      return false;
    }
  } catch (error: any) {
    hide();
    message.error(`更新失败${error.message}, 请重试!`);
    return false;
  }
};
const UpdatePostModal: React.FC<UpdateProps> = (props) => {
  const { oldData, visible, onSubmit, onCancel } = props;
  const scene = useBreakpoint();
  const isMobile = !scene.md;
  // 帖子封面
  const [cover, setCover] = useState<string>();
  // 帖子内容
  const [content, setContent] = useState<string>(oldData?.content ?? '');
  const [loading, setLoading] = useState<boolean>(false);

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
            biz: 'post_cover',
          },
          {
            file: file,
          },
          file,
        );
        if (res.code === 0 && res.data) {
          onSuccess(res.data);
          setCover(res.data);
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
  if (!oldData) {
    return <></>;
  }

  return (
    <Modal destroyOnClose title={'更新帖子'} width={"1200"} onCancel={() => onCancel?.()} open={visible} footer>
      <ProForm<API.PostUpdateRequest>
        loading={loading}
        onFinish={async (values) => {
          setLoading(true);
          const success = await handleUpdate({
            ...values,
            id: oldData.id,
            cover,
            content,
          });
          if (success) {
            onSubmit?.(values);
          }
          setLoading(false);
        }}
        layout={isMobile ? 'vertical' : 'horizontal'}
      >
        <ProFormTextArea initialValue={oldData?.title} name="title" label="标题" />
        <ProFormText initialValue={oldData?.content} name="content" label="内容">
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
        <TagTreeSelect
          name={'tags'}
          label={'标签'}
          initialValue={oldData.tags ? JSON.parse(oldData.tags) : []}
        />
      </ProForm>
    </Modal>
  );
};
export default UpdatePostModal;
