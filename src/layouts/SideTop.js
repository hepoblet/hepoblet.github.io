import 'antd/dist/antd.css';
import './styles.css';
import { element } from 'prop-types';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import logo from './assets/logo.svg';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const SideTop = ({ children }) => (
  <Layout>
    <Header className="header">
      <div className="logo-container">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/">
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/contact">
            Contact
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={300} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="Navigation">
            <Menu.Item key="1">
              <Link to="/">
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/contact">
                Contact
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

SideTop.propTypes = {
  children: element.isRequired,
};

export default SideTop;
