import React from "react";

const LogoDeveloppeur = () => {
  return (
    <div className="containerLogoDev">
      <img
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoHTML5.webp"}
        className="logoDev"
        alt="logo_Html5"
        style={{ maxWidth: 40, maxHeight: 40,}}
      />
      <img 
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoCSS3.webp"} 
        className="logoDev" 
        alt="logo_Css3" 
        style={{ maxWidth: 40, maxHeight: 40,}}
        />
      <img 
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoSass.webp"} 
        className="logoDev" 
        alt="logo_Sass" 
        style={{ maxWidth: 40, maxHeight: 40,}}
        />
      <img
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoJavascript.webp"}
        className="logoDev"
        alt="logo_Javascript"
        style={{ maxWidth: 40, maxHeight: 40,}}
      />
      <img
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoReact.webp"}
        className="logoDev"
        alt="logo_React"
        style={{ maxWidth: 40, maxHeight: 40,}}
      />
      <img
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoNodejs.webp"}
        className="logoDev"
        alt="logo_NodeJs"
        style={{ maxWidth: 40, maxHeight: 40,}}
      />
      <img 
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoNPM.webp"} 
        className="logoDev" 
        alt="logo_Npm" 
        style={{ maxWidth: 40, maxHeight: 40,}}
        />
    </div>
  );
};

export default LogoDeveloppeur;
