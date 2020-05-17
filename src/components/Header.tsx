
import React from 'react';
import { Link } from 'react-router-dom';
import { AccountControl } from './AccountControl';

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-light">
        <a className="navbar-brand text-info" href="/">Contraktor</a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to={"/explore"}>Explore</Link>
          </li>
        </ul>
        <div>
          <AccountControl />
        </div>
      </nav>
    </>
  );
}