import React from "react"; 
import AOS from "aos";
 import "aos/dist/aos.css";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/thumbnail/lib/styles/index.css";



pdfjs.GlobalWorkerOptions.workerSrc = `pdf.worker.min.js`;

 AOS.init();

const PdfViewer = () => {

  const pdfUrl = "pdf/CVFriedrichThierry.pdf"; // URL du PDF à afficher

  const handleOpenPdf = () => {
    window.open(pdfUrl, "_blank");
  };
  

  return (
    <div className="containerPdf" >
      <div className="blockPdf">
       <img src="./pdf/CoverPDFCV(260x364).jpg" className="imgCV" alt="Mon CV" style={{ width: 260, height: 364 }} />
      </div>
      <div
        className="containerBtnCV"
        data-aos="zoom-in"
        data-aos-delay="400"
        data-aos-duration="600"
        data-aos-easing="ease-in-sine"
      >
        <button className="lookCVbtn" aria-label="Aria Voir_Mon_CV" onClick={handleOpenPdf}>
          Voir mon CV
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;
