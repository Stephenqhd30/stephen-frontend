import React, { useEffect, useState } from 'react';
import { ProCard, ProList } from '@ant-design/pro-components';
import { Typography } from 'antd';
import Item from 'antd/es/list/Item';

interface Heading {
  text: string;
  level: number;
  id: string;
}

interface DirectoryProps {
  markdown: string;
}

const TableOfContents: React.FC<DirectoryProps> = ({ markdown }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    // 提取标题
    const headingRegex = /^(#{1,6})\s+(.*)$/gm;
    const newHeadings: Heading[] = [];
    let match;

    while ((match = headingRegex.exec(markdown)) !== null) {
      const level = match[1].length; // # 的数量决定了级别
      const text = match[2].trim();
      const id = text.toLowerCase().replace(/\s+/g, '-'); // 转换为 ID
      newHeadings.push({ text, level, id });
    }

    setHeadings(newHeadings);
  }, [markdown]);

  return (
    <ProCard title="目录" bordered={false}>
      <ProList
        itemLayout="horizontal"
        dataSource={headings}
        split={false}
        renderItem={(heading) => (
          <Item style={{ paddingLeft: `${(heading.level - 1) * 16}px` }}>
            <Typography.Link href={`#${heading.id}`} style={{ fontSize: `${18 - heading.level}px` }}>
              {heading.text}
            </Typography.Link>
          </Item>
        )}
      />
    </ProCard>
  );
};

export default TableOfContents;
