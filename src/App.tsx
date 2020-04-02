import React, {Component} from 'react';
import { Button } from 'antd';
import logo from './logo.svg';
import './App.css';
import { Tabs, Menu } from 'antd';

const { TabPane } = Tabs;
const { SubMenu } = Menu;

export interface State {
  current: string
}

function callback(key: any) {
  console.log(key);
}

class App extends Component<{}, State> {
  constructor(props: any, state: any) {
    super(props, state)
    this.state = {
      current: 'setting:1'
    }
  }
  handleClick(e: any) {
    console.log('click ', e);
    this.setState({current: e.key})
  };
  render() {
    return (
      <div>
        <div className="admin__header"></div>
      <div>
            <div className="sidenav">
              <div className="admin__nav">
              <Tabs defaultActiveKey="1" onChange={callback} type="card">
                <TabPane tab="Các thay đổi" key="1">
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="inline">
                      <Menu.Item key="setting:1">Option 1 fsdjkfhsjdkhfgjhsdf</Menu.Item>
                      <Menu.Item key="setting:2">Option 2 dsjhfjsd fjsdgf</Menu.Item>
                </Menu>
                </TabPane>
                <TabPane tab="Lịch sử" key="2">
                  Content of Tab Pane 2
                </TabPane>
              </Tabs>
              </div>
            </div>
            <div className="main admin">
              <main className="admin__main">
                <div><h2>Dashboard</h2></div>
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
            </div>
          </div>
      </div>
    );
  }
}

export default App;
