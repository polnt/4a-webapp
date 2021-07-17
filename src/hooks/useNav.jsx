import { useEffect, useState, useCallback } from "react";

const useNav = () => {
  const document = window;
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

  return { toggle, setToggle, scrollY, mobileMenu, setMobileMenu };
};

export default useNav;
