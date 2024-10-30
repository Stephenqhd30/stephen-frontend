import React from 'react';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Grid, Steps } from 'antd';
import {CreatePostForm} from '@/pages/Create/Post/components';

const { useBreakpoint } = Grid;

/**
 * 创建帖子页面
 * @constructor
 */
const CreatePostPage: React.FC = () => {
  const scene = useBreakpoint();
  const isMobile = !scene.md;

  return (
    <>
      <ProCard split={isMobile ? 'horizontal' : 'vertical'}>
        <ProCard colSpan={isMobile ? '100' : '20%'}>
          <Steps
            direction={'vertical'}
            size="small"
            style={{ height: '100%' }}
            items={[
              { title: '标题', description: '请填写标题' },
              { title: '内容', description: '请填写内容' },
              { title: '帖子封面', description: '请上传帖子封面' },
              { title: '标签', description: '请选择标签' },
              { title: '完成创建', description: '完成创建之后将会跳转到帖子详细页面' },
            ]}
          />
        </ProCard>
        <ProCard colSpan={isMobile ? '100' : '80%'}>
          <CreatePostForm />
        </ProCard>
      </ProCard>
    </>
  );
};

export default CreatePostPage;
