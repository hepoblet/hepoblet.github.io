import { Card, Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';

import ProfileCard from '@components/ProfileCard';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Row className="container content">
      <Col span={24} lg={5}>
        <ProfileCard />
      </Col>
      <Col span={24} lg={1} />
      <Col span={24} lg={18}>
        <Card
          title={t('title')}
          bordered
        >
          hepoblet.github.io
        </Card>
      </Col>
    </Row>
  );
};

export default Home;
