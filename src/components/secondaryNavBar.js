import React from "react";
import { Link } from "react-router-dom";

const SecondaryNavBar = () => {
  return (
    <div className="container-fluid">
      <div className="ItIsaFont d-inline text-secondary">
        <i class="fab fa-earlybirds" />
      </div>
      <h1 className="d-inline ml-2 home">
        <Link to="/">News Workflow</Link>
      </h1>
      <nav className="text-right">
        <ul className="links">
          <li className="btn btn-default m-1">
            <Link to="/me">My Articles</Link>
          </li>
          <li className="btn btn-default m-1">
            <Link to="/authors">Authors</Link>
          </li>
          <li className="btn btn-warning m-1">
            <Link to="/locked">Locked</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SecondaryNavBar;
