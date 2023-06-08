import React from 'react';
import './layout.css'
import {
  FieldTimeOutlined,
  PieChartOutlined,
  ProjectFilled,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router';

const { Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', '/dashboard', <PieChartOutlined />),
  getItem('Time Tracker', '/timeTracker', <FieldTimeOutlined />),
  getItem('Projects', '/projects', <ProjectFilled />)
];

interface IProps { children: React.ReactNode; };

const PageLayout = (props: IProps) => {
  const navigate = useNavigate();

  return (
    <div className="page-layout">
      <Layout >
        <Sider style={{ minHeight: "100vh" }}>
          <div className="menu-logo">
            <img src="/logo.png" alt="logo" />
            <h4 >Time Wise</h4>
            {/* <h5>track your time wisely</h5> */}
          </div>
          <Menu
            onClick={({ key }) => navigate(key)}
            theme="dark"
            style={{backgroundColor:"#c4d3fa", color:"#52469C", fontWeight:600}}
            defaultSelectedKeys={['1']}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout style={{"paddingTop":25}}>
          {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}
          <Content style={{ margin: '0 16px' }}>
            {props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Created with AntDesign</Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default PageLayout;