import React from 'react';
import { Menu } from 'antd';
import { HomeFilled, CalendarFilled, MessageFilled } from '@ant-design/icons';
// import { Link } from 'react-router-dom';
// import routes from '../constants/routes.json';
// import styles from './MainMenu.css';

export default function MainMenu() {
  return (
    <Menu
      className="sideMenu"
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
    >
      <Menu.Item key="1">
        <HomeFilled />
        <span>Trang chủ</span>
      </Menu.Item>
      <Menu.Item key="2">
        <CalendarFilled />
        <span>Lịch</span>
      </Menu.Item>
      <Menu.Item key="3">
        <MessageFilled />
        <span>Chat</span>
      </Menu.Item>
    </Menu>
  );
}
