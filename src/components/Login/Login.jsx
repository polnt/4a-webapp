import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";

import { logout } from "../../redux/slices/actions";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/signedIn",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };

  const useLogout = () => {
    dispatch(logout());
    firebase.auth().signOut();
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3>Connexion</h3>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      <a onClick={useLogout}>Sign out</a>
    </div>
  );
};

export default Login;
