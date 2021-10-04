import React, { memo, useCallback } from "react";

import { useLocation, NavLink } from "react-router-dom";

const LocationPath = memo(() => {
  const location = useLocation().pathname;

  const handlePath = useCallback(() => {
    let currentPath = "";

    return location.split("/").map((element, index) => {
      if (index === 0) {
        return (
          <NavLink
            key="location_1"
            to="/"
            style={{ color: "var(--mainGrey80)" }}
          >
            Accueil
          </NavLink>
        );
      } else {
        currentPath += `/${element}`;
        return (
          <span>
            {" "}
            /{" "}
            <NavLink
              key={`location_${element}`}
              to={currentPath}
              style={{ color: "var(--mainGrey80)" }}
            >{`${element
              .split("")
              .map((e, i) => (i > 0 ? e : e.toUpperCase()))
              .join("")
              .replaceAll("-", " ")}`}</NavLink>
          </span>
        );
      }
    });
  }, [location]);

  return (
    <>
      <div
        style={
          location === "/"
            ? { position: "absolute", visibility: "hidden" }
            : {
                position: "relative",
                height: "300px",
              }
        }
      >
        <div className="divider" />
      </div>
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
    </>
  );
});

export default LocationPath;
