import React, { useEffect, useState, useRef } from "react";
import DropDownNav from "../dropDownNavigation/DropDownNav";
import { Link } from "react-scroll";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Référence pour le menu burger

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Calcul de la hauteur du menu burger
    const menuHeight = menuRef.current ? menuRef.current.offsetHeight : 0;
    // Ajustement de l'offset en fonction de la hauteur du menu burger
    const adjustedOffset = -menuHeight;
    // Mise à jour de l'offset dans les liens du menu
    document.querySelectorAll(".btnNavBar").forEach((link) => {
      link.setAttribute("offset", adjustedOffset);
    });
  }, [isOpen]); // Recalculer l'offset lorsque le menu est ouvert ou fermé

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
