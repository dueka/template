/* eslint-disable no-console */
import React from "react";
import { ApprovalChainModalProps } from "../../interfaces/modal";
import HandIcon from "../../assets/vectors/hand-success.svg";

const VerificationSuccessModal = ({
  modalRef,
  modalClose
}: ApprovalChainModalProps) => {
  return (
    <div className="modal1__body1" ref={modalRef}>
      <div className="modal1__verification-lock">
        <img src={HandIcon} alt="lock" />
      </div>
      <div className="modal1__verification-title">
        <h5>Verification successful</h5>
        <p>
          We were able for find the beneficiary. Now we know they’re real 🙂
        </p>
      </div>

      <div className="modal1__verification-footer1">
        <button
          className="mt-6 btn-primary-sm block w-full"
          onClick={modalClose}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default VerificationSuccessModal;
