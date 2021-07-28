import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setGlobalAlert } from "../../redux/slices/actions";

import { AiOutlineCheckCircle as ValidIcon } from "react-icons/ai";
import { VscError as FailIcon } from "react-icons/vsc";

import "../../css/_reusable/GlobalAlert.css";

const GlobalAlert = () => {
  const dispatch = useDispatch();
  const { globalAlert } = useSelector((state) => state);
  const [alert, setAlert] = useState({
    message: globalAlert.message,
    color: "",
  });

  useEffect(() => {
    switch (globalAlert) {
      case 200:
        setAlert((prevState) => ({
          ...prevState,
          // backgroundColor: " #00B8AB",
          backgroundColor: "rgb(0, 255, 0, 0.5)",
          color: "green",
          message: "Création réussie !",
          icon: <ValidIcon size={40} />,
        }));
        break;
      case 201:
        setAlert((prevState) => ({
          ...prevState,
          // backgroundColor: " #00B8AB",
          backgroundColor: "rgb(0, 255, 0, 0.5)",
          color: "green",
          message: "Mise à jour réussie !",
          icon: <ValidIcon size={40} />,
        }));
        break;
      case 204:
        setAlert((prevState) => ({
          ...prevState,
          // backgroundColor: " #00B8AB",
          backgroundColor: "rgb(0, 255, 0, 0.5)",
          color: "green",
          message: "E-mail correctement envoyé !",
          icon: <ValidIcon size={40} />,
        }));
        break;
      case 401:
        setAlert((prevState) => ({
          ...prevState,
          backgroundColor: "rgb(255, 0, 0, 0.5)",
          color: "red",
          message: "Identifiants incorrects !",
          icon: <FailIcon size={40} />,
        }));
        break;
      case 404:
        setAlert((prevState) => ({
          ...prevState,
          backgroundColor: "rgb(255, 0, 0, 0.5)",
          color: "red",
          message: "Elément introuvable !",
          icon: <FailIcon size={40} />,
        }));
        break;
      case 409:
        setAlert((prevState) => ({
          ...prevState,
          backgroundColor: "rgb(255, 0, 0, 0.5)",
          color: "red",
          message: "Utilisateur déjà existant !",
          icon: <FailIcon size={40} />,
        }));
        break;
      case 410:
        setAlert((prevState) => ({
          ...prevState,
          // backgroundColor: " #00B8AB",
          backgroundColor: "rgb(0, 255, 0, 0.5)",
          color: "green",
          message: "Element supprimé !",
          icon: <ValidIcon size={40} />,
        }));
        break;
      case 500:
        setAlert((prevState) => ({
          ...prevState,
          backgroundColor: "rgb(255, 0, 0, 0.5)",
          color: "red",
          message: "Une erreur est survenue !",
          icon: <FailIcon size={40} />,
        }));
        break;

      default:
        return;
    }
  }, [globalAlert]);

  useEffect(() => {
    const delay = setTimeout(() => dispatch(setGlobalAlert(null)), 3000);

    return () => clearTimeout(delay);
  }, [dispatch]);

  return (
    <div
      className="global_alert"
      style={{
        border: `2px solid ${alert.color}`,
        backgroundColor: alert.backgroundColor,
        color: alert.color,
      }}
    >
      {alert.icon}
      <span className="message_alert">{alert.message}</span>
      <button
        type="button"
        className="custom_btn"
        style={{ backgroundColor: alert.color }}
        onClick={() => dispatch(setGlobalAlert(null))}
      >
        OK
      </button>
    </div>
  );
};

export default GlobalAlert;
