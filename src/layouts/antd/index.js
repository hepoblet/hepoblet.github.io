import './styles.less';
import { element } from 'prop-types';
import { Layout } from 'antd';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import BackTop from './components/BackTop';

const AntDesignLayout = ({ children }) => (
  <Layout className="layout">
    <Header />
    <Content>{children}</Content>
    <Footer />
    <BackTop />
  </Layout>
);

AntDesignLayout.defaultProps = {
  children: null,
};

AntDesignLayout.propTypes = {
  children: element,
};

export default AntDesignLayout;
