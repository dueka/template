import React from "react";
import * as BsIcons from "react-icons/bs";
import { ReactComponent as SearchIcon } from "../../assets/vectors/search.svg";
import { ApprovalChainModalProps } from "../../interfaces/modal";
import { AdminListData } from "./AdminListData";

const AdminListModal = ({
  modalRef,
  modalMessage,
  modalClose
}: ApprovalChainModalProps) => {
  return (
    <div className="modal1">
      <div className="modal1__body" ref={modalRef}>
        <div className="modal1__head">
          <h1 className="heading-3">NoorCoop Admin list</h1>
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
        {/* <div className="modal__border"> */}
        <p className=" body-text-4-semibold text-grey-600">{modalMessage}</p>
        {/* </div> */}
        <div className="modal1__search">
          <div className="modal1__search-body">
            <span className="text-grey-600 body-text-5-semibold">
              Search for recon admins
            </span>
            <div className="modal1__search-icon">
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="modal1__admin">
          {AdminListData.map((item, index) => {
            return (
              <div key={index} className="modal1__admin-center active">
                {/* <div className="modal__admin-tick"></div> */}
                <div className="modal1__admin-center-3">
                  <img
                    src={item.img}
                    alt="admin avatar"
                    className="modal1__admin-img"
                  />
                </div>
                <div className="modal1__admin-center-1">
                  <p className="body-text-4-bold text-black">{item.title}</p>
                </div>
                <div className="modal1__admin-center-2">
                  <p className="body-text-6-semibold text-grey-600">
                    {item.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="modal1__footer1">
          <div
            className="modal1__footer-divider"
            style={{
              marginTop: "20px"
            }}
          >
            <button className="modal1__btn-yes " onClick={modalClose}>
              Confirm Selection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminListModal;
