import {Image, message, Space, Typography} from 'antd';
import React, {useEffect, useRef, useState} from 'react';
import {ActionType, PageContainer, ProCard, ProList} from '@ant-design/pro-components';
import {listPostVoByPageUsingPost} from '@/services/stephen-backend/postController';
import UserAvatarCard from '@/components/ReUser/UserAvatarCard';
import {MdViewer} from '@/components';
import {LikeOutlined, LikeTwoTone, StarOutlined, StarTwoTone} from '@ant-design/icons';

const Welcome: React.FC = () => {
  const actionRef = useRef<ActionType>();
  // 数据列表
  const [dataSource, setDataSource] = useState<API.PostVO[]>([]);

  const loadData = async () => {
    try {
      const res = await listPostVoByPageUsingPost({});
      if (res.code === 0 && res.data) {
        setDataSource(res?.data?.records as API.PostVO[]);
      }
    } catch (error: any) {
      message.error(`获取帖子数据失败${error.message}` + '请重试！');
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <PageContainer header={{title: ''}}>
      <ProCard gutter={[24, 24]} bordered hoverable={false}>
        <ProList<API.PostVO>
          pagination={{
            pageSize: 20,
            showSizeChanger: true
          }}
          itemLayout="vertical"
          rowKey="id"
          bordered
          actionRef={actionRef}
          rowHoverable={false}
          dataSource={dataSource}
          renderItem={(item) => {
            return (
              <ProCard gutter={[16, 16]} headerBordered={true}>
                <ProCard title={<UserAvatarCard user={item.userVO ?? {}}/>} colSpan={"70%"}>
                  <Typography.Title level={4}>{item?.title}</Typography.Title>
                  <div style={{margin: '10px 0'}}>
                    <MdViewer value={item.content}/>
                  </div>
                  <Space>
                    {item.hasFavour ? (
                      <Space>
                        <LikeTwoTone/>
                        {item.favourNum}
                      </Space>
                    ) : (
                      <Space>
                        <LikeOutlined/>
                        {item.favourNum}
                      </Space>
                    )}
                    {item?.hasThumb ? (
                      <Space>
                        <StarTwoTone/>
                        {item.thumbNum}
                      </Space>
                    ) : (
                      <Space>
                        <StarOutlined/>
                        {item.thumbNum}
                      </Space>
                    )}
                  </Space>
                </ProCard>
                <ProCard colSpan={"30%"} layout={'center'}>
                  <Image src={item?.cover} width={256}/>
                </ProCard>
              </ProCard>
            );
          }}
        />
      </ProCard>
    </PageContainer>
  );
};

export default Welcome;
