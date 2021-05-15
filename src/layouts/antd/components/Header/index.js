import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import logo from './assets/logo.svg';

const Header = () => {
  const location = useLocation();

  return (
    <Layout.Header>
      <div className="logo-container">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['/']} selectedKeys={[location.pathname]}>
        <Menu.Item key="/">
          <Link to="/">
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="/contact">
          <Link to="/contact">
            Contact
          </Link>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default Header;
