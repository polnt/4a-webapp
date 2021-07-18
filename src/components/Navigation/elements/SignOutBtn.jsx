import React from "react";
import firebase from "firebase";
import { logout, signOut } from "../../../redux/slices/actions";
import { useDispatch } from "react-redux";

import { AiOutlinePoweroff as SignOutIcon } from "react-icons/ai";

const SignOutBtn = () => {
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(logout());
    dispatch(signOut());
    firebase.auth().signOut();
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
      <SignOutIcon className="navbar_icon" />
    </button>
  );
};

export default SignOutBtn;
