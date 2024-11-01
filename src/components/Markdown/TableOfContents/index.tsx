import React, { useEffect, useState } from 'react';
import { getProcessor } from 'bytemd';
import { List } from 'antd';
import './index.less';

interface Props {
  content: string;
}

interface TocItem {
  tagName: string;
  text: string;
}

const TableOfContents: React.FC<Props> = (props) => {
  const { content } = props;
  const [toc, setToc] = useState<TocItem[]>([]);
  // 格式化标题
  const stringifyHeading = (node: any) => {
    return node.children.map((child: any) => child.value).join('');
  };

  useEffect(() => {
    const processor = getProcessor({
      plugins: [
        {
          rehype: (p) =>
            p.use(() => (tree) => {
              const items: TocItem[] = [];
              tree.children
                .filter((node: any) => node.type === 'element' && /^h[1-3]$/.test(node.tagName))
                .forEach((node: any) => {
                  items.push({ tagName: node.tagName, text: stringifyHeading(node) });
                });
              setToc(items);
            }),
        },
      ],
    });

    processor.processSync(content);
  }, [content]);

  return (
    <List
      header={<div>目录</div>}
      bordered
      className={"table-of-contents"}
      dataSource={toc}
      renderItem={(item) => (
        <List.Item>
          <a href={`#${item.text}`} style={{ display: 'block' }}>
            {item.text}
          </a>
        </List.Item>
      )}
    />
  );
};

export default TableOfContents;
