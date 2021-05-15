import { Layout } from 'antd';
import { element } from 'prop-types';

const Content = ({ children }) => (
  <Layout.Content className="content">
    {children}
  </Layout.Content>
);

Content.defaultProps = {
  children: null,
};

Content.propTypes = {
  children: element,
};

export default Content;
