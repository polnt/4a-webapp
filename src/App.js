import React, { useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";

import { useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { signIn } from "./redux/slices/actions";

import Router from "./components/Router";
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Footer/Footer";
import LocationPath from "./components/_reusable/LocationPath";
import Modal from "./components/_reusable/Modal";
import GlobalAlert from "./components/_reusable/GlobalAlert";

import { BlackLinen } from "./assets/textures";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const { modal, globalAlert } = useSelector((state) => state);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        dispatch(signIn(!!user));
      });
    return () => unregisterAuthObserver();
  }, [dispatch]);

  return (
    <div className="App" style={{ color: "var(--mainGrey)" }}>
      <NavBar />
      <div
        style={
          location === "/"
            ? {
                height: "100px",
                backgroundColor: "var(--mainGrey)",
                backgroundImage: `url(${BlackLinen})`,
              }
            : { height: "100px", backgroundColor: "var(--mainPurple)" }
        }
      />
      <div
        style={{
          display: "grid",
          gridTemplateRows: "40px 40px 1fr 40px",
          minHeight: "100vh",
        }}
      >
        <div
          style={
            location === "/"
              ? {
                  backgroundColor: "var(--mainGrey)",
                  backgroundImage: `url(${BlackLinen})`,
                }
              : { backgroundColor: "var(--mainPurple)", gridRowStart: 1 }
          }
        />
        <LocationPath />
        <main
          style={{
            gridRowStart: 3,
            backgroundColor: "white",
          }}
        >
          <Router />
        </main>
        <Footer />
      </div>
      {globalAlert && <GlobalAlert />}
      {modal && <Modal />}
    </div>
  );
};

export default App;
