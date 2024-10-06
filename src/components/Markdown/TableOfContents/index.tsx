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
    <ProCard
      title="目录"
      bordered={false} // 可以根据需要选择是否添加边框
      bodyStyle={{ padding: '0px' }}
      headStyle={{ padding: '0px' }}
    >
      <ProList
        itemLayout="horizontal"
        dataSource={headings}
        split={false}
        renderItem={(heading) => (
          <Item style={{ paddingLeft: `${(heading.level - 1) * 12}px`}}>
            <Typography.Link
              href={`#${heading.id}`}
              style={{
                fontSize: `${16 - heading.level}px`, // 设置字体大小，标题级别越高，字体越小
                color: heading.level === 1 ? '#333' : '#666', // 设置不同级别的颜色
                transition: 'color 0.3s', // 添加过渡效果
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1890ff')} // 悬停时改变颜色
              onMouseLeave={(e) => (e.currentTarget.style.color = heading.level === 1 ? '#333' : '#666')} // 恢复颜色
            >
              {heading.text}
            </Typography.Link>
          </Item>
        )}
      />
    </ProCard>
  );
};

export default TableOfContents;
