import React from 'react';
import { ProCard } from '@ant-design/pro-components';
import { UserAvatarCard } from '@/components';
import {Col, Row} from 'antd';

interface Props {
  user: API.UserVO;
}

const RecommendUserCard: React.FC<Props> = (props) => {
  const { user } = props;


  // 将相似度转换为百分比形式
  const similarityPercentage = (user.similarity as number * 100).toFixed(2);
  return (
    <ProCard gutter={8}>
      <Row justify="center" align="middle">
        <Col span={16}>
          <UserAvatarCard user={user} />
        </Col>
        <Col span={8}>
          <div style={{textAlign: 'center'}}>
            <span>{similarityPercentage}%</span>
          </div>
        </Col>
      </Row>
    </ProCard>
  );
};

export default RecommendUserCard;
