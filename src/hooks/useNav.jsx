import React, { useState } from "react";

const useNav = () => {
  const [toggle, setToggle] = useState({
    paie: false,
    rh: false,
    conseil: false,
  });

  return { toggle, setToggle };
};

export default useNav;
