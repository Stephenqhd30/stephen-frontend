import { ProColumns, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import { message, Modal } from 'antd';
import React from 'react';
import {updatePostUsingPost} from '@/services/stephen-backend/postController';

interface UpdateProps {
  oldData?: API.Post;
  onCancel: () => void;
  onSubmit: (values: API.PostUpdateRequest) => Promise<void>;
  visible: boolean;
  columns: ProColumns<API.Post>[];
}

/**
 * 更新节点
 *
 * @param fields
 */
const handleUpdate = async (fields: API.PostUpdateRequest) => {
  const hide = message.loading('正在更新');
  try {
    await updatePostUsingPost(fields);
    hide();
    message.success('更新成功');
    return true;
  } catch (error: any) {
    hide();
    message.error(`更新失败${error.message}, 请重试!`);
    return false;
  }
};
const UpdatePostModal: React.FC<UpdateProps> = (props) => {
  const { oldData, visible, onSubmit, onCancel, columns } = props;
  if (!oldData) {
    return <></>;
  }

  return (
    <Modal destroyOnClose title={'更新帖子'} onCancel={() => onCancel?.()} open={visible} footer>
      <ProTable
        type={'form'}
        form={{
          initialValues: oldData,
        }}
        columns={columns}
        onSubmit={async (values: API.PostUpdateRequest) => {
          const success = await handleUpdate({
            ...values,
            id: oldData?.id,
          });
          if (success) {
            onSubmit?.(values);
          }
        }}
      />
    </Modal>
  );
};
export default UpdatePostModal;
