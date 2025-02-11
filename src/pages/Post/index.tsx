import React, { useEffect, useState } from 'react';
import { useParams } from '@@/exports';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Col, Grid, message, Row, Typography } from 'antd';
import { MdViewer, PostTitleCard, TableOfContents, UserCard } from '@/components';
import { getPostVoByIdUsingGet } from '@/services/stephen-backend/postController';

const { useBreakpoint } = Grid;

/**
 * 帖子详情页
 * @constructor
 */
const PostDetailsPage: React.FC = () => {
  const { id } = useParams();
  // 帖子信息
  const [post, setPost] = useState<API.PostVO>({});
  // 加载中
  const [loading, setLoading] = useState<boolean>(false);
  const [scrollElement] = useState(document.documentElement);

  const scene = useBreakpoint();
  const isMobile = !scene.md;
  const editorId = `md-editor-${post?.id}`;

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await getPostVoByIdUsingGet({
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <PageContainer title={false}>
      <Row gutter={isMobile ? 0 : 16} align={'top'}>
        <Col span={isMobile ? 24 : 18}>
          <ProCard
            bodyStyle={{ padding: 0 }}
            title={<PostTitleCard post={post} />}
            gutter={[16, 16]}
          >
            <Typography.Paragraph>
              <MdViewer key={post?.id} value={post.content} />
            </Typography.Paragraph>
          </ProCard>
        </Col>
        <Col span={isMobile ? 0 : 6}>
          <ProCard ghost={true}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <UserCard title={'作者'} user={post?.userVO ?? {}} />
              </Col>
              <Col span={24}>
                <ProCard title={'目录'} bordered={false} loading={loading} headerBordered>
                  <TableOfContents
                    key={post.id}
                    editorId={editorId as string}
                    scrollElement={scrollElement}
                  />
                </ProCard>
              </Col>
            </Row>
          </ProCard>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default PostDetailsPage;
