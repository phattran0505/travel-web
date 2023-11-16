import { Link } from "react-router-dom";
import { useState } from "react";
import { FcGlobe } from "react-icons/fc";
import { CgMenuGridO } from "react-icons/cg";

import "./Header.css";
function Header() {
  const [active, setActive] = useState(false);
  const showNav = () => {
    setActive(!active);
  };
  return (
    <div className="header">
      <Link to="/" className="header_logo">
        <FcGlobe className="header_icon" />
        <span>Travel.</span>
      </Link>
      <ul className="header_links">
        <Link className="header_link">home</Link>
        <Link className="header_link">packages</Link>
        <Link className="header_link">shop</Link>
        <Link className="header_link">about</Link>
        <Link className="header_link">pages</Link>
        <Link className="header_link">news</Link>
        <Link className="header_link">contact</Link>
        <Link className="header_link">
          <button>book now</button>
        </Link>
      </ul>
      <CgMenuGridO onClick={showNav} className="menu-icon" />
      <nav className={active === false ? "navbar" : "navbar navbar-active"}>
        <ul className="navbar-header_links">
          <Link className="navbar-header_link">home</Link>
          <Link className="navbar-header_link">packages</Link>
          <Link className="navbar-header_link">shop</Link>
          <Link className="navbar-header_link">about</Link>
          <Link className="navbar-header_link">pages</Link>
          <Link className="navbar-header_link">news</Link>
          <Link className="navbar-header_link">contact</Link>
          <Link className="navbar-header_link">
            <button>book now</button>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
