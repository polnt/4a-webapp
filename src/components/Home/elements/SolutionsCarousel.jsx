import React from "react";

import { NavLink } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";

import solutionsData from "./solutionsData";

// import { VscChromeClose as CloseWindowIcon } from "react-icons/vsc";
import { LogoWithPolice } from "../../../assets/svg";

import { IoIosArrowForward as NextIcon } from "react-icons/io";
import { IoIosArrowBack as PrevIcon } from "react-icons/io";

import "../../../css/Home/SolutionsCarousel.css";

const Solutions = () => {
  return (
    <Carousel
      className="solutions_carousel"
      prevIcon={<PrevIcon style={{ fontSize: "60px", color: "white" }} />}
      nextIcon={<NextIcon style={{ fontSize: "60px", color: "white" }} />}
      interval={3000}
      style={{ backgroundOrigin: "border-box" }}
    >
      {[{}, ...solutionsData].map((solution, index) => {
        return (
          <Carousel.Item
            key={index === 0 ? "solution_1" : `${solution.id}`}
            style={{
              width: "100%",
              height: "800px",
              zIndex: 1,
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.77) 6%, rgba(0, 0, 0, 0)), url(${solution.background})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: solution.backgroundPosition || "center",
            }}
          >
            {index === 0 ? (
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
            ) : (
              <Carousel.Caption
                className="solutions_carousel_caption"
                // style={{
                //   top: "250px",
                //   right: "20px",
                //   left: "20px",
                //   color: "white",
                //   padding: "0px 150px 0px 150px",
                // }}
              >
                <div
                  style={{
                    backgroundColor: "rgb(0, 0, 0, 0.5)",
                    borderRadius: "0.3em",
                  }}
                >
                  <h3 style={{ fontSize: "3em" }}>{solution.title}</h3>
                  <p
                    className="solutions_carousel_text"
                    style={{ fontSize: "2em" }}
                  >
                    {solution.text}
                  </p>
                </div>
                <NavLink
                  to={solution.path}
                  className="custom_btn solutions_btn"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  En savoir plus
                </NavLink>
              </Carousel.Caption>
            )}
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Solutions;
