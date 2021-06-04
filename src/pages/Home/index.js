/* eslint-disable max-len */
import { useState } from 'react';
import {
  Card, Row, Col, Empty,
} from 'antd';
import './i18n';
import { useTranslation } from 'react-i18next';

import ProfileCard from '@components/ProfileCard';

const Content1 = () => (
  <Row>
    <Col span={24}>
      <Card type="inner" title="INFORMACIÓN PERSONAL">
        Nombre: Héctor Patricio Poblete Concha Edad: 28
        Nacionalidad: Chilena
      </Card>
      <Card type="inner" title="FORMACIÓN ACADÉMICA">
        Técnico en Telecomunicaciones
        Liceo Mauricio Hochschild del CEAT San Pedro de la Paz (2007 - 2010)
        Ingeniería de Ejecución en Computación e Informática
        Universidad del Bío-Bío Concepción (2011 - 2016)
      </Card>
      <Card type="inner" title="PERFIL">
        Ingeniero de Ejecución en Computación e Informática, en búsque- da de oportunidad laboral en una empresa con buen ambiente laboral, en donde pueda crecer como profesional, interesado en aprender nuevas tecnologías de la información (IT), con capacidad de trabajar en equipo. Experiencia en el desarrollo de software, con capacidad de análisis y solución de problemas, así como la dedica- ción para conseguir y mantener los niveles altos de calidad.
      </Card>
      <Card type="inner" title="PERFIL PROFESIONAL">
        Técnologías y Publicidad Escalón (2015 - 2017) • Webmaster / Desarrollador Web
        • Encargado de administración web
        • Desarrollo de proyectos web
        • Desarrollo UX/UI
        • Posicionamiento SEO y Google Ads
        Técnologías y Publicidad Escalón (2018 ~)
        • Desarrollador FullStack React Native
        • Encargado del desarrollo de aplicaciones móviles en React Native, para dispositivos Android/iOS
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
