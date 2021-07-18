import React from "react";

import firebase from "firebase/app";
import "firebase/auth";

import { useDispatch } from "react-redux";
import { logout, signOut } from "../../redux/slices/actions";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const Login = () => {
  const dispatch = useDispatch();
  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/espace-client",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };

  const userLogout = () => {
    dispatch(logout());
    dispatch(signOut());
    firebase.auth().signOut();
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3>Connexion</h3>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      <button type="button" onClick={userLogout}>
        Sign out
      </button>
    </div>
  );
};

export default Login;
