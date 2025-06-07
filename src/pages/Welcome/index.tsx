import { Col, Grid, Row } from 'antd';
import React, { useRef } from 'react';
import {
  ActionType,
  PageContainer,
  ProCard,
  ProList,
  StatisticCard,
} from '@ant-design/pro-components';
import { PostCard } from '@/components';
import {listPostVoByPage} from '@/services/stephen-backend/postController';


// 响应式组件
const { useBreakpoint } = Grid;

/**
 * 主页
 * @constructor
 */
const Welcome: React.FC = () => {
  // 响应式
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  const actionRef = useRef<ActionType>();
  return (
    <PageContainer title={false}>
      <Row wrap={true}>
        <Col span={isMobile ? 24 : 18}>
          <ProCard bordered bodyStyle={{ padding: 4 }}>
            <ProList<API.PostVO>
              onChange={() => {
                actionRef.current?.reload();
              }}
              pagination={{
                pageSize: 10,
                showTotal: undefined,
                responsive: true,
              }}
              actionRef={actionRef}
              itemLayout="vertical"
              rowKey="id"
              request={async (params, sort, filter) => {
                const sortField = 'updateTime';
                const sortOrder = sort?.[sortField] ?? 'desc';
                const { data, code } = await listPostVoByPage({
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
              renderItem={(item) => <PostCard key={item?.id} post={item} />}
            />
          </ProCard>
        </Col>
        <Col span={isMobile ? 0 : 6}>
          <StatisticCard></StatisticCard>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Welcome;
