import React, { memo, useCallback } from "react";

import { useLocation, NavLink } from "react-router-dom";

const LocationPath = memo(() => {
  const location = useLocation().pathname;

  const handlePath = useCallback(() => {
    let currentPath = "";

    return location.split("/").map((element, index) => {
      if (index === 0) {
        return <NavLink to="/">Accueil</NavLink>;
      } else {
        currentPath += `/${element}`;
        return (
          <NavLink to={currentPath}>{` / ${element
            .split("")
            .map((e, i) => (i > 0 ? e : e.toUpperCase()))
            .join("")
            .replaceAll("-", " ")}`}</NavLink>
        );
      }
    });
  }, [location]);

  return (
    <div
      className="container_page"
      style={
        location.length < 2
          ? {
              backgroundColor: "transparent",
            }
          : { backgroundColor: "#f9f9f9" }
      }
    >
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
