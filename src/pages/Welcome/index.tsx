import { Col, Grid, Row } from 'antd';
import React, { useRef } from 'react';
import { ActionType, PageContainer, ProCard, ProList } from '@ant-design/pro-components';
import { listPostVoByPageUsingPost } from '@/services/stephen-backend/postController';
import { PostCard } from '@/pages/Post/components';
import { WELCOME_TITLE } from '@/constants';
import { useModel } from '@umijs/max';
import { RecommendUserCard } from '@/pages/Welcome/components';


// 响应式组件
const { useBreakpoint } = Grid;

const Welcome: React.FC = () => {
  const actionRef = useRef<ActionType>();
  // 响应式
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  const { recommendUserList } = useModel('recommend');




  return (
    <PageContainer title={WELCOME_TITLE} extra={isMobile ? '' : new Date().toLocaleDateString()}>
      <Row gutter={16} wrap={true}>
        <Col span={isMobile ? 24 : 18}>
          <ProCard bordered bodyStyle={{ padding: isMobile ? '0' : '16px' }}>
            <ProList<API.PostVO>
              onChange={() => {
                actionRef.current?.reload();
              }}
              pagination={{
                pageSize: 10,
              }}
              itemLayout="vertical"
              rowKey="id"
              bordered
              actionRef={actionRef}
              rowHoverable={false}
              request={async (params, sort, filter) => {
                const sortField = 'createTime';
                const sortOrder = 'descend';
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
        </Col>
        <Col span={isMobile ? 24 : 6}>
          <ProCard title={"推荐用户"} bordered bodyStyle={{ padding: '4px' }}>
            <ProList<API.UserVO>
              dataSource={recommendUserList}
              rowKey={'id'}
              itemLayout="vertical"
              renderItem={(item) => <RecommendUserCard key={item.id} user={item} />}
            />
          </ProCard>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Welcome;
