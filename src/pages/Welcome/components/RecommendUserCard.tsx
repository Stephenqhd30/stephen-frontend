import React from 'react';
import { ProCard } from '@ant-design/pro-components';
import {Avatar, Col, Row, Space, Tag} from 'antd';
import { UserAvatarCard } from '@/components';

interface Props {
  user: API.UserVO;
}

const RecommendUserCard: React.FC<Props> = (props) => {
  const { user } = props;

  // 将相似度转换为百分比形式，确保处理非数字情况
  const similarity = user.similarity as number;
  const similarityPercentage = similarity >= 0 ? (similarity * 100).toFixed(2) : 'N/A';

  return (
    <ProCard gutter={8} bodyStyle={{ paddingBottom: 4 }}>
      <Row justify="space-between" align="middle">
        <Col span={18}>
          <Row align="middle">
            <Col>
              <UserAvatarCard user={user} />
            </Col>
            <Col>
              <Space wrap>
                {user.tags &&
                  user.tags.map((tag: string, index: number) => (
                    <Tag key={index} color="#add8e6">
                      {tag}
                    </Tag>
                  ))}
              </Space>
            </Col>
          </Row>
        </Col>
        <Col
          span={6}
        >
          <span style={{ marginBottom: 4 }}>相似度</span>
          <div style={{ fontWeight: 'bold' }}>
            <span>{similarityPercentage}%</span>
          </div>
        </Col>
      </Row>
    </ProCard>
  );
};

export default RecommendUserCard;
