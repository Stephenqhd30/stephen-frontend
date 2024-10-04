import React, {useState} from 'react';
import {
  ProForm,
  ProFormText,
  ProFormTextArea,
  ProFormTreeSelect,
  ProFormUploadDragger
} from '@ant-design/pro-components';
import {MdEditor} from '@/components';
import {listTagByTreeUsingGet} from '@/services/stephen-backend/tagController';
import {addPostUsingPost} from '@/services/stephen-backend/postController';
import {Grid, message, UploadProps} from 'antd';
import {history} from '@@/core/history';
import {uploadFileUsingPost} from '@/services/stephen-backend/fileController';

const { useBreakpoint } = Grid;

/**
 * 帖子表单
 * @constructor
 */
const CreatePostForm:React.FC = () => {
  const scene = useBreakpoint();
  const isMobile = !scene.md;
  // 帖子封面
  const [postCover, setPostCover] = useState('');
  // 帖子内容
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  /**
   * 创建帖子
   * @param values
   */
  const handleCreatePost = async (values: API.PostAddRequest) => {
    setLoading(true);
    try {
      const res = await addPostUsingPost({
        ...values,
        cover: postCover,
        content: content,
      });
      if (res.code === 0 && res.data) {
        message.success('创建成功3s之后跳转到创建的帖子页');
        setTimeout(() => {
          history.push(`/post/${res.data}`);
        }, 3000);
      }
    } catch (error: any) {
      message.error(`创建失败${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  /**
   * 上传文章封面
   */
  const uploadProps: UploadProps = {
    name: 'file',
    multiple: false,
    maxCount: 1,
    customRequest: async (options: any) => {
      const { onSuccess, onError, file } = options;
      try {
        const res = await uploadFileUsingPost(
          {
            biz: 'post_cover',
          },
          {
            file: file,
          },
          file,
        );
        if (res.code === 0 && res.data) {
          onSuccess(res.data);
          setPostCover(res.data);
        }
      } catch (error: any) {
        onError(error);
        message.error('文件上传失败', error.message);
      }
    },
    onRemove() {
      setPostCover('');
    },
  };

  return (
    <ProForm<API.PostVO>
      loading={loading}
      onFinish={async (values) => {
        await handleCreatePost(values);
      }}
      layout={isMobile ? 'vertical' : 'horizontal'}
    >
      <ProFormText name="title" label="标题" />
      <ProFormTextArea name="content" label="内容">
        <MdEditor
          value={content}
          onChange={(value) => setContent(value)}
          placeholder={'请填写内容'}
        />
      </ProFormTextArea>
      <ProFormUploadDragger
        title={'上传帖子封面'}
        max={1}
        fieldProps={{
          ...uploadProps,
        }}
        name="cover"
        label={'封面'}
      />
      <ProFormTreeSelect
        label={'标签'}
        name={'tags'}
        secondary
        allowClear
        request={async () => {
          const res = await listTagByTreeUsingGet();
          return (
            res.data?.map((tag) => ({
              label: tag.tagName ?? '',
              value: tag.tagName ?? '',
              children:
                tag.children?.map((child) => ({
                  label: child.tagName ?? '',
                  value: child.tagName ?? '',
                })) || [],
            })) || []
          );
        }}
        fieldProps={{
          filterTreeNode: true,
          showSearch: true,
          autoClearSearchValue: true,
          multiple: true,
          treeNodeFilterProp: 'label',
          fieldNames: {
            label: 'label',
            value: 'value',
            children: 'children',
          },
        }}
      />
    </ProForm>
  )
}

export default CreatePostForm;
