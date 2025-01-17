import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import { CSSTransition } from "react-transition-group";
import Backdrop from "./Backdrop";
const ModalOverlay = (props) => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2> {props.header} </h2>
      </header>
      <form
        onSubmit={props.onSubmit ? props.onSubmit : (e) => e.preventDefault()}
      >
        <div className={` modal__content ${props.contentClass} `}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (prop) => {
  return (
    <>
      {prop.show && <Backdrop onClick={prop.onCancel} />}
      <CSSTransition
        in={prop.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...prop} />
      </CSSTransition>
    </>
  );
};

export default Modal;
