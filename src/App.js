import React, { useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";

// import { useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { signIn } from "./redux/slices/actions";

import Router from "./components/Router";
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Footer/Footer";
import LocationPath from "./components/_reusable/LocationPath";
import Modal from "./components/_reusable/Modal";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // const location = useLocation().pathname;
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        dispatch(signIn(!!user));
      });
    return () => unregisterAuthObserver();
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <div
        style={{
          display: "grid",
          gridTemplateRows: "40px 1fr 40px",
          minHeight: "100vh",
          paddingTop: "150px",
        }}
      >
        {/* <div
          style={
            location === "/"
              ? { backgroundImage: `url(${a})`, backgroundColor: "white" }
              : { backgroundColor: "var(--purple)", gridRowStart: 1 }
          }
        /> */}
        <LocationPath />
        <main
          style={{
            gridRowStart: 2,
          }}
        >
          <Router />
        </main>
        <Footer />
      </div>
      {modal && <Modal />}
    </div>
  );
};

export default App;
