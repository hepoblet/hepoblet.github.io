import {
  Layout, Menu, Button, Row, Col, Space,
} from 'antd';
import {
  GithubOutlined, TranslationOutlined, HomeFilled, FormOutlined,
} from '@ant-design/icons';
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
    <Layout.Header className="header">
      <Row className="container">
        <Col span={24} lg={12} align="left">
          <div className="logo-container">
            <img src={logo} className="logo" alt="logo" />
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['/']} selectedKeys={[location.pathname]}>
            <Menu.Item key="/" icon={<HomeFilled />}>
              <Link to="/">
                {t('home')}
              </Link>
            </Menu.Item>
            <Menu.Item key="/contact" icon={<FormOutlined />}>
              <Link to="/contact">
                {t('contact')}
              </Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={24} lg={12} align="right">
          <Space>
            <Button
              type="primary"
              size="large"
              icon={<TranslationOutlined />}
              onClick={() => {
                switchLang();
              }}
            >
              {t('language')}
            </Button>
            <Button
              type="ghost"
              size="large"
              ghost
              icon={<GithubOutlined />}
              onClick={() => {
                window.location.href = 'https://github.com/hepoblet/hepoblet.github.io';
              }}
            >
              {t('source')}
            </Button>
          </Space>
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default Header;
