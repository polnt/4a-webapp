import React from "react";

import Router from "./components/Router";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 12fr 1fr",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <Router />
      </main>
      <Footer />
    </div>
  );
};

export default App;
