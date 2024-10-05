import React, { useState } from 'react';
import { ProCard } from '@ant-design/pro-components';
import UserAvatarCard from '@/components/ReUser/UserAvatarCard';
import { Button, Image, message, Space, Typography } from 'antd';
import { LikeOutlined, LikeTwoTone, StarOutlined, StarTwoTone } from '@ant-design/icons';
import { doPostFavourUsingPost } from '@/services/stephen-backend/postFavourController';
import { doThumbUsingPost } from '@/services/stephen-backend/postThumbController';
import { history } from '@umijs/max';

interface Props {
  post: API.PostVO;
  isMobile: boolean;
}

/**
 * 帖子卡片
 * @param props
 * @constructor
 */
const PostCard: React.FC<Props> = (props) => {
  const { post, isMobile } = props;

  // 点赞状态
  const [hasThumb, setHasThumb] = useState<boolean>(post.hasThumb ?? false);
  // 点赞数量
  const [thumbNum, setThumbNum] = useState<number>(post.thumbNum ?? 0);
  // 收藏状态
  const [hasFavour, setHasFavour] = useState<boolean>(post.hasFavour ?? false);
  // 收藏数量
  const [favourNum, setFavourNum] = useState<number>(post.favourNum ?? 0);
  /**
   * 帖子收藏
   */
  const handleFavour = async () => {
    try {
      const res = await doPostFavourUsingPost({
        postId: post.id,
      });
      if (res.code === 0 && res.data) {
        setHasFavour(!hasFavour);
        setFavourNum(res.data ? favourNum + 1 : favourNum - 1);
        message.success('收藏成功');
      }
    } catch (error: any) {
      message.error('收藏失败' + error.message);
    }
  };

  /**
   * 帖子收藏
   */
  const handleThumb = async () => {
    try {
      const res = await doThumbUsingPost({
        postId: post.id,
      });
      if (res.code === 0 && res.data) {
        setHasThumb(!hasThumb);
        setThumbNum(res.data ? thumbNum + 1 : thumbNum - 1);
        message.success('点赞成功');
      }
    } catch (error: any) {
      message.error('点赞失败' + error.message);
    }
  };

  return (
    <ProCard
      headerBordered={true}
      gutter={[{ xs: 8, sm: 16, md: 24 }, 16]}
      style={{ marginBlockStart: 16 }}
      wrap
      bodyStyle={{ padding: isMobile ? '0' : '16px' }}
    >
      <ProCard
        title={<UserAvatarCard user={post.userVO ?? {}} />}
        colSpan={isMobile ? '100%' : '70%'}
      >
        <div
          onClick={() => {
            history.push(`/post/${post.id}`);
          }}
        >
          <Typography.Title level={5}>{post?.title}</Typography.Title>
          <Typography.Paragraph
            ellipsis={{
              rows: 3,
              expandable: false,
              symbol: '阅读更多',
            }}
          >
            {post.content}
          </Typography.Paragraph>
        </div>

        <Space>
          <Button type={'text'} onClick={handleThumb}>
            {hasThumb ? (
              <Space>
                <LikeTwoTone />
                {thumbNum}
              </Space>
            ) : (
              <Space>
                <LikeOutlined />
                {thumbNum}
              </Space>
            )}
          </Button>
          <Button type={'text'} onClick={handleFavour}>
            {hasFavour ? (
              <Space>
                <StarTwoTone />
                {favourNum}
              </Space>
            ) : (
              <Space>
                <StarOutlined />
                {favourNum}
              </Space>
            )}
          </Button>
        </Space>
      </ProCard>
      <ProCard colSpan={isMobile ? '100%' : '30%'} layout={'center'}>
        <Image
          src={post?.cover}
          style={{ width: isMobile ? '100%' : 'auto', maxHeight: '120px', objectFit: 'cover' }}
        />
      </ProCard>
    </ProCard>
  );
};

export default PostCard;
