import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '@pages/Home';
import Portfolio from '@pages/Portfolio';
import Contact from '@pages/Contact';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/portfolio" component={Portfolio} />
    <Route exact path="/contact" component={Contact} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
