import { Layout, Row, Col } from 'antd';
import './i18n';
import { useTranslation } from 'react-i18next';

const { version } = require('../../../../../package.json');

const Footer = () => {
  const { t } = useTranslation('footer');

  return (
    <Layout.Footer>
      <Row className="container">
        <Col span={24} lg={12} align="left">{t('description')}</Col>
        <Col span={24} lg={12} align="right">
          v
          {version}
        </Col>
      </Row>
    </Layout.Footer>
  );
};

export default Footer;
