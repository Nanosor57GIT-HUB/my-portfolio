import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ onClose }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const handleModalClose = () => {
    onClose();
    handleClick();
  };

  return (
    <div className="modal-container active">
      <div className="modal-content">
        <div className="modal-header">
          <Link className="close-button" onClick={handleModalClose}>
            X
          </Link>
          <span className="close-title">Fermer</span>
        </div>
        <div className="modal-body">
        <img
              src={process.env.PUBLIC_URL + "images/logoWithoutTitle(300x300).webp"}
              className="modal-image"
              alt="logo_My_portfolio_inline"
            />
          <h1 className="confirmation-text">
            Nous accusons réception de votre demande et vous répondrons dans
            les plus brefs délais.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Modal;
