import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to={'/'}>My Awesome website</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={'/home'}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/about'}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/contact'}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/todo'}>Todo</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main>
      <Outlet />
    </main>
  </>;
}

export default Layout;
