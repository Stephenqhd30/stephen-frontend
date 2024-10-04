import '@umijs/max';
import { Modal } from 'antd';
import React from 'react';
import { CreatePostForm } from '@/components/RePost';

interface CreateProps {
  onCancel: () => void;
  visible: boolean;
}

/**
 * 常见弹窗
 * @param props
 * @constructor
 */
const CreatePostModal: React.FC<CreateProps> = (props) => {
  const { visible, onCancel } = props;
  return (
    <Modal destroyOnClose title={'新建帖子'} width={800} onCancel={() => onCancel?.()} open={visible} footer>
      <CreatePostForm />
    </Modal>
  );
};
export default CreatePostModal;
