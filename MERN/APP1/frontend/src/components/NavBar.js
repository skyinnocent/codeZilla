import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="logo">MERN APP 01</div>
      <div className="nav-items">
        <div>
          <Link to={"/"}>Create User</Link>
        </div>
        <div>
          <Link to={"/all"}>All Users</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
