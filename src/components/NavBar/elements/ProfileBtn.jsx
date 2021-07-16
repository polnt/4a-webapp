import React, { useState } from "react";

import { CgProfile as ProfileIcon } from "react-icons/cg";

import { useAuth } from "../../../hooks";

import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../../../redux/slices/actions";

import Login from "../../Login/Login";

const ProfileBtn = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state);
  const { isSignedIn } = useAuth();

  const handleClick = () => {
    if (modal) {
      dispatch(closeModal());
    } else {
      dispatch(openModal(<Login />));
    }
  };

  return (
    <button
      type="button"
      className="navbar_main_link"
      onClick={handleClick}
      style={{
        marginRight: "5px",
        marginTop: "5px",
        border: "none",
        backgroundColor: "transparent",
        position: "relative",
      }}
    >
      <ProfileIcon className="navbar_icon" />
      <span>Espace client</span>
    </button>
  );
};

export default ProfileBtn;
