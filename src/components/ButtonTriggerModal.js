import React from "react";

class ButtonTriggerModal extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
        {this.props.label}
        </button>
      </div>
    );
  }
}

export default ButtonTriggerModal;
