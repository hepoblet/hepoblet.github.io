import { Layout, Col } from 'antd';
import { useTranslation } from 'react-i18next';

import './i18n';

const { version } = require('../../../../../package.json');

const Footer = () => {
  const { t } = useTranslation('footer');

  return (
    <Layout.Footer>
      <div>
        <Col className="text-left" span={12}>{t('description')}</Col>
        <Col className="text-right" span={12}>
          v
          {version}
        </Col>
      </div>
    </Layout.Footer>
  );
};

export default Footer;
