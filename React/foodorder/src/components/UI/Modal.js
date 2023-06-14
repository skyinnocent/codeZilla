import classes from "./Modal.module.css";
import ReactDom from "react-dom";
const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClick}>
      {" "}
    </div>
  );
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const element = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onClick={props.onClick}></Backdrop>,
        element
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        element
      )}
    </>
  );
};

export default Modal;
