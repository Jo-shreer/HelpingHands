import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/register' component={RegisterPage} />
      </Switch>
    </Router>
  );
};

export default App;