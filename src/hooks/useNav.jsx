import React, { useEffect, useState } from "react";

const useNav = () => {
  const document = window;
  const [toggle, setToggle] = useState({
    pay: false,
    hr: false,
    advice: false,
  });

  const [scrollY, setScrollY] = useState(document.scrollY);

  const handleScroll = () => {
    setScrollY(document.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll());
    return () => window.removeEventListener("scroll", () => handleScroll());
  }, [document.scrollY]);

  return { toggle, setToggle, scrollY };
};

export default useNav;
