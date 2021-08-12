import React, { useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";

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

import mainBackground from "./assets/img/BG_homepagev2.png";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const dispatch = useDispatch();
  const { modal, globalAlert } = useSelector((state) => state);
  const { scrollY, mobileMenu, setMobileMenu } = useNav();

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        dispatch(signIn(!!user));
      });
    return () => unregisterAuthObserver();
  }, [dispatch]);

  return (
    <div
      className="App"
      style={
        {}
        // mobileMenu
        //   ? { height: `calc(100vh + ${+scrollY})`, overflowY: "hidden" }
        //   : {}
      }
    >
      <NavBar
        mobileMenu={mobileMenu}
        toggleMobileMenu={() => setMobileMenu(!mobileMenu)}
      />
      <main
        style={{
          backgroundColor: "transparent",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="global_background"
          style={{
            backgroundImage: `url(${mainBackground}), url(${BlackLinen})`,
            transform: `translate(0, ${scrollY * 0.5}px)`,
            transition: "transform 0.1s ease",
            backgroundColor: "var(--mainGrey)",
          }}
        />
        <div className="cover_page">
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
