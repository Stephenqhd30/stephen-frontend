import React from 'react';

interface Props {
  scrollElement: HTMLElement;
  editorId: string;
}

/**
 * 目录
 * @param props
 * @constructor
 */
const TableOfContents: React.FC<Props> = (props) => {
  const { scrollElement, editorId } = props;
  return (
    <div className={'markdown-navigation'}>
    </div>
  );
};

export default TableOfContents;
