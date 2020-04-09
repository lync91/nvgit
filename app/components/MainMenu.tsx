import React from 'react';
import { Menu } from 'antd';
import {
  HomeFilled,
  CalendarFilled,
  MessageFilled,
  UnorderedListOutlined
} from '@ant-design/icons';
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
      <Menu.Item key="home">
        <HomeFilled />
        <span>Trang chủ</span>
      </Menu.Item>
      <Menu.Item key="projects">
        <UnorderedListOutlined />
        <span>Trang chủ</span>
      </Menu.Item>
      <Menu.Item key="calendar">
        <CalendarFilled />
        <span>Lịch</span>
      </Menu.Item>
      <Menu.Item key="chat">
        <MessageFilled />
        <span>Chat</span>
      </Menu.Item>
    </Menu>
  );
}
