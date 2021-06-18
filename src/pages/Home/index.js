/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
import { Card, Row, Col } from 'antd';
import './i18n';
import { useTranslation } from 'react-i18next';

import ProfileCard from '@components/ProfileCard';
import { personal, professional, skills } from '@services';

const Home = () => {
  const { t } = useTranslation(['home', 'translations']);

  return (
    <Row className="container content">
      <Col span={24} lg={5}>
        <ProfileCard />
      </Col>
      <Col span={24} lg={1} />
      <Col span={24} lg={18}>
        <Card type="inner" title={t(`home:${personal.title}`).toUpperCase()}>
          {personal.list.map(({ name, description }, index) => (
            <div key={index}>
              <strong>{`${t(`home:${name}`)}: `}</strong>
              {description}
            </div>
          ))}
        </Card>
        <Card type="inner" title={t(`home:${professional.title}`).toUpperCase()}>
          {professional.jobs.map(({ title, subTitle, list }, index) => (
            <div key={index}>
              <div>
                <strong>{title}</strong>
                <i>{` | ${subTitle}`}</i>
              </div>
              <div>
                <ul>
                  {list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Card>
        <Card type="inner" title={t(`home:${skills.title}`).toUpperCase()}>
          <p align="center">
            <img alt="React" src="https://img.shields.io/badge/React-202429.svg?style=flat-square&logo=react" />
            <img alt="React Native" src="https://img.shields.io/badge/React_Native-202429.svg?style=flat-square&logo=react" />
            <img alt="Redux" src="https://img.shields.io/badge/Redux-202429.svg?style=flat-square&logo=redux&logoColor=7849bc" />
            <img alt="Redux Saga" src="https://img.shields.io/badge/Redux_Saga-202429.svg?style=flat-square&logo=redux-saga" />
            <img alt="Expo" src="https://img.shields.io/badge/Expo-202429.svg?style=flat-square&logo=expo" />
            <img alt="Google Play" src="https://img.shields.io/badge/Google_Play-202429.svg?style=flat-square&logo=google-play" />
            <img alt="App Store" src="https://img.shields.io/badge/App_Store-202429.svg?style=flat-square&logo=app-store" />
            <img alt="Firebase" src="https://img.shields.io/badge/Firebase-202429.svg?style=flat-square&logo=firebase" />
            <img alt="Bitrise" src="https://img.shields.io/badge/Bitrise-202429.svg?style=flat-square&logo=bitrise" />
            <img alt="JavaScript" src="https://img.shields.io/badge/Javascript-202429.svg?style=flat-square&logo=javascript" />
            <img alt="NodeJS" src="https://img.shields.io/badge/Node.js-202429.svg?style=flat-square&logo=node-dot-js" />
            <img alt="npm" src="https://img.shields.io/badge/npm-202429.svg?style=flat-square&logo=npm" />
            <img alt="yarn" src="https://img.shields.io/badge/yarn-202429.svg?style=flat-square&logo=yarn" />
            <img alt="CocoaPods" src="https://img.shields.io/badge/CocoaPods-202429.svg?style=flat-square&logo=cocoapods" />
            <img alt="Composer" src="https://img.shields.io/badge/Composer-202429.svg?style=flat-square&logo=composer" />
            <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-202429.svg?style=flat-square&logo=mongodb" />
            <img alt="PHP" src="https://img.shields.io/badge/PHP-202429.svg?style=flat-square&logo=php" />
            <img alt="Apache" src="https://img.shields.io/badge/Apache-202429.svg?style=flat-square&logo=apache" />
            <img alt="NGINX" src="https://img.shields.io/badge/NGINX-202429.svg?style=flat-square&logo=nginx" />
            <img alt="Laravel" src="https://img.shields.io/badge/Laravel-202429.svg?style=flat-square&logo=laravel" />
            <img alt="MySQL" src="https://img.shields.io/badge/MySQL-202429.svg?style=flat-square&logo=mysql" />
            <img alt="Microsoft SQL Server" src="https://img.shields.io/badge/Microsoft_SQL_Server-202429.svg?style=flat-square&logo=mysql" />
            <img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-202429.svg?style=flat-square&logo=bootstrap" />
            <img alt="Bulma" src="https://img.shields.io/badge/Bulma-202429.svg?style=flat-square&logo=bulma" />
            <img alt="Ant Design" src="https://img.shields.io/badge/Ant_Design-202429.svg?style=flat-square&logo=ant-design" />
            <img alt="Xcode" src="https://img.shields.io/badge/Xcode-202429.svg?style=flat-square&logo=xcode" />
            <img alt="Android Studio" src="https://img.shields.io/badge/Android_Studio-202429.svg?style=flat-square&logo=android-studio" />
            <img alt="Visual Studio Code" src="https://img.shields.io/badge/Visual_Studio_Code-202429.svg?style=flat-square&logo=visual-studio-code" />
            <img alt="Insomnia" src="https://img.shields.io/badge/Insomnia-202429.svg?style=flat-square&logo=insomnia" />
            <img alt="Postman" src="https://img.shields.io/badge/Postman-202429.svg?style=flat-square&logo=postman" />
            <img alt="GitHub" src="https://img.shields.io/badge/GitHub-202429.svg?style=flat-square&logo=github" />
            <img alt="Jira" src="https://img.shields.io/badge/Jira-202429.svg?style=flat-square&logo=jira" />
            <img alt="Slack" src="https://img.shields.io/badge/Slack-202429.svg?style=flat-square&logo=slack" />
            <img alt="Microsoft Azure" src="https://img.shields.io/badge/Microsoft_Azure-202429.svg?style=flat-square&logo=microsoft-azure" />
            <img alt="Microsoft" src="https://img.shields.io/badge/Microsoft-202429.svg?style=flat-square&logo=microsoft" />
            <img alt="Apple" src="https://img.shields.io/badge/Apple-202429.svg?style=flat-square&logo=apple" />
            <img alt="Android" src="https://img.shields.io/badge/Android-202429.svg?style=flat-square&logo=android" />
            <img alt="iOS" src="https://img.shields.io/badge/iOS-202429.svg?style=flat-square&logo=ios" />
          </p>
        </Card>
      </Col>
    </Row>
  );
};

export default Home;
