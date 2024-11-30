import React from "react";

import "./Modal.css";

const ModalOverlay = (props) => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2> {props.header} </h2>
      </header>
      {/* <form onSubmit={}> 
        not finished 
      </form> */}
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (prop) => {
  return <div>Main</div>;
};

export default Modal;