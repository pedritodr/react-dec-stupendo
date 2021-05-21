import React, { useEffect, useState } from "react";

const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 640;
  const breakpointT = 1007;
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width, breakpoint, breakpointT };
};

export default useViewport;
