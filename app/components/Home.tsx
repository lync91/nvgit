import React from 'react';
import { Menu, Tabs, Layout } from 'antd';

const { Sider } = Layout;

const { TabPane } = Tabs;

function callback(key: unknown) {
  console.log(key);
}

export default function Home() {
  return (
    <div>
      <Sider
        collapsible
        collapsed={false}
        width={250}
        trigger={null}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 80,
          background: 'white',
          borderRight: 'solid 1px rgba(0, 0, 0, 0.12)'
        }}
      >
        <div className="">
          <div>
            <Tabs defaultActiveKey="1" onChange={callback} type="card">
              <TabPane tab="Các thay đổi" key="1">
                <Menu
                  // onClick={this.handleClick}
                  // selectedKeys={[this.state.current]}
                  mode="inline"
                >
                  <Menu.Item key="setting:1">
                    Option 1 fsdjkfhsjdkhfgjhsdf
                  </Menu.Item>
                  <Menu.Item key="setting:2">
                    Option 2 dsjhfjsd fjsdgf
                  </Menu.Item>
                </Menu>
              </TabPane>
              <TabPane tab="Lịch sử" key="2">
                Content of Tab Pane 2
              </TabPane>
            </Tabs>
          </div>
        </div>
      </Sider>
      <div>
        <div className="admin">
          <main className="main">
            <div>
              <h2>Dashboard</h2>
            </div>
            <div className="dashboard">
              <div className="dashboardItem">
                <div className="card">
                  <strong>41</strong>
                </div>
              </div>
              <div className="dashboardItem">
                <div className="card">
                  <strong>81.712</strong>
                </div>
              </div>
              <div className="dashboardItem dashboardItemFull">
                <div className="card" />
              </div>
              <div className="dashboardItem dashboardItemCol">
                <div className="card">A</div>
              </div>
              <div className="dashboardItem dashboardItemCol">
                <div className="card">B</div>
              </div>
              <div className="dashboardItem dashboardItemCol">
                <div className="card">C</div>
              </div>
              <div className="dashboardItem dashboardItemCol">
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
