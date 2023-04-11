import React, { useState } from 'react';
import "./burger.css";
import DropDownNav from '../header/dropDownNavigation/DropDownNav';
import { Link } from 'react-scroll';

const Burger = () => {
    const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <button className="burger-menu-button" onClick={handleMenuClick}>
        <span className="burger-menu-icon"></span>
      </button>
      {isOpen && (
        <div className="burger-menu-dropdown">
        <nav
        className="navBurger"
        role="navigation"
        aria-label="main navigation"
      >
        <Link className="btnNavBar active" to="/">
          Accueil
        </Link>
        <Link
          className="btnNavBar"
          activeClass="active"
          to="CurriculumVitae"
          spy={true}
          smooth={true}
         //  offset={-70}
          duration={800} 
        >
          Curriculum
        </Link>
        <DropDownNav />
        <Link activeClass="active"
          className="btnNavBar"
          to="Contact"
          spy={true}
          smooth={true}
          // offset={-70}
          duration={2500} 
        >
          Contact
        </Link>
        <a
          href="https://www.linkedin.com/in/thierry-friedrich/"
          rel="noreferrer"
          target={"_blank"}
          className=" linkedIn"
        >
          <img
            src="images/LinkedIn-icon.webp"
            className="linkedIn"
            alt="logo_LinkedIn"
          />
        </a>
      </nav>
        </div>
      )}
    </div>
  );
};

export default Burger;