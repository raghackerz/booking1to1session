import React from "react";

//styles
import "./ConfirmationModal.css";

//images
import CONFIRMATIONIMAGE from "../../assets/confirmationImage.svg";
import CROSS from "../../assets/cross.svg";

const ConfirmationModal = ({ close }) => {
  return (
    <div className="confirmation__popup__container">
      <div className="confirmation__popup">
        <img className="popup__cross" src={CROSS} alt="" onClick={close} />
        <img className="confirmation__image" src={CONFIRMATIONIMAGE} alt="" />
        <h3 className="confirmation__heading">Awesome</h3>
        <p className="confirmation__text">
          Your session booking has been confirmed. Check your email for details.
        </p>
      </div>
    </div>
  );
};

export default ConfirmationModal;
