import React from 'react';
import {
  FieldTimeOutlined,
  PieChartOutlined,
  ProjectFilled,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router';

const { Header, Content, Footer, Sider } = Layout;

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
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout >
      <Sider style={{ minHeight: "100vh" }}>
        <div className="demo-logo-vertical" style={{ color: "white", textAlign: "center" }}>
          {/* logo here */}
          <h4>Time Wise</h4>
          {/* <h5>track your time wisely</h5> */}
        </div>
        <Menu
          onClick={({ key }) => navigate(key)}
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          {props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Created with AntDesign</Footer>
      </Layout>
    </Layout>
  );
};

export default PageLayout;