import React, { useEffect, useState } from "react";
import DropDownNav from "../dropDownNavigation/DropDownNav";
import { Link } from "react-scroll";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleCloseMenu = () => {
      setIsOpen(false);
    };

    window.addEventListener("resize", handleCloseMenu);
    window.addEventListener("scroll", handleCloseMenu);

    return () => {
      window.removeEventListener("resize", handleCloseMenu);
      window.removeEventListener("scroll", handleCloseMenu);
    };
  }, []);

  return (
    <div className="containerBurger">
      <div className="burgerMenu">
      <button
  className={`burgerMenuButton ${isOpen ? 'open' : ''}`}
  aria-label="menu burger item"
  onClick={handleMenuClick}
>
  <span className="burgerMenuIcon"></span>
</button>
        {isOpen && (
          <div className={`containerDropdownBurger ${isOpen ? 'open' : ''}`}>
            <div className="burgerMenuDropdown">
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
                  duration={800}
                    offset={-150}
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
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Burger;
