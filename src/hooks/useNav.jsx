import { useState } from "react";

const useNav = () => {
  const [toggle, setToggle] = useState({
    pay: false,
    hr: false,
    advice: false,
  });

  return { toggle, setToggle };
};

export default useNav;
