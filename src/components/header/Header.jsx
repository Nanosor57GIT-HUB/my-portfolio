import React from "react";
import "./header.css";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Burger from "./burger/Burger";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`containerHeader ${isVisible ? "header-visible" : "header-hidden"}`}>
      <Logo />
      <Navbar />
      <a
          href="https://www.linkedin.com/in/thierry-friedrich/"
          rel="noreferrer"
          target={"_blank"}
          className=" linkedIn"
        >
          <img
            src="images/logoLinkedIn(68x68).png"
            role="button"
            className="linkedIn"
            alt="Profil LinkedIn de Thierry Friedrich"
          />
        </a>
      <Burger />
    </div>
  );
};

export default Header;
