import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import A from './A';
import B from './B';
import C from './C';
import App from './App';
import History from './History';

export const makeMainRoutes = () => {
  return (
    <Router history={History} component={App}>
      <div>
        <Route path="/" render={(props) => <App {...props} />} />
        <Route path="/a" render={(props) => <A {...props} />} />
        <Route path="/b" render={(props) => <B {...props} />} />
        <Route path="/c" render={(props) => <C {...props} />} />
      </div>
    </Router>
  );
}
