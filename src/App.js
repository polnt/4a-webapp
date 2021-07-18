import React from "react";

import { useSelector } from "react-redux";

import Router from "./components/Router";
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Footer/Footer";
import LocationPath from "./components/_reusable/LocationPath";
import Modal from "./components/_reusable/Modal";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const { modal } = useSelector((state) => state);

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
