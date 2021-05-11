import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import SideTop from './layouts/SideTop';

const App = () => (
  <BrowserRouter>
    <SideTop>
      <Routes />
    </SideTop>
  </BrowserRouter>
);

export default App;
