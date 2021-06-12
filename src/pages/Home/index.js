/* eslint-disable max-len */
import { useState } from 'react';
import {
  Card, Row, Col, Empty,
} from 'antd';
import ReactMarkdown from 'react-markdown';
import breaks from 'remark-breaks';
import './i18n';
import { useTranslation } from 'react-i18next';

import ProfileCard from '@components/ProfileCard';

const Content1 = () => (
  <Row>
    <Col span={24}>
      <Card type="inner" title="INFORMACIÓN PERSONAL">
        <ReactMarkdown remarkPlugins={[breaks]}>
          {`__Nombre:__ Héctor Patricio Poblete Concha
          __Edad:__ 28
          __Nacionalidad:__ Chilena`}
        </ReactMarkdown>
      </Card>
      <Card type="inner" title="FORMACIÓN ACADÉMICA">
        <ReactMarkdown remarkPlugins={[breaks]}>
          {`__Técnico en Telecomunicaciones__
           Liceo Mauricio Hochschild del CEAT San Pedro de la Paz (2007 - 2010)
           __Ingeniería de Ejecución en Computación e Informática__
           Universidad del Bío-Bío Concepción (2011 - 2016)`}
        </ReactMarkdown>
      </Card>
      <Card type="inner" title="PERFIL">
        <ReactMarkdown remarkPlugins={[breaks]}>
          Ingeniero de Ejecución en Computación e Informática, en búsque- da de oportunidad laboral en una empresa con buen ambiente laboral, en donde pueda crecer como profesional, interesado en aprender nuevas tecnologías de la información (IT), con capacidad de trabajar en equipo. Experiencia en el desarrollo de software, con capacidad de análisis y solución de problemas, así como la dedica- ción para conseguir y mantener los niveles altos de calidad.
        </ReactMarkdown>
      </Card>
      <Card type="inner" title="PERFIL PROFESIONAL">
        <ReactMarkdown remarkPlugins={[breaks]}>
          {`__Técnologías y Publicidad Escalón (2015 - 2017) | Webmaster / Desarrollador Web__
          • Encargado de administración web
          • Desarrollo de proyectos web
          • Desarrollo UX/UI
          • Posicionamiento SEO y Google Ads
          __Técnologías y Publicidad Escalón (2018 ~) | Desarrollador FullStack React Native__
          • Encargado del desarrollo de aplicaciones móviles en React Native, para dispositivos Android/iOS`}
        </ReactMarkdown>
      </Card>
      <Card type="inner" title="HABILIDADES">
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

const Content2 = () => (
  <Row>
    <Col span={24}>
      <Empty description={false} />
    </Col>
  </Row>
);

const children = {
  1: <Content1 />,
  2: <Content2 />,
};

const Home = () => {
  const [key, setKey] = useState('1');
  const { t } = useTranslation(['home', 'translations']);

  const tabs = [
    {
      key: '1',
      tab: t('home:information'),
    },
    {
      key: '2',
      tab: t('home:projects'),
    },
  ];

  return (
    <Row className="container content">
      <Col span={24} lg={5}>
        <ProfileCard />
      </Col>
      <Col span={24} lg={1} />
      <Col span={24} lg={18}>
        <Card
          tabList={tabs}
          activeTabKey={key}
          onTabChange={(value) => setKey(value)}
          bordered
        >
          {children[key]}
        </Card>
      </Col>
    </Row>
  );
};

export default Home;
