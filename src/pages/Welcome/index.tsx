import { Grid } from 'antd';
import React, { useRef } from 'react';
import { ActionType, PageContainer, ProCard, ProList } from '@ant-design/pro-components';
import { listPostVoByPageUsingPost } from '@/services/stephen-backend/postController';
import { PostCard } from '@/pages/Post/components';
import { WELCOME_TITLE } from '@/constants';

// 响应式组件
const { useBreakpoint } = Grid;

const Welcome: React.FC = () => {
  const actionRef = useRef<ActionType>();
  // 响应式
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <PageContainer title={WELCOME_TITLE} extra={isMobile ? '' : new Date().toLocaleDateString()}>
      <ProCard bordered bodyStyle={{ padding: isMobile ? '0' : '16px' }}>
        <ProList<API.PostVO>
          onChange={() => {
            actionRef.current?.reload();
          }}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
          }}
          itemLayout="vertical"
          rowKey="id"
          bordered
          actionRef={actionRef}
          rowHoverable={false}
          request={async (params, sort, filter) => {
            const sortField = Object.keys(sort)?.[0];
            const sortOrder = sort?.[sortField] ?? undefined;
            const { data, code } = await listPostVoByPageUsingPost({
              ...params,
              ...filter,
              sortField,
              sortOrder,
            } as API.PostQueryRequest);
            return {
              success: code === 0,
              data: data?.records || [],
              total: data?.total || 0,
            };
          }}
          renderItem={(item) => <PostCard key={item.id} post={item} isMobile={isMobile} />}
        />
      </ProCard>
    </PageContainer>
  );
};

export default Welcome;
