import { Layout, Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';

import './i18n';

const { version } = require('../../../../../package.json');

const Footer = () => {
  const { t } = useTranslation('footer');

  return (
    <Layout.Footer>
      <Row className="container">
        <Col className="text-left" span={12}>{t('description')}</Col>
        <Col className="text-right" span={12}>
          v
          {version}
        </Col>
      </Row>
    </Layout.Footer>
  );
};

export default Footer;
