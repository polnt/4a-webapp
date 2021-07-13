import React, { useLayoutEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { navData } from "../../NavBar/data";

const CTA = () => {
  const [toggle, setToggle] = useState({
    pay: false,
    hr: false,
    advice: false,
  });
  const [containerStyle, setContainerStyle] = useState({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRow: "1fr",
  });

  const cardStyle = {
    border: "1px solid black",
    height: "200px",
    position: "relative",
  };

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
        setContainerStyle({
          ...containerStyle,
          gridTemplateColumns: "2fr 1fr 1fr",
        });
        break;
      case toggle.hr:
        setContainerStyle({
          ...containerStyle,
          gridTemplateColumns: "1fr 2fr 1fr",
        });
        break;
      case toggle.advice:
        setContainerStyle({
          ...containerStyle,
          gridTemplateColumns: "1fr 1fr 2fr",
        });
        break;
      default:
        setContainerStyle({
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRow: "1fr",
        });
        break;
    }
  }, [toggle]);

  return (
    <div
      style={containerStyle}
      onMouseLeave={() =>
        setToggle({
          pay: false,
          hr: false,
          advice: false,
        })
      }
    >
      <div
        style={cardStyle}
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
              navData[0].children?.map((item) => (
                <NavLink to={item.path} style={navLinkStyle}>
                  {item.title}
                </NavLink>
              ))}
          </div>
        </div>
      </div>
      <div
        style={cardStyle}
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
              navData[1].children?.map((item) => (
                <NavLink to={item.path} style={navLinkStyle}>
                  {item.title}
                </NavLink>
              ))}
          </div>
        </div>
      </div>
      <div
        style={cardStyle}
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
              navData[2].children?.map((item) => (
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
