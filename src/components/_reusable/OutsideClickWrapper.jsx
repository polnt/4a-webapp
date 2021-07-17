import React, { useRef, useEffect, memo, useCallback } from "react";

const OutsideClickWrapper = memo(({ children, toggle }) => {
  const wrapperRef = useRef(null);

  const handleClickOutside = useCallback(
    (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        toggle();
      }
    },
    [wrapperRef, toggle]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.addEventListener("scroll", handleClickOutside);
    };
  }, [wrapperRef, toggle, handleClickOutside]);

  return <div ref={wrapperRef}>{children}</div>;
});

export default OutsideClickWrapper;
