import React from 'react';
import { Menu } from '@fluentui/react-northstar';

const items = [
  {
    key: 'editorials',
    content: 'Thông tin dự án'
  },
  {
    key: 'review',
    content: 'Danh sách dự án'
  }
];

const MenuHeader = () => {
  return <Menu defaultActiveIndex={0} items={items}  underlined />;
};

export default MenuHeader;
