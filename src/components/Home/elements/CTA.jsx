import React, { useLayoutEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { useNav } from "../../../hooks";

import { navData } from "../../Navigation/data";

import { BsArrowBarRight as RightArrow } from "react-icons/bs";

import "../../../css/Home/CTA.css";

const CTA = () => {
  const { scrollY } = useNav();
  const [toggle, setToggle] = useState({
    pay: false,
    hr: false,
    advice: false,
  });
  const [containerStyle, setContainerStyle] = useState("cta_container");

  const showMenuStyle = {
    top: 0,
    backgroundImage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.77) 6%, rgba(0, 0, 0, 0.77))",
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
      className={`cta_container ${containerStyle}`}
      style={
        scrollY > 250
          ? { opacity: 1, transition: "all 1000ms ease", transform: "translateY(0%)" }
          : { opacity: 0, transform: "translateY(30%)" }
      }
      onMouseLeave={() =>
        setToggle({
          pay: false,
          hr: false,
          advice: false,
        })
      }
    >
      {[1, 2, 3].map((index) => (
        <div
          className="cta_card"
          key={`cta_${index}`}
          style={{
            position: "relative",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            backgroundImage: `linear-gradient(transparent, var(--mainGrey80)), url(${navData[index].backgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          onTouchStart={() => {
            setToggle({
              [navData[index].id]: true,
            });
          }}
          onMouseEnter={() =>
            setToggle({
              [navData[index].id]: true,
            })
          }
        >
          <section
            className="cta_menu"
            style={toggle[navData[index].id] ? showMenuStyle : { top: 350 }}
          >
            <h2 style={{ color: "#f9f9f9" }}>{navData[index].title}</h2>
            <ul className="cta_list">
              {toggle[navData[index].id] &&
                navData[index].children?.map((item) => (
                  <li style={{ padding: "10px 0 10px 0" }}>
                    <NavLink
                      to={item.path}
                      className="cta_navlink"
                      style={{ color: "#f9f9f9" }}
                    >
                      {item.title}
                      <RightArrow style={{ marginLeft: "10px" }} />
                    </NavLink>
                  </li>
                ))}
            </ul>
          </section>
        </div>
      ))}
    </div>
  );
};

export default CTA;
