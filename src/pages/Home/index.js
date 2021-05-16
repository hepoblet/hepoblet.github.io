import {
  Row, Col, Card, Progress, Avatar,
} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

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
        title="Skills"
        bordered={false}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Card.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title="Card title"
          description="This is the description"
        />
        <Row>
          <Progress percent={50} status="active" showInfo={false} />
          <Progress percent={75} status="active" showInfo={false} />
          <Progress percent={100} status="active" showInfo={false} />
        </Row>
      </Card>
    </Col>
    <Col span={24} lg={1} />
    <Col span={24} lg={18}>
      <Card title="Info" bordered={false}>
        hepoblet.github.io
      </Card>
    </Col>
  </Row>
);

export default Home;
