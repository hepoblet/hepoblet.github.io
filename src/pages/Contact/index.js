import { Row, Col } from 'antd';

import ProfileCard from '@components/ProfileCard';
import ContactForm from '@components/ContactForm';

const Contact = () => (
  <Row className="container content">
    <Col span={24} lg={5}>
      <ProfileCard />
    </Col>
    <Col span={24} lg={1} />
    <Col span={24} lg={18}>
      <ContactForm />
    </Col>
  </Row>
);

export default Contact;
