import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Styles/App.css';

// import pages
import Login from './Containers/Login';
import Dashboard from './Containers/Dashboard';

const App = () => (
  <Switch>
    <Route path="/" component={Login} exact />
    <Route path="/dashboard" component={Dashboard} exact />
  </Switch>
);

export default App;
