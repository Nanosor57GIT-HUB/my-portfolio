import React from "react";
import { Link } from "react-router-dom";

const Modal = (props) => {
  //props transform(css)
  const toggle = props.toggle;
  const action = props.action;

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  
  return (
   
    <div className={`containerConfirmation ${toggle ? "active" : ""}`}> 
      <div className="modalConfirmation">
        
          <div className="blockCloseModal">
            <Link
              className="btnCloseModal"
              onClick={() => {
                action();
                handleClick();
              }}
            >
              X
            </Link>

            <span className="closeTitle">Fermer</span>
          </div>
          <div className="blockContentConfirmation">
        
            <img
              src={process.env.PUBLIC_URL + "images/logoWithoutTitle(300x300).webp"}
              className="imgModalConfirmation"
              alt="logo_My_portfolio_inline"
            />
            <h1 className="confirmationText">
              Nous accusons réception de votre demande et vous répondrons dans
              les plus brefs délais.
            </h1>
        </div>
      </div>
    </div>
  );
};

export default Modal;
