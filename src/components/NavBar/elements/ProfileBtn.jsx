import React from "react";

import { CgProfile as ProfileIcon } from "react-icons/cg";

const ProfileBtn = () => {
  return (
    <button
      type="button"
      className="navbar_main_link"
      style={{
        marginRight: "5px",
        marginTop: "5px",
        border: "none",
        backgroundColor: "transparent",
      }}
    >
      <ProfileIcon className="navbar_icon" />
      <span>Espace client</span>
    </button>
  );
};

export default ProfileBtn;
