import React from "react";

const Logo = () => {
  return (
    <div className="containerLogoPortfolio">
      <img
        src={process.env.PUBLIC_URL + "./logoPortfolio(360x180).png"}
        className="logo"
        alt="logo_My Portfolio inline"
        style={{ maxWidth: 360, maxHeight: 180,}}
      ></img>
    </div>
  );
};

export default Logo;
