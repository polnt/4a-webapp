import React from "react";

import { useLocation } from "react-router-dom";

const LocationPath = () => {
  const location = useLocation().pathname;

  return (
    <div style={{ gridColumnStart: 2 }}>
      <span
        style={location.length < 2 ? { display: "none" } : { display: "block" }}
      >
        Accueil{location}
      </span>
    </div>
  );
};

export default LocationPath;
