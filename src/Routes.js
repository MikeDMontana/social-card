import React from 'react';
import { Switch, Route, Router, Link } from 'react-router-dom';
import A from './A';
import B from './B';
import C from './C';
import Header from './Header'
import App from './App';
import History from './History';
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const makeMainRoutes = () => {
  return (
    <Router history={History} component={App}>
      <Route render={({ location }) => (
      <div className="mainContainer">
        <Header />
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Switch location={location}>
                <Route exact path="/" render={(props) => <App />} />
                <Route exact path="/a" render={(props) => <A />} />
                <Route exact path="/b" render={(props) => <B />} />
                <Route exact path="/c" render={(props) => <C />} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>

      </div>
      )}
      />
    </Router>
  );
}
