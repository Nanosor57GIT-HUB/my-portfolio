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
    <div className={`container-modal ${toggle ? "active" : ""}`}>
      <div className="modalConfirm">
        
          <div className="ContainerCloseModal">
            <Link
              className="btnCloseModal"
              onClick={() => {
                action();
                handleClick();
              }}
            >
              X
            </Link>

            <span className="close">Fermer</span>
          </div>
          <div className="containerContent">
        
            <img
              src={process.env.PUBLIC_URL + "images/logoWithoutTitle(300x300).webp"}
              className="imgModal"
              alt="img modal"
              // style={{ maxWidth: 300, maxHeight: 300 }}
            />
            <h1 className="confirmText">
              Nous accusons réception de votre demande et vous répondrons dans
              les plus brefs délais.
            </h1>
        </div>
      </div>
    </div>
  );
};

export default Modal;
