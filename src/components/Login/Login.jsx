import React from "react";

import firebase from "firebase/app";
import "firebase/auth";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const Login = () => {
  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/espace-client",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3>Connexion</h3>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default Login;
