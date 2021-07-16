import React from "react";

import { useDispatch } from "react-redux";
import { openModal } from "../../../redux/slices/actions";
import Login from "../../Login/Login";

const PleaseSignIn = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openModal("login"));
  };

  return (
    <div>
      <h1>Vous n'êtes pas connecté</h1>
      <p>
        Pour accéder à cette page, vous devez d'abord vous connecter à
        l'application.
      </p>
      <button onClick={handleClick}>Se connecter</button>
    </div>
  );
};

export default PleaseSignIn;
