import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider, themes, Menu } from '@fluentui/react-northstar';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';

export default function Routes() {
  const items = [
    {
      key: 'editorials',
      content: 'Dự án'
    },
    {
      key: 'review',
      content: 'Đanh mục dự án'
    },
    {
      key: 'events',
      content: 'Upcoming Events'
    }
  ];
  return (
    <Provider theme={themes.teams}>
      <App>
        <Menu defaultActiveIndex={0} items={items} underlined primary />
        <Switch>
          <Route path={routes.COUNTER} component={CounterPage} />
          <Route path={routes.HOME} component={HomePage} />
        </Switch>
      </App>
    </Provider>
  );
}
