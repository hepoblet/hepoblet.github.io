import { Card } from 'antd';
import { LinkedinFilled, GithubFilled, MailFilled } from '@ant-design/icons';

import photo from '@assets/photo.jpg';

const ProfileCard = () => (
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
);

export default ProfileCard;
