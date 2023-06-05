import React, { useEffect, useState } from "react";
import "./sideBar.css";
import { Link } from "react-scroll";

const SideBar = () => {
  const [showAnchor, setShowAnchor] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const secondLink = document.getElementById("CurriculumVitae");
    if (secondLink) {
      const linkTop = secondLink.getBoundingClientRect().top >= 20;
      if (linkTop <= 0) {
        setShowAnchor(true);
      } else {
        setShowAnchor(false);
      }
    }
  };

  const links = [
    {
      label: "1",
      to: "/",
    },
    {
      label: "2",
      to: "CurriculumVitae",
    },
    {
      label: "3",
      to: "Projects",
    },
    {
      label: "4",
      to: "Contact",
    },
  ];

  return (
    <div className="containerSideBarLink">
      {showAnchor && (
        <nav
          className="containerSideBar"
          role="navigation"
          aria-label="main navigation"
        >
          {links.slice(0).map((link, index) => (
            <Link
              key={index}
              className="btnSideBar"
              activeClass="activeSide"
              to={link.to}
              spy={true}
              smooth={true}
              duration={800}
            ></Link>
          ))}
        </nav>
      )}
    </div>
  );
};

export default SideBar;
