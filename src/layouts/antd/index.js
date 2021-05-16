import 'antd/dist/antd.css';
import './styles.css';
import { element } from 'prop-types';
import { Layout, BackTop } from 'antd';
import { UpCircleFilled } from '@ant-design/icons';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const AntDesignLayout = ({ children }) => (
  <Layout className="container">
    <Header />
    <Content>{children}</Content>
    <Footer />
    <BackTop>
      <UpCircleFilled className="icon-back-top" />
    </BackTop>
  </Layout>
);

AntDesignLayout.defaultProps = {
  children: null,
};

AntDesignLayout.propTypes = {
  children: element,
};

export default AntDesignLayout;
