import { Layout, Menu, Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './i18n';
import logo from './assets/logo.svg';

const Header = () => {
  const location = useLocation();

  const { t, i18n } = useTranslation('header');

  const switchLang = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  return (
    <Layout.Header>
      <div className="logo-container">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['/']} selectedKeys={[location.pathname]}>
        <Menu.Item key="/">
          <Link to="/">
            {t('home')}
          </Link>
        </Menu.Item>
        <Menu.Item key="/contact">
          <Link to="/contact">
            {t('contact')}
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Button onClick={() => {
            switchLang();
          }}
          >
            {t('language')}
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button onClick={() => {
            window.location = 'https://github.com/hepoblet/hepoblet.github.io';
          }}
          >
            {t('source')}
          </Button>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default Header;
