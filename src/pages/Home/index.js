import {
  Card, Row, Col,
} from 'antd';
import {
  LinkedinFilled, GithubFilled, MailFilled,
} from '@ant-design/icons';

import photo from '@assets/photo.jpg';

const Home = () => (
  <Row className="container content">
    <Col span={24} lg={5}>
      <Card
        cover={(
          <img
            alt="img"
            src={photo}
          />
        )}
        actions={[
          <LinkedinFilled
            key="linkedin"
            onClick={() => {
              window.location.href = 'https://www.linkedin.com/in/hepoblet/';
            }}
          />,
          <GithubFilled
            key="github"
            onClick={() => {
              window.location.href = 'https://github.com/hepoblet/';
            }}
          />,
          <MailFilled
            key="email"
            onClick={() => {
              window.location.href = 'mailto:hepoblet@gmail.com';
            }}
          />,
        ]}
        bordered
      >
        <Card.Meta
          title="Profile"
          description="This is the description"
        />
      </Card>
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
