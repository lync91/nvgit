import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Provider,
  themes,
  Grid,
  Segment,
  Flex,
  Avatar,
  Text,
  Button
} from '@fluentui/react-northstar';
// import MenuHeader from './components/Menu';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';

export default function Routes() {
  return (
    <Provider theme={themes.teams}>
      <App>
        <Grid columns="repeat(4, 1fr)" rows="76px 100% 50px">
          <Segment
            content="Header"
            color="brand"
            styles={{
              gridColumn: 'span 4'
            }}
          >
            <Flex
              gap="gap.small"
              styles={{
                width: '30px',
                height: '30px'
              }}
            >
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
          {/* <Segment
            color="green"
            content="Menu"
            inverted
            styles={{
              gridColumn: 'span 1'
            }}
          /> */}
          <Segment
            content="Content"
            styles={{
              gridColumn: 'span 4'
            }}
          >
            <Switch>
              <Route path={routes.COUNTER} component={CounterPage} />
              <Route path={routes.HOME} component={HomePage} />
            </Switch>
          </Segment>
          <Segment
            color="brand"
            content="Footer"
            styles={{
              gridColumn: 'span 4'
            }}
          />
        </Grid>
      </App>
    </Provider>
  );
}
