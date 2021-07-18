import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/slices/actions";

import Login from "../Login/Login";

import { VscChromeClose as CloseWindowIcon } from "react-icons/vsc";

import "../../css/_reusable/Modal.css";

const Modal = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state);

  const switchModal = () => {
    switch (true) {
      case modal === "login":
        return <Login />;
      default:
        break;
    }
  };

  return (
    <div
      className="popup_container"
      id="popup_container"
      // onMouseDown={handleClosePopup}
    >
      <div className="popup">
        <button
          type="button"
          className="close_popup"
          onClick={() => dispatch(closeModal())}
        >
          <CloseWindowIcon />
        </button>
        {switchModal()}
      </div>
    </div>
  );
};

export default Modal;
