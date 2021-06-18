import { Card, Row, Col } from 'antd';
import './i18n';
import { useTranslation } from 'react-i18next';

import ProfileCard from '@components/ProfileCard';
import { portfolio } from '@services';

const Portfolio = () => {
  const { t } = useTranslation(['portfolio', 'translations']);

  return (
    <Row className="container content">
      <Col span={24} lg={5}>
        <ProfileCard />
      </Col>
      <Col span={24} lg={1} />
      <Col span={24} lg={18}>
        <Card type="inner" title={t(`portfolio:${portfolio.title}`).toUpperCase()}>
          <div>hola mundo</div>
        </Card>
      </Col>
    </Row>
  );
};

export default Portfolio;
