import React from 'react';
import { MarkdownEditor, MarkdownEditorInstance } from '@ant-design/md-editor';
import { Card, message } from 'antd';
import { uploadFileUsingPost } from '@/services/stephen-backend/fileController';
import { FileUploadBiz } from '@/enums/FileUploadBizEnum';

interface Props {
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

/**
 * Markdown 编辑器
 * @constructor
 */
const MdEditor: React.FC<Props> = (props) => {
  const { value = '', onChange, readonly = false } = props;
  const editorRef = React.useRef<MarkdownEditorInstance>();
  /**
   * 图片上传
   * @param files
   */
  const uploadImages = async (files: File[] | string[]): Promise<string[]> => {
    try {
      const uploadedUrls = await Promise.all(
        files.map(async (file) => {
          const res = await uploadFileUsingPost(
            {
              biz: FileUploadBiz.POST_IMAGE_COVER,
            },
            { file },
            file,
          );

          if (res.code === 0 && res.data) {
            return res.data;
          } else {
            message.error(`图片上传失败: ${res.message}`);
            return '';
          }
        }),
      );

      // 过滤掉上传失败的图片，返回 URL 数组
      return uploadedUrls.filter(Boolean);
    } catch (error: any) {
      message.error(`图片上传失败: ${error.message}`);
      return [];
    }
  };

  return (
    <Card  title={'编辑器'}>
      <MarkdownEditor
        editorRef={editorRef}
        initValue={value}
        onChange={onChange}
        width={"100%"}
        readonly={readonly}
        image={{
          upload: uploadImages,
        }}
        reportMode
        toolBar={{
          enable: true,
          min: true,
        }}
        height={500}
      />
    </Card>
  );
};

export default MdEditor;
