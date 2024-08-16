import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '35px' }}>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <h3><span style={{color:"red",fontSize:"50px"}}>News </span> World</h3>
      )}
    </div>
  );
};

export default LoadingSpinner;
