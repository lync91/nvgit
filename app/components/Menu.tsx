import React from 'react';
import { Menu } from '@fluentui/react-northstar';

const items = [
  {
    key: 'editorials',
    content: 'Dự án đã tải về'
  },
  {
    key: 'review',
    content: 'Danh sách dự án'
  },
  {
    key: 'events',
    content: 'Khác'
  }
];

const MenuHeader = () => {
  return <Menu defaultActiveIndex={0} items={items} underlined primary />;
};

export default MenuHeader;
