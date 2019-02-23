import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container Header">
        <nav className="navbar navbar-expand-sm bg-secondary fixed-top justify-content-between">
          <Link className="navbar-brand" to="/"><h3 className="text-white">My Notes</h3></Link>
          <ul className="navbar-nav mr-sm-2">
            <li className="nav-item">
              <Link to="/add_note" className="nav-link text-white">
                <i className="fas fa-lg fa-plus" /> <span className="">&nbsp;&nbsp;Add</span>
              </Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Header;
