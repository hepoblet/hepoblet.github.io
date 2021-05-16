import { Row, Col, Progress } from 'antd';

const Home = () => (
  <Row>
    <Col className="home-content" span={24} lg={6}>
      <Progress percent={30} />
      <Progress percent={50} status="active" />
      <Progress percent={60} status="active" />
      <Progress percent={50} status="active" />
      <Progress percent={70} status="exception" />
      <Progress percent={100} />
      <Progress percent={50} showInfo={false} />
    </Col>
    <Col span={24} lg={2} />
    <Col className="home-content" span={24} lg={16}>
      hepoblet.github.io
    </Col>
  </Row>
);

export default Home;
