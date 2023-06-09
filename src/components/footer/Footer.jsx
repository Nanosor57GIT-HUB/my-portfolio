import React from "react";
//import "./footer.css";
import LogoDeveloppeur from "./LogoDeveloppeur";

const Footer = () => {
  return (
    <div className="containerFooter">
      <LogoDeveloppeur />

      <p className="copyright">
        © 2023 My-Portfolio-inline. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
