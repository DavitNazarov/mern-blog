import React from "react";
import "./SideDrawer.css";
import { CSSTransition } from "react-transition-group";
const SideDrawer = (prop) => {
  return (
    <CSSTransition
      in={prop.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={prop.onClick}>
        {prop.children}
      </aside>
    </CSSTransition>
  );
};

export default SideDrawer;
