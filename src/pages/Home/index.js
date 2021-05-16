import {
  Card, Avatar, Row, Col,
} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import photo from '@assets/photo.jpg';

const Home = () => (
  <Row className="container content">
    <Col span={24} lg={5}>
      <Card
        title="Skills"
        cover={(
          <img
            alt="img"
            src={photo}
          />
        )}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
        bordered
      >
        <Card.Meta
          title="Card title"
          description="This is the description"
          avatar={<Avatar src={photo} />}
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
