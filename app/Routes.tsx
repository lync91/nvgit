import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import {
  Provider,
  themes,
  // Grid,
  Segment,
  Flex,
  Avatar,
  Text,
  Button
} from '@fluentui/react-northstar';
// import MenuHeader from './components/Menu';
// import routes from './constants/routes.json';
import App from './containers/App';
// import HomePage from './containers/HomePage';
// import CounterPage from './containers/CounterPage';

export default function Routes() {
  return (
    <Provider theme={themes.teams}>
      <App>
        <div className="admin">
          <header className="admin__header">
            <Segment content="Colored segment." className="toolbar" color="red">
              <Flex gap="gap.small">
                <Button content="Accept" />
                <Button content="Deny" />
              </Flex>
              <Flex>
                <Text content="Vũ Văn Lịch" />
                <Avatar
                  image={{
                    src:
                      'https://s3.amazonaws.com/uifaces/faces/twitter/samgrover/128.jpg',
                    alt: 'Profile picture of Matt'
                  }}
                  status={{
                    color: 'green',
                    icon: 'icon-checkmark',
                    title: 'Available'
                  }}
                />
              </Flex>
            </Segment>
          </header>
          <nav className="admin__nav">
            <ul className="menu">
              <li className="menu__item">Hello</li>
            </ul>
          </nav>
          <main className="admin__main">
            <h2>Dashboard</h2>
            <div className="dashboard">
              <div className="dashboard__item">
                <div className="card">
                  <strong>41</strong>
                </div>
              </div>
              <div className="dashboard__item">
                <div className="card">
                  <strong>81.712</strong>
                </div>
              </div>
              <div className="dashboard__item dashboard__item--full">
                <div className="card" />
              </div>
              <div className="dashboard__item dashboard__item--col">
                <div className="card">A</div>
              </div>
              <div className="dashboard__item dashboard__item--col">
                <div className="card">B</div>
              </div>
              <div className="dashboard__item dashboard__item--col">
                <div className="card">C</div>
              </div>
              <div className="dashboard__item dashboard__item--col">
                <div className="card">D</div>
              </div>
            </div>
            <p>
              read more about this in
              <a href="https://mxb.at/blog/css-grid-admin-dashboard/">
                this blogpost
              </a>
              .
            </p>
          </main>
          <footer className="admin__footer">
            <ul className="ticker">
              <li className="ticker__item">BTC: +3.12%</li>
              <li className="ticker__item">ETH: +1.29%</li>
              <li className="ticker__item">XRP: -0.32%</li>
              <li className="ticker__item">BCH: -2.82%</li>
              <li className="ticker__item">EOS: +1.44%</li>
              <li className="ticker__item">CSS: +13.37%</li>
            </ul>
            <span>© 2018 Grid Inc.</span>
          </footer>
        </div>
      </App>
    </Provider>
  );
}
