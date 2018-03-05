import React from 'react';
import { Switch, Route, Router, Link } from 'react-router-dom';
import A from './A';
import B from './B';
import C from './C';
import App from './App';
import History from './History';
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const makeMainRoutes = () => {
  return (
    <Router history={History} component={App}>
      <Route render={({ location }) => (
      <div className="mainContainer">
      <header className="App-header">
        <h1 className="App-title">Mike Dreiling</h1>
        <p>
          Im just a dude looking to get right back into code.  But above all, I love
          to create things.
        </p>
      </header>
      <div className="logoBoxA">
        <Link to="/a"><h2>A</h2></Link>
      </div>
      <div className="logoBoxB">
        <Link to="/b"><h2>B</h2></Link>
      </div>
      <div className="logoBoxC">
        <Link to="/c"><h2>C</h2></Link>
      </div>
      <div className="logoBoxHome">
        <Link to="/"><h2>Home</h2></Link>
      </div>
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
