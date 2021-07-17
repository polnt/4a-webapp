import React, { memo } from "react";

import { CgProfile as ProfileIcon } from "react-icons/cg";

import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../../../redux/slices/actions";

import { useAuth } from "../../../hooks";

const ProfileBtnMemo = memo(() => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state);
  const { userData } = useAuth();

  const handleClick = () => {
    if (modal) {
      dispatch(closeModal());
    } else {
      dispatch(openModal("login"));
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
      {userData?.photoURL ? (
        <img
          src={userData.photoURL}
          alt="user profile"
          style={{ width: "20px" }}
        />
      ) : (
        <ProfileIcon className="navbar_icon" />
      )}
    </button>
  );
});

export default ProfileBtnMemo;
