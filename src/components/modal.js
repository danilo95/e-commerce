import React from "react";
import ReactDom from "react-dom";
import "../components/css/modal.css";
const Modal = props => {
  console.log(props.show);
  return ReactDom.createPortal(
    <div onClick={props.onDismiss(false)} className="modal">
      <div onClick={e => e.stopPropagation()} className="modal-content">
        <span onClick={props.onDismiss(false)} class="close">
          &times;
        </span>
        <h1>
          <i class="far fa-check-circle" />
          {props.title}
        </h1>
        <div class="content">
          <p>{props.content}</p>
        </div>
        <div class="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
