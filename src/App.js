import React from "react";

import Router from "./components/Router";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Router />
      </main>
      <Footer />
    </div>
  );
};

export default App;
