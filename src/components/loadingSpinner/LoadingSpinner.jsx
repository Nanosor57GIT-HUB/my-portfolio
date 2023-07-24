import React, { useState, useEffect } from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // const timer = setTimeout(() => {
      setShow(true);
    // }, 500); // Délai avant d'afficher le spinner (500ms dans cet exemple)

    // return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-spinner ${show ? 'show' : ''}`}>
      <div className={`spinner${show ? ' animate' : ''}`}></div>
    </div>
  );
};

export default LoadingSpinner;
