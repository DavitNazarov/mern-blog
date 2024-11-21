import React from "react";
import "./MainHeader.css";

const MainHeader = (prop) => {
  return <header className="main-header"> {prop.children} </header>;
};

export default MainHeader;
