import React, { memo, useCallback } from "react";

import { useLocation, NavLink } from "react-router-dom";

const LocationPath = memo(() => {
  const location = useLocation().pathname;

  const handlePath = useCallback(() => {
    let currentPath = "";

    return location.split("/").map((element, index) => {
      currentPath += `${element}/`;
      return (
        <NavLink to={currentPath}>
          {index > 0
            ? `>${element
                .split("")
                .map((e, i) => (i > 0 ? e : e.toUpperCase()))
                .join("")
                .replaceAll("-", " ")}`
            : "Accueil"}
        </NavLink>
      );
    });
  }, [location]);

  return (
    <div className="container_page">
      <div className="content_page" style={{ gridRowStart: 1 }}>
        <span
          style={
            location.length < 2 ? { display: "none" } : { display: "block" }
          }
        >
          {handlePath()}
        </span>
      </div>
    </div>
  );
});

export default LocationPath;
