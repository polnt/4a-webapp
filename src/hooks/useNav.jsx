import { useEffect, useState, useCallback } from "react";

import { useLocation } from "react-router-dom";

const useNav = () => {
  const document = window;
  const location = useLocation().pathname;
  const [toggle, setToggle] = useState({
    pay: false,
    hr: false,
    advice: false,
  });

  const [mobileMenu, setMobileMenu] = useState(false);

  const [scrollY, setScrollY] = useState(document.scrollY);

  const handleScroll = useCallback(() => {
    setScrollY(document.scrollY);
  }, [document.scrollY]);

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll());
    return () => window.removeEventListener("scroll", () => handleScroll());
  }, [document.scrollY, handleScroll]);

  useEffect(() => {
    document.scrollY > 0 && document.scrollTo(0, 0);
  }, [location, document]);

  return { toggle, setToggle, scrollY, mobileMenu, setMobileMenu };
};

export default useNav;
