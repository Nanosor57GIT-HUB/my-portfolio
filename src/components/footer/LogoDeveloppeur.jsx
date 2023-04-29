import React from "react";

const LogoDeveloppeur = () => {
  return (
    <div className="containerLogoDev">
      <img
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoHTML5(50x40).png"}
        className="logoDev"
        alt="logo_Html5"
        style={{ maxWidth: 50, maxHeight: 40,}}
      />
      <img 
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoCSS3(50x40).png"} 
        className="logoDev" 
        alt="logo_Css3" 
        style={{ maxWidth: 50, maxHeight: 40,}}
        />
      <img 
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoSass(50x40).png"} 
        className="logoDev" 
        alt="logo_Sass" 
        style={{ maxWidth: 50, maxHeight: 40,}}
        />
      <img
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoJavascript(50x40).png"}
        className="logoDev"
        alt="logo_Javascript"
        style={{ maxWidth: 50, maxHeight: 40,}}
      />
      <img
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoReact(50x40).png"}
        className="logoDev"
        alt="logo_React"
        style={{ maxWidth: 50, maxHeight: 40,}}
      />
      <img
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoNodejs(50x40).png"}
        className="logoDev"
        alt="logo_NodeJs"
        style={{ maxWidth: 50, maxHeight: 40,}}
      />
      <img 
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoNPM(50x40).png"} 
        className="logoDev" 
        alt="logo_Npm" 
        style={{ maxWidth: 50, maxHeight: 40,}}
        />
    </div>
  );
};

export default LogoDeveloppeur;
