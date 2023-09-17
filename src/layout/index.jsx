import React from "react";
import HeaderDesktop from "../components/HeaderDesktop";
import HeaderMobile from "../components/HeaderMobile";
import useWindowDimensions from "../hook/useWindowDimensions";

import "../scss/global.scss";

const Layout = ({ children }) => {
  const { isMobile } = useWindowDimensions();

  return (
    <>
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
      {children}
      <footer>footer</footer>
    </>
  );
};

export default Layout;
