import React, { useEffect, useLayoutEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { navData } from "../../NavBar/data";

import "../../../css/Home/CTA.css";

const CTA = () => {
  const [toggle, setToggle] = useState({
    pay: false,
    hr: false,
    advice: false,
  });
  const [containerStyle, setContainerStyle] = useState("cta_container");

  const hidedMenuStyle = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    top: 150,
    width: "100%",
  };

  const showMenuStyle = {
    top: 0,
    left: 0,
    bottom: 0,
    backgroundImage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 6%, rgba(0, 0, 0, 0.77))",
    transition: "top 0.25s ease",
  };

  const navLinkMenuStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  };

  const navLinkStyle = {
    textDecoration: "none",
    color: "white",
  };

  useLayoutEffect(() => {
    switch (true) {
      case toggle.pay:
        setContainerStyle("cta_container_focus_first");
        break;
      case toggle.hr:
        setContainerStyle("cta_container_focus_second");
        break;
      case toggle.advice:
        setContainerStyle("cta_container_focus_third");
        break;
      default:
        setContainerStyle("cta_container");
        break;
    }
  }, [toggle]);

  return (
    <div
      className={containerStyle}
      onMouseLeave={() =>
        setToggle({
          pay: false,
          hr: false,
          advice: false,
        })
      }
    >
      <div
        className="cta_card"
        // style={cardStyle}
        onMouseEnter={() =>
          setToggle({
            pay: true,
            hr: false,
            advice: false,
          })
        }
      >
        <div
          style={
            toggle.pay
              ? {
                  ...hidedMenuStyle,
                  ...showMenuStyle,
                }
              : hidedMenuStyle
          }
        >
          <h2>PAIE</h2>
          <div style={navLinkMenuStyle}>
            {toggle.pay &&
              navData[1].children?.map((item) => (
                <NavLink to={item.path} style={navLinkStyle}>
                  {item.title}
                </NavLink>
              ))}
          </div>
        </div>
      </div>
      <div
        className="cta_card"
        onMouseEnter={() =>
          setToggle({
            pay: false,
            hr: true,
            advice: false,
          })
        }
      >
        <div
          style={
            toggle.hr
              ? {
                  ...hidedMenuStyle,
                  ...showMenuStyle,
                }
              : hidedMenuStyle
          }
        >
          <h2>RH</h2>
          <div style={navLinkMenuStyle}>
            {toggle.hr &&
              navData[2].children?.map((item) => (
                <NavLink to={item.path} style={navLinkStyle}>
                  {item.title}
                </NavLink>
              ))}
          </div>
        </div>
      </div>
      <div
        className="cta_card"
        onMouseEnter={() =>
          setToggle({
            pay: false,
            hr: false,
            advice: true,
          })
        }
      >
        <div
          style={
            toggle.advice
              ? {
                  ...hidedMenuStyle,
                  ...showMenuStyle,
                }
              : hidedMenuStyle
          }
        >
          <h2>CONSEIL</h2>
          <div style={navLinkMenuStyle}>
            {toggle.advice &&
              navData[3].children?.map((item) => (
                <NavLink to={item.path} style={navLinkStyle}>
                  {item.title}
                </NavLink>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
