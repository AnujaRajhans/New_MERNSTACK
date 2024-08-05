import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <div className="d-flex justify-content-center w-100">
          <Link className="navbar-brand" to="/"><h3>Book Review App</h3></Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                <h4>Home</h4></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
