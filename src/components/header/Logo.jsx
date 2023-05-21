import React from "react";

const Logo = () => {
  return (
    <>
      <img
        src={process.env.PUBLIC_URL + "./logoPortfolio(360x180).webp"}
        className="logo"
        alt="logo_My Portfolio inline"
        style={{ maxWidth: 360, maxHeight: 180}}
      ></img>
    </>
  );
};

export default Logo;


//https://developer.mozilla.org/fr/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images