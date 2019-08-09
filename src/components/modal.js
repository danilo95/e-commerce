import React from 'react';
import ReactDom from 'react-dom';

const Modal = props=>{
console.log(props.show)
  return ReactDom.createPortal(
    <div onClick={props.onDismiss}
    className="ui dimmer modals visible active">
      <div
      onClick={e=>e.stopPropagation()}
       className="ui standar modal visible active">
      <div class="header">{props.title}</div>
      <div class="content">
    <p>{props.content}</p>
  </div>
  <div class="actions">
  {props.actions}
  </div>
  
      </div>
    </div>,document.querySelector('#modal')

  );
};

export default Modal;