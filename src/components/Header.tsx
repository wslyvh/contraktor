
import React from 'react';

function Header() {
  return (
    <>
      <nav className="navbar navbar-light">
        <a className="navbar-brand" href="/">Contraktor</a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/explore">Explore</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
