import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '@routes';
import Layout from '@layouts';

const App = () => (
  <Router>
    <Layout>
      <Routes />
    </Layout>
  </Router>
);

export default App;
