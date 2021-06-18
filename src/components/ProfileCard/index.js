import { Card } from 'antd';
import { LinkedinFilled, GithubFilled, MailFilled } from '@ant-design/icons';
import './i18n';
import { useTranslation } from 'react-i18next';

import photo from '@assets/photo.jpg';
import { profile } from '@services';

const ProfileCard = () => {
  const { t } = useTranslation('profileCard');
  const { title, description, social } = profile;

  return (
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
            window.location.href = social.linkedin;
          }}
        />,
        <GithubFilled
          key="github"
          onClick={() => {
            window.location.href = social.github;
          }}
        />,
        <MailFilled
          key="email"
          onClick={() => {
            window.location.href = social.email;
          }}
        />,
      ]}
      bordered
    >
      <Card.Meta
        title={t(`profileCard:${title}`)}
        description={description}
      />
    </Card>
  );
};

export default ProfileCard;
