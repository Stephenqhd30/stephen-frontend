import { ProFormTreeSelect } from '@ant-design/pro-components';
import React from 'react';
import {useModel} from '@umijs/max';

interface Props {
  name: string;
}

/**
 * 标签树选择器
 * @param props
 * @constructor
 */
const TagTreeSelect: React.FC<Props> = (props) => {
  const { name } = props;
  const { tagTreeList } = useModel('tagTree')
  return (
    <ProFormTreeSelect
      name={name}
      allowClear
      request={async () => {
        return (
          tagTreeList?.map((tag) => ({
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
  );
};

export default TagTreeSelect;
