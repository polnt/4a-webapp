import React, { useEffect } from "react";
import firebase from "firebase";

import { useDispatch, useSelector } from "react-redux";
import { trySignIn } from "./redux/slices/actions";

import Router from "./components/Router";
import NavBar from "./components/NavBar/NavBar";
// import MobileNavMenu from "./components/NavBar/MobileNavMenu";
import Footer from "./components/Footer/Footer";
import LocationPath from "./components/_reusable/LocationPath";
import Modal from "./components/_reusable/Modal";

const App = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        dispatch(trySignIn(!!user));
      });
    return () => unregisterAuthObserver();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 4fr 1fr",
          gridTemplateRows: "40px 1fr",
          minHeight: "100vh",
          paddingTop: "200px",
        }}
      >
        <LocationPath />
        <main style={{ gridColumnStart: 2 }}>
          <Router />
        </main>
      </div>
      <Footer />
      {modal && <Modal />}
    </div>
  );
};

export default App;
