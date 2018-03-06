import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {


render() {
  return (
    <header className="App-header, largeContainer">
      <h1 className="App-title">Mike Dreiling</h1>
      <p>
        Im just a dude looking to get right back into code.  But above all, I love
        to create things.
      </p>
      <div className="BlockNavs">
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
      </div>
    </header>
    );
  }
}

export default Header;
