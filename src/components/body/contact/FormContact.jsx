import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "./ModalConfirmForm";

const FormContact = () => {
  const form = useRef();

  const [errors, setErrors] = useState({});
  const [modalState, setModalState] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userEmail: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      let tempErrors = { ...errors };
      delete tempErrors[e.target.name];
      setErrors(tempErrors);
    }
  };

  // Gestion d'affiche des messages d'erreurs
  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) {
      tempErrors.firstName = "Votre prénom est requis";
    }

    if (!formData.lastName) {
      tempErrors.lastName = "Votre nom est requis";
    }

    if (!formData.userEmail) {
      tempErrors.userEmail = "Votre Email est requis";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.userEmail)
    ) {
      tempErrors.userEmail = "Votre adresse Email est invalide";
    }

    if (!formData.message) {
      tempErrors.message = "Un message est requis";
    } else if (formData.message.length < 15) {
      tempErrors.message =
        "Votre message doit comporter au moins 15 caractères";
    } else if (formData.message.length > 300) {
      tempErrors.message = "Votre message ne doit pas dépasser 300 caractères";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Fonction de gestion de fermeture des erreurs au scroll
  const resetErrors = () => {
    const formContact = document.getElementById("ResetErrorsContact");
    if (formContact) {
      const formRect = formContact.getBoundingClientRect();
      const isVisible =
        formRect.bottom >= 0 && formRect.top >= window.innerHeight;
      if (isVisible) {
        setErrors({});
      }
    }
  };

  // Fonction d'envoi du formulaire complété au destinataire
  const sendEmail = async (e) => {
    e.preventDefault();
    if (validate()) {
      //  console.log("Form is valid!");
      try {
        await emailjs.sendForm(
          "service_19k8uap",
          "template_t2zgykl",
          form.current,
          "MMxU-Ki_LKRNh3M4q"
        );
        console.log("message send");
        setFormData({
          firstName: "",
          lastName: "",
          userEmail: "",
          message: "",
        });
        openModal();
        // Make API call or perform other form actions
      } catch (error) {
        // console.log(error.text);
      }
    } else {
      console.log("Form is invalid.");
    }
  };

  // Aplication de suppression général d'erreurs au scroll
  useEffect(() => {
    window.addEventListener("scroll", resetErrors);
    return () => {
      window.removeEventListener("scroll", resetErrors);
    };
  }, []);

  function openModal() {
    setModalState(!modalState);
    document.body.classList.add("scroll-lock"); // Ajout de la classe pour verrouiller le scroll
  }

  function closeModal() {
    setModalState(false);
    document.body.classList.remove("scroll-lock"); // Suppression de la classe pour réactiver le scroll
    resetErrors();
  }

  return (
    <div className="containerContact">
      <div id="ResetErrorsContact" className="blockForm">
        <h2 className="titleBlockForm">Besoin d'en savoir plus ?</h2>
        <form
          ref={form}
          autoComplete="OFF"
          className="form"
          onSubmit={sendEmail}
        >
          <div className="containerInput">
            <div className="nameContact">
              <div className="flexInput">
                <label htmlFor="firstName">Prénom</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  className="firstName"
                  onChange={handleChange}
                  placeholder="Votre prénom"
                  required
                />

                <div className="errorsInput">
                  {errors.firstName && (
                    <p className="errors">{errors.firstName}</p>
                  )}
                </div>
              </div>
              <div className="flexInput">
                <label htmlFor="lastName">Nom</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  className="lastName"
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                />

                <div className="errorsInput">
                  {errors.lastName && (
                    <p className="errors">{errors.lastName}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="flexInput">
              <label htmlFor="userEmail">Email</label>
              <input
                type="email"
                id="userEmail"
                name="userEmail"
                value={formData.userEmail}
                className="userEmail"
                onChange={handleChange}
                placeholder="Votre adresse mail"
                required
              />

              <div className="errorsInput">
                {errors.userEmail && (
                  <p className="errors">{errors.userEmail}</p>
                )}
              </div>
            </div>
          </div>

          <label htmlFor="textarea" className="titleTextarea">
            En quoi puis-je vous aider ?
          </label>
          <span className="textMaxChars" style={{ color: "#fbd437" }}>
            ( 300 caractères Max. )
          </span>

          <textarea
            rows="4"
            cols="46"
            id="textarea"
            name="message"
            value={formData.message}
            className="textarea"
            onChange={handleChange}
            placeholder="Votre message ici ...."
            required
          />
          <div className="errorsTextarea">
            {errors.message && <p className="errors">{errors.message}</p>}
          </div>

          <button type="submit" className="btnContact" onClick={sendEmail}>
            Envoyez
          </button>
        </form>
      </div>
      <Modal toggle={modalState} action={closeModal} />
    </div>
  );
};

export default FormContact;
