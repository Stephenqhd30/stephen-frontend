import { ProColumns, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import { message, Modal } from 'antd';
import React from 'react';
import {addPostUsingPost} from '@/services/stephen-backend/postController';

interface CreateProps {
  onCancel: () => void;
  onSubmit: (values: API.PostAddRequest) => Promise<void>;
  visible: boolean;
  columns: ProColumns<API.Post>[];
}

/**
 * 添加节点
 *
 * @param fields
 */
const handleAdd = async (fields: API.PostAddRequest) => {
  const hide = message.loading('正在添加');
  try {
    const res = await addPostUsingPost({
      ...fields,
    });
    if (res.code === 0 && res.data) {
      hide();
      message.success('添加成功');
      return true;
    }
  } catch (error: any) {
    message.error(`添加失败${error.message}, 请重试!`);
    return false;
  }
};

/**
 * 常见弹窗
 * @param props
 * @constructor
 */
const CreatePostModal: React.FC<CreateProps> = (props) => {
  const { visible, onSubmit, onCancel, columns } = props;
  return (
    <Modal destroyOnClose title={'新建帖子'} onCancel={() => onCancel?.()} open={visible} footer>
      <ProTable
        columns={columns}
        onSubmit={async (values: API.PostAddRequest) => {
          const success = await handleAdd(values);
          if (success) {
            onSubmit?.(values);
          }
        }}
        type={'form'}
      />
    </Modal>
  );
};
export default CreatePostModal;
