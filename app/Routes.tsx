import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout, Menu, Tabs, Button, Icon } from 'antd';
import routes from './constants/routes.json';
import App from './containers/App';
import NVHeader from './containers/Header';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import NVMainMenu from './containers/MainMenu';

const { Sider, Content } = Layout;

export default function Routes(props: Props) {
  return (
    <App>
      <NVHeader />
      <Layout>
        <Sider
          collapsible
          collapsed
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0
          }}
        >
          <NVMainMenu />
        </Sider>
        <Content>
          <Switch>
            <Route path={routes.COUNTER} component={CounterPage} />
            <Route path={routes.HOME} component={HomePage} />
          </Switch>
        </Content>
      </Layout>
    </App>
  );
}
