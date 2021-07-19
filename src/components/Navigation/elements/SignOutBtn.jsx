import React from "react";
import firebase from "firebase/app";
import "firebase/auth";

import { useSelector, useDispatch } from "react-redux";
import { logout, signOut, openModal } from "../../../redux/slices/actions";

import { AiOutlinePoweroff as SignOutIcon } from "react-icons/ai";

const SignOutBtn = () => {
  const dispatch = useDispatch();
  const { authStatus } = useSelector((state) => state);

  const handleSignOut = () => {
    if (authStatus.isSignedIn) {
      dispatch(logout());
      dispatch(signOut());
      firebase.auth().signOut();
    } else {
      dispatch(openModal("login"));
    }
  };

  return (
    <button
      className="navbar_main_link"
      style={{
        marginRight: "5px",
        marginTop: "5px",
        border: "none",
        backgroundColor: "transparent",
      }}
      type="button"
      onClick={handleSignOut}
    >
      <SignOutIcon
        className="navbar_icon"
        style={authStatus.isSignedIn ? { color: "green" } : { color: "red" }}
      />
    </button>
  );
};

export default SignOutBtn;
