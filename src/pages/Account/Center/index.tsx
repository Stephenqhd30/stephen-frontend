import React, {useState} from 'react';
import {PageContainer, ProCard} from '@ant-design/pro-components';
import {ACCOUNT_TITLE} from '@/constants';
import {Col, Grid, Row} from 'antd';
import {useModel} from '@@/exports';
import UserCard from '@/pages/Account/Center/components/UserCard';
import UserDetailsCard from '@/pages/Account/Center/components/UserDetailsCard';

const {useBreakpoint} = Grid;

/**
 * 个人中心
 * @constructor
 */
const UserCenter: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const currentUser = initialState?.currentUser;
  const scene = useBreakpoint();
  const isMobile = !scene.md;
  const [tab, setTab] = useState('tab2');
  return (
    <PageContainer title={ACCOUNT_TITLE} extra={new Date().toLocaleDateString()}>
      <Row gutter={[16, 16]}>
        <Col span={isMobile ? 24 : 6}>
          <ProCard bordered={false}>
            <UserCard user={currentUser || {}} />
          </ProCard>
        </Col>
        <Col span={isMobile ? 24 : 18}>
          <ProCard
            bodyStyle={{ padding: 4 }}
            tabs={{
              tabPosition: 'top',
              activeKey: tab,
              items: [
                {
                  label: `个人信息`,
                  key: 'user-detail',
                  children: <UserDetailsCard user={currentUser || {}} />
                },
                {
                  label: `我的帖子`,
                  key: 'my-post',
                  children: `内容二`
                },
                {
                  label: `产品三`,
                  key: 'tab3',
                  children: `内容三`
                }
              ],
              onChange: (key) => {
                setTab(key);
              }
            }}
            bordered
          >

          </ProCard>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default UserCenter;
