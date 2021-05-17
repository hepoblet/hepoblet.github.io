import { Card, Row, Col } from 'antd';

import ProfileCard from '@components/ProfileCard';

const Home = () => (
  <Row className="container content">
    <Col span={24} lg={5}>
      <ProfileCard />
    </Col>
    <Col span={24} lg={1} />
    <Col span={24} lg={18}>
      <Card
        title="Info"
        bordered
      >
        hepoblet.github.io
      </Card>
    </Col>
  </Row>
);

export default Home;
