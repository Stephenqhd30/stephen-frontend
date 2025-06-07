import React, { useEffect, useState } from 'react';
import { useParams } from '@@/exports';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Grid, message } from 'antd';
import { MdViewer, PostTitleCard } from '@/components';
import {getPostVoById} from '@/services/stephen-backend/postController';

const { useBreakpoint } = Grid;

/**
 * 帖子详情页
 * @constructor
 */
const PostDetailsPage: React.FC = () => {
  const { id } = useParams();
  // 帖子信息
  const [post, setPost] = useState<API.PostVO>({});

  const scene = useBreakpoint();
  const isMobile = !scene.md;

  const loadData = async () => {
    try {
      const res = await getPostVoById({
        // @ts-ignore
        id: id,
      });
      if (res.code === 0 && res.data) {
        setPost(res.data);
      } else {
        setPost({});
      }
    } catch (error: any) {
      message.error(error.message || '加载失败');
      setPost({});
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <PageContainer title={false}>
      <ProCard title={<PostTitleCard post={post} />}>
        {/*<Markdown>{post.content}</Markdown>*/}
        <MdViewer isMobile={isMobile} key={post.id} value={post.content} />
      </ProCard>
    </PageContainer>
  );
};

export default PostDetailsPage;
