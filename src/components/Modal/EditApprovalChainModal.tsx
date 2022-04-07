import React from "react";
import * as BsIcons from "react-icons/bs";
import { AdminListModal } from ".";
import useComponentVisible from "../../hooks/useComponentVisible";
import { mandateDTOsInterface } from "../../interfaces/approval";
import { ImageData } from "./ImageData";

interface ApprovalChainModalProps {
  modalRef: any;
  modalMessage: string;
  modalClose: () => void;
  proceed?: () => void;
  data: mandateDTOsInterface | undefined;
}

const EditApprovalChainModal = ({
  modalRef,
  modalMessage,
  modalClose,
  proceed,
  data
}: ApprovalChainModalProps) => {
  const {
    ref: adminListModalRef,
    isComponentVisible: isAdminModalVisible,
    setIsComponentVisible: setIsAdminModalVisible
  } = useComponentVisible(false);

  console.log(data); //eslint-disable-line

  const handleAdminListClick = () => {
    setIsAdminModalVisible(true);
  };
  return (
    <div className="modal1">
      <div className="modal1__body" ref={modalRef}>
        <div className="modal1__head">
          <h1 className="heading-3">Edit approval chain</h1>
          <span className="modal1__right">
            {" "}
            <BsIcons.BsRecordCircle
              onClick={modalClose}
              color="red"
              style={{
                borderRadius: "50%",
                backgroundColor: "red",
                color: "#A4414D",
                fontSize: "12px"
              }}
            />
          </span>
        </div>
        <div className="modal1__border">
          <p className="modal1__text body-text-5-semibold text-black">
            {modalMessage}
          </p>
        </div>

        <div className="modal1__edit">
          <div className="modal1__edit-header">
            <p className="body-text-4-semibold">
              Approval level #1 (This is the first approver)
            </p>
          </div>
          <div
            className="modal1__edit-selection-x"
            style={{
              fontSize: "16px",
              color: "#fa235d"
            }}
          ></div>
          <div className="modal1__edit-selection">
            <div className="modal1__edit-selection-admin">
              <div className="modal1__edit-selection-admin-left">
                {ImageData.map((item, index) => {
                  return (
                    <img
                      key={index}
                      src={item.img}
                      alt="admin"
                      className="modal1__edit-selection-circle"
                    />
                  );
                })}
              </div>
              <div className="modal1__edit-selection-admin-right">
                {" "}
                <button
                  className="modal1__edit-selection-admin-left modal1__btn-admin"
                  onClick={handleAdminListClick}
                >
                  Edit Admin Selection
                </button>
              </div>
            </div>
          </div>
          <div className="modal1__edit-bottom">
            <p className="body-text-4-semibold">
              <span className="modal1__edit-bottom-sign ">+</span>
              Add another level
            </p>
          </div>
        </div>

        <div className="modal1__footer">
          <div
            className="modal1__footer-divider"
            style={{
              marginTop: "20px"
            }}
          >
            <button className="modal1__btn-discard" onClick={proceed}>
              Discard changes
            </button>
            <button className="modal1__btn-yes" onClick={modalClose}>
              Save changes
            </button>
          </div>
        </div>
      </div>
      {isAdminModalVisible && (
        <AdminListModal
          modalRef={adminListModalRef}
          modalMessage="Select the admins you want to assign to this approval level."
          modalClose={() => setIsAdminModalVisible(false)}
        />
      )}
    </div>
  );
};

export default EditApprovalChainModal;
