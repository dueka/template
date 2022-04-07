import React from "react";
import * as BsIcons from "react-icons/bs";
import { mandateDTOsInterface } from "../../interfaces/approval";

interface ApprovalChainModalProps {
  modalRef: any;
  modalMessage: string;
  modalClose: () => void;
  proceed?: () => void;
  data: mandateDTOsInterface | undefined;
}

const ApprovalChainModal = ({
  modalRef,
  modalMessage,
  modalClose,
  proceed,
  data
}: ApprovalChainModalProps) => {
  return (
    <div className="modal1">
      <div className="modal1__body" ref={modalRef}>
        <div className="modal1__head">
          <h1 className="heading-3">Approval chain details</h1>
          <span className="modal1__right">
            <BsIcons.BsRecordCircle
              onClick={modalClose}
              color="red"
              style={{
                borderRadius: "50%",
                backgroundColor: "red",
                color: "#A4414D",
                fontSize: "14px"
              }}
            />
          </span>
        </div>

        <p className="modal1__text body-text-5-bold text-grey-600">
          {modalMessage}
        </p>
        <div className="modal1__center">
          <div className="modal1__center-title">
            <div className="modal1__center-title-1">
              <h2 className="body-text-5-semibold text-title">
                Approval Chain Name
              </h2>
            </div>
            <div className="modal1__center-title-2">
              <h2 className="body-text-4-semibold ">{data?.type}</h2>
            </div>
          </div>
          <div className="modal1__details">
            <p className="body-text-5-semibold text-grey-600">
              Approval Levels
            </p>
            {data?.definitions.map((item, index) => {
              return (
                <div className="modal1__details-row" key={index}>
                  <div className="modal1__details-row-top">
                    <p className="modal1__details-row-number">{index + 1}</p>
                    <div className="modal1__details-row-column ">
                      <h5 className="body-text-4">djkfkf</h5>
                    </div>
                  </div>
                  <div className="modal1__details-row-bottom">
                    {item.administrators.map((item, index) => {
                      return (
                        <div key={index} className="modal1__details-row-box">
                          <div
                            className="modal1__details-row-box-title body-text-5-semibold"
                            key={index}
                          >
                            {item.firstname}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="modal1__footer">
          <div
            className="modal1__footer-divider"
            style={{
              marginTop: "20px"
            }}
          >
            <button className="modal1__btn-no" onClick={proceed}>
              Edit Approval Chain
            </button>
            <button className="modal1__btn-yes" onClick={modalClose}>
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalChainModal;
