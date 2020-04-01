import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Provider,
  themes,
  // Grid,
  Segment,
  Flex,
  Avatar,
  Text,
} from '@fluentui/react-northstar';
// import MenuHeader from './components/Menu';
import HeaderPanel from './components/Header';
import routes from './constants/routes.json';
import App from './containers/App';
// import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import HomePage from './containers/HomePage';

export default function Routes() {
  return (
    <Provider theme={themes.teams}>
      <App>
        <HeaderPanel />
        <Switch>
          <Route path={routes.COUNTER} component={CounterPage} />
          <Route path={routes.HOME} component={HomePage} />
        </Switch>
      </App>
    </Provider>
  );
}
