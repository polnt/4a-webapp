import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

import solutionsData from "./solutionsData";

import { VscChromeClose as CloseWindowIcon } from "react-icons/vsc";
import { IoIosArrowForward as NextIcon } from "react-icons/io";
import { IoIosArrowBack as PrevIcon } from "react-icons/io";

import "../../../css/Home/Solutions.css";

const Solutions = () => {
  // const [selection, setSelection] = useState("");

  // const handleClick = (event) => {
  //   setSelection(event.target.value);
  // };

  return (
    <Carousel
      prevIcon={<PrevIcon style={{ fontSize: "30px", color: "black" }} />}
      nextIcon={<NextIcon style={{ fontSize: "30px", color: "black" }} />}
    >
      {solutionsData.map((item) => (
        <Carousel.Item
          style={{
            width: "100%",
            height: "500px",
            zIndex: 1,
            backgroundImage: `url(${item.background})`,
            backgroundSize: "cover",
          }}
        >
          <Carousel.Caption
            style={{
              top: "100px",
              right: "20px",
              left: "20px",
              color: "var(--mainGrey)",
            }}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <button type="button" className="custom_btn">
              En savoir plus
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Solutions;
