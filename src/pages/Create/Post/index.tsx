import React from 'react';
import { ProCard } from '@ant-design/pro-components';
import { Grid } from 'antd';
import { CreatePostForm } from '@/pages/Create/Post/components';

const { useBreakpoint } = Grid;

/**
 * 创建帖子页面
 * @constructor
 */
const CreatePostPage: React.FC = () => {
  const scene = useBreakpoint();
  const isMobile = !scene.md;

  return (
    <ProCard>
      <CreatePostForm />
    </ProCard>
  );
};

export default CreatePostPage;
