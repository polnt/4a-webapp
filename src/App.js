import React, { useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";

import { useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { signIn } from "./redux/slices/actions";

import { useNav } from "./hooks";

import Router from "./components/Router";
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Footer/Footer";
import LocationPath from "./components/_reusable/LocationPath";
import Modal from "./components/_reusable/Modal";
import GlobalAlert from "./components/_reusable/GlobalAlert";

import { BlackLinen } from "./assets/textures";

import mainBackground from "./assets/img/BG_homepage.png";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const { modal, globalAlert } = useSelector((state) => state);
  const { scrollY } = useNav();

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        dispatch(signIn(!!user));
      });
    return () => unregisterAuthObserver();
  }, [dispatch]);

  console.log(scrollY);

  return (
    <div className="App">
      <NavBar />
      <main
        style={{
          backgroundColor: "transparent",
          paddingTop: "150px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={
            location === "/"
              ? {
                  position: "absolute",
                  right: 0,
                  left: 0,
                  bottom: 0,
                  top: 0,
                  zIndex: "-1",
                  backgroundImage: `url(${mainBackground}), url(${BlackLinen})`,
                  transform: `translate(0, ${scrollY * 0.5}px)`,
                  transition: "transform 0.1s ease",
                  backgroundColor: "var(--mainGrey)",
                }
              : { backgroundColor: "#f9f9f9" }
          }
        />
        <div style={{ minHeight: "100vh" }}>
          <LocationPath />
          <Router />
        </div>
        <Footer />
      </main>

      {globalAlert && <GlobalAlert />}
      {modal && <Modal />}
    </div>
  );
};

export default App;
