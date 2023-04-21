import React from "react";

const Logo = () => {
  return (
    <div className="containerLogoPortfolio">
      <img
        src={process.env.PUBLIC_URL + "./logoPortfolio.png"}
        className="logo"
        alt="logo_My Portfolio inline"
        style={{ width: 240, height: 120,}}
      ></img>
    </div>
  );
};

export default Logo;
