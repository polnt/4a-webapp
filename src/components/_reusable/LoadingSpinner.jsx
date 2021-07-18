import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { openModal } from "../../redux/slices/actions";

import Spinner from "react-bootstrap/Spinner";

const LoadingSpinner = () => {
  const dispatch = useDispatch();
  const [allowAuth, setAllowAuth] = useState(false);

  const handleClick = () => {
    dispatch(openModal("login"));
  };

  setTimeout(() => {
    setAllowAuth(true);
  }, 10000);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
      }}
    >
      <Spinner animation="border" role="status" />
      {allowAuth && (
        <div>
          <p>
            Une erreur est peut-être survenue, nous n'arrivons pas à vous
            identifier. Essayez de vous reconnecter.
          </p>
          <button type="button" onClick={handleClick}>
            Se connecter
          </button>
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;
