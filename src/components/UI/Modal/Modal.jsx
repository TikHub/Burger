import React, { Component } from "react";
import Wrap from "../../../hoc/Wrap/Wrap";
import Backdrop from "../Backdrop";
import classes from "./Modal.module.css";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }
  // UNSAFE_componentWillUpdate() {
  //   console.log("[Modal] WillUpdate");
  // }
  render() {
    return (
      <Wrap>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Wrap>
    );
  }
}

export default Modal;
