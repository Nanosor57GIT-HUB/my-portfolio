import React from "react";
//import AOS from "aos";
//import "aos/dist/aos.css";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `pdf.worker.min.js`;

// AOS.init();

const PdfViewer = () => {
  const pdfUrl = "pdf/CVFriedrichThierry.pdf"; // URL du PDF à afficher

  const handleOpenPdf = () => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="containerPdf">
      <div className="blockPdf">
        <img src="./pdf/CoverPDFCV.webp" className="imgCv" alt="Mon CV" />
      </div>
      <div
        className="containerBtnCv"
        // data-aos="zoom-in"
        // data-aos-delay="400"
        // data-aos-duration="600"
        // data-aos-easing="ease-in-sine"
      >
        <button
          className="lookCvBtn"
          aria-label="Aria Voir_Mon_CV"
          onClick={handleOpenPdf}
        >
          Voir mon CV
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;
