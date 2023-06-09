import React from "react";

const Logo = () => {
  return (
    <>
      <img
        src={process.env.PUBLIC_URL + "./logoPortfolio(360x180).webp"}
        className="logoWebSite"
        alt="logo_My Portfolio inline"
      ></img>
    </>
  );
};

export default Logo;