import React, { useState } from "react";
import "./dropDown.css";
import { Link } from "react-scroll";

const DropDownNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    setHoveredIndex(-1);
  };

  const handleLinkHover = (index) => {
    setHoveredIndex(index);
  };

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleBlur = () => {
    setIsOpen(false);
    setHoveredIndex(-1);
  };

  return (
    <div
      className="dropDownBox"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className="dropBtn" onFocus={handleFocus} onBlur={handleBlur}>
        Achèvements
        <img
          src="images/caret-vers-le-bas.svg"
          alt="arrow"
          className="dropDownArrow"
        />
      </p>
      {isOpen && (
        <div id="dropdownContent" className="dropdownContent">
          <Link
            activeClass="active"
            className={`projectsLink ${hoveredIndex === 0 ? "activeProjectsLinks" : ""}`}
            to="Projects"
            spy={true}
            smooth={true}
            duration={1500}
            onMouseEnter={() => handleLinkHover(0)}
          >
            Formation
          </Link>
          <Link
            activeClass="active"
            className={`projectsLink ${hoveredIndex === 1 ? "activeProjectsLinks" : ""}`}
            to="perso"
            spy={true}
            smooth={true}
            duration={2000}
            onMouseEnter={() => handleLinkHover(1)}
          >
            Personnels
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropDownNav;
