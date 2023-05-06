import React from "react";

const LogoDeveloppeur = () => {
  return (
    <div className="containerLogoDev">
      <img
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoHTML5(30x30).webp"}
        className="logoDev"
        alt="logo_Html5"
        style={{ maxWidth: 30, maxHeight: 30}}  
      />
      <img 
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoCSS3(30x30).webp"}
        className="logoDev" 
        alt="logo_Css3" 
        style={{ maxWidth: 30 , maxHeight: 30}}
        />
      <img 
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoSass(30x30).webp"} 
        className="logoDev" 
        alt="logo_Sass" 
        style={{ maxWidth: 30 , maxHeight: 30}}  
        />
      <img
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoJavascript(30x30).webp"}
        className="logoDev"
        alt="logo_Javascript"
        style={{ maxWidth: 30 , maxHeight: 30}}
      />
      <img
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoReact(30x30).webp"}
        className="logoDev"
        alt="logo_React"
        style={{ maxWidth: 30, maxHeight: 30}}
      />
      <img
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoNodejs(30x30).webp"}
        className="logoDev"
        alt="logo_NodeJs"
        style={{ maxWidth: 30, maxHeight: 30}} 
      />
      <img 
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoNPM(30x30).webp"}
        className="logoDev" 
        alt="logo_Npm" 
        style={{ maxWidth: 30, maxHeight: 30}}
        />
    </div>
  );
};

export default LogoDeveloppeur;
