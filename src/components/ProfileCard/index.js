import { Card } from 'antd';
import { LinkedinFilled, GithubFilled, MailFilled } from '@ant-design/icons';
import './i18n';
import { useTranslation } from 'react-i18next';

import photo from '@assets/photo.jpg';

const ProfileCard = () => {
  const { t } = useTranslation('profileCard');

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
        title={t('metaTitle')}
        description={t('metaDescription')}
      />
    </Card>
  );
};

export default ProfileCard;
