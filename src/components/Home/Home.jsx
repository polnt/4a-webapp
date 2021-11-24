import React from "react";

import SolutionsCarousel from "./elements/SolutionsCarousel";
import CTA from "./elements/CTA";
import Solutions from "./elements/Solutions";

import { GrValidate as ValidIcon } from "react-icons/gr";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "transparent",
          width: "100%",
          height: "800px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            gridColumnStart: "1",
            gridColumnEnd: "4",
          }}
        >
          <h1
            style={{
              color: "#f9f9f9",
              visibility: "hidden",
              position: "absolute",
            }}
          >
            Bienvenue sur le site web de la société 4A
          </h1>

          <section
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <SolutionsCarousel />
          </section>
        </div>
        <div className="divider" style={{ zIndex: 2 }} />
      </div>
      <div
        // className="container_page"
        style={{
          width: "100%",
          // paddingTop: "20px",
          // display: "flex",
          // alignItems: "center",
        }}
      >
        <section
          // className="content_page"
          style={{
            backgroundColor: "#f9f9f9",

            // transition: "1s all ease",
            // visibility: "visible",
            // width: "100%",
            // display: "flex",
            // flexDirection: "column",
            // // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "uppercase",
              fontFamily: "RobotoRegular",
            }}
          >
            <ValidIcon style={{ marginRight: "10px" }} />
            Des solutions adaptées à vos besoins
          </h2>
          <div className="container_page">
            <div
              className="content_page"
              style={{
                display: "flex",
                // flexDirection: "column",
                // alignItems: "center",
                // justifyContent: "center",
                // minHeight: "90vh",
                width: "100%",
              }}
            >
              <CTA />
            </div>
          </div>

          <div
            className="container_page"
            style={
              {
                // backgroundColor: "green",
              }
            }
          >
            <div
              className="content_page"
              style={{
                display: "flex",
                // backgroundColor: "red",
                // width: "100%",
              }}
            >
              <Solutions />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
