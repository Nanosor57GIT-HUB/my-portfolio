import React, { useState, useEffect } from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div>
      {show ? (
        <div className="loading-spinner show">
          <div className="spinner animate"></div>
        </div>
      ) : null}
    </div>
  );
};

export default LoadingSpinner;


