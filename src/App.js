import React from "react";

import Router from "./components/Router";
import NavBar from "./components/NavBar/NavBar";
// import MobileNavMenu from "./components/NavBar/MobileNavMenu";
import Footer from "./components/Footer/Footer";
import LocationPath from "./components/_reusable/LocationPath";

const App = () => {
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
    </div>
  );
};

export default App;
