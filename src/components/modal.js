import React from "react";
import "./css/modal.css";
class Modal extends React.Component {
  render() {
    return (
      <>
        <div className="modal">hey this a div dude
        <button onClick={this.props.onClose}>Close</button>
        </div>
      </>
    );
  }
}

export default Modal;
