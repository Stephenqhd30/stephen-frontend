import React from 'react';
import { ProCard } from '@ant-design/pro-components';
import { Markdown } from '@ant-design/pro-editor';
import './index.less';

interface Props {
  value?: string;
}

/**
 * Markdown 浏览器
 * @param props
 * @constructor
 */
const MdViewer: React.FC<Props> = ({value = ''}) => {
  return (
    <ProCard>
      <Markdown className={'md-viewer'}>{value}</Markdown>
    </ProCard>
  );
};

export default MdViewer;
