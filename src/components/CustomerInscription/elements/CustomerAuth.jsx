import React from "react";

import firebase from "firebase/app";
import "firebase/auth";

import { useSelector } from "react-redux";

import { useLocation } from "react-router-dom";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import { CgPocket as VerifiedIcon } from "react-icons/cg";

const CustomerAuth = () => {
  const { authStatus } = useSelector((state) => state);

  const location = useLocation().pathname;
  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: location,
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };
  return (
    <div>
      <h3>Étape 1: Authentifiez-vous</h3>
      {authStatus.isSignedIn ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <VerifiedIcon style={{ fontSize: 70, color: "green" }} />
          <p style={{ color: "green" }}>Authentifié</p>
        </div>
      ) : (
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      )}
    </div>
  );
};

export default CustomerAuth;
