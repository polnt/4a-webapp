import React from "react";

import NavigationCard from "./elements/NavigationCard";

import { navData } from "./data";

const NavigationPage = ({ index }) => {
  return (
    <div className="container_page cover_page" style={{ position: "relative" }}>
      <div
        className="content_page"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1 style={{ textAlign: "center" }}>{navData[index]?.title}</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {navData[index]?.children?.map((item) => (
            <NavigationCard path={item.path} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationPage;
