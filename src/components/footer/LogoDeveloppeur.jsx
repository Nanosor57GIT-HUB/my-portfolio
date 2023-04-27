import React from "react";

const LogoDeveloppeur = () => {
  return (
    <div className="containerLogoDev">
      <img
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoHTML5(20x20).png"}
        className="logoDev"
        alt="logo_Html5"
        style={{ maxWidth: 50, maxHeight: 40,}}
      />
      <img 
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoCSS3(20x20).png"} 
        className="logoDev" 
        alt="logo_Css3" 
        style={{ maxWidth: 50, maxHeight: 40,}}
        />
      <img 
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoSass(25x20).png"} 
        className="logoDev" 
        alt="logo_Sass" 
        style={{ maxWidth: 50, maxHeight: 40,}}
        />
      <img
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoJavascript(25x20).png"}
        className="logoDev"
        alt="logo_Javascript"
        style={{ maxWidth: 50, maxHeight: 40,}}
      />
      <img
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoReact(25x20).png"}
        className="logoDev"
        alt="logo_React"
        style={{ maxWidth: 50, maxHeight: 40,}}
      />
      <img
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoNodejs(25x20).png"}
        className="logoDev"
        alt="logo_NodeJs"
        style={{ maxWidth: 50, maxHeight: 40,}}
      />
      <img 
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoNPM(25x20).png"} 
        className="logoDev" 
        alt="logo_Npm" 
        style={{ maxWidth: 50, maxHeight: 40,}}
        />
    </div>
  );
};

export default LogoDeveloppeur;
