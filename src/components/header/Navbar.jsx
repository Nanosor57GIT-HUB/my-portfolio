import React from "react";
import { Link } from "react-scroll";
import DropDownNav from "./dropDownNavigation/DropDownNav";

const Navbar = () => {
  return (
    <div className="containerNavLink">
      <nav
        className="containerNav"
        role="navigation"
        aria-label="main navigation"
      >
        <Link className="btnNavBar active" to="/" aria-label="Page Accueil">
          Accueil
        </Link>
        <Link
          className="btnNavBar"
          activeClass="active"
          to="CurriculumVitae"
          spy={true}
          smooth={true}
          duration={800}
          aria-label="Page Curriculum Vitae"
        >
          Curriculum
        </Link>
        <DropDownNav />
        <Link
          activeClass="active"
          className="btnNavBar"
          to="Contact"
          spy={true}
          smooth={true}
          duration={2500}
          aria-label="Page Contact"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
