import React from "react";

import { NavLink } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";

import solutionsData from "./solutionsData";

// import { VscChromeClose as CloseWindowIcon } from "react-icons/vsc";
import { LogoWithPolice } from "../../../assets/svg";

import { IoIosArrowForward as NextIcon } from "react-icons/io";
import { IoIosArrowBack as PrevIcon } from "react-icons/io";

import "../../../css/Home/Solutions.css";

const Solutions = () => {
  return (
    <Carousel
      className="custom_carousel"
      prevIcon={<PrevIcon style={{ fontSize: "60px", color: "white" }} />}
      nextIcon={<NextIcon style={{ fontSize: "60px", color: "white" }} />}
    >
      <Carousel.Item
        style={{
          width: "100%",
          height: "800px",
          zIndex: 1,
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.77) 6%, rgba(0, 0, 0, 0.77))",
        }}
      >
        <Carousel.Caption
          style={{
            top: "100px",
            right: "20px",
            left: "20px",
            color: "var(--mainGrey)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "500px",
            }}
          >
            <LogoWithPolice policeColor="white" />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      {solutionsData.map((solution) => (
        <Carousel.Item
          style={{
            width: "100%",
            height: "800px",
            zIndex: 1,
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.77) 6%, rgba(0, 0, 0, 0)), url(${solution.background})`,
            backgroundSize: "cover",
          }}
        >
          <Carousel.Caption
            style={{
              top: "250px",
              right: "20px",
              left: "20px",
              color: "white",
            }}
          >
            <h3>{solution.title}</h3>
            <p>{solution.text}</p>
            <NavLink
              to={solution.path}
              className="custom_btn"
              style={{ textDecoration: "none" }}
            >
              En savoir plus
            </NavLink>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Solutions;
