import React from "react";

import { Redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../redux/slices/actions";

const PleaseSignIn = () => {
  const dispatch = useDispatch();
  const { authStatus } = useSelector((state) => state);
  const handleClick = () => {
    dispatch(openModal("login"));
  };

  return (
    <div className="container_page">
      <div className="content_page">
        <h1>Vous n'êtes pas connecté</h1>
        <p>
          Pour accéder à cette page, vous devez d'abord vous connecter à
          l'application.
        </p>
        <button onClick={handleClick}>Se connecter</button>
        {authStatus.isSignedIn && <Redirect to="/espace-client" />}
      </div>
    </div>
  );
};

export default PleaseSignIn;
