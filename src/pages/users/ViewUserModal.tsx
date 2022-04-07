import React from "react";
import { Modal } from "react-bootstrap";
import { userInfoInterface } from "../../interfaces/users";
import { MaskPhoneNumber } from "../../utils/number-formatter";

interface ViewUserModalProps {
  isViewUserModal: boolean;
  handleClose: Function;
  selectedUserDetails?: userInfoInterface;
  toggleActivation: Function;
}

const ViewUserModal: React.FC<ViewUserModalProps> = ({
  isViewUserModal,
  handleClose,
  selectedUserDetails,
  toggleActivation
}) => {
  return (
    <Modal show={isViewUserModal} onHide={() => handleClose()}>
      <div className="modal-custom-header">
        User information{" "}
        <div className="cancel-button" onClick={() => handleClose()}>
          <div className="cancel-button__inner"></div>
        </div>
      </div>
      <div className="modal-custom-body">
        <div>
          <img
            src={selectedUserDetails?.profilePicture}
            style={{ maxWidth: "60px", margin: "auto", display: "flex" }}
          />

          <div className="agent-info">
            <p style={{ color: "#989CA5", fontSize: "13px" }}>
              Agent information
            </p>
            <div className="agent-info__container">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <p
                    style={{
                      color: "#989CA5",
                      fontSize: "13px",
                      margin: "0",
                      padding: "0"
                    }}
                  >
                    Email address
                  </p>
                  <p
                    style={{
                      color: "#06232C",
                      fontSize: "13px",
                      marginBottom: "0",
                      paddingBottom: "0"
                    }}
                  >
                    {selectedUserDetails?.email}
                  </p>
                </div>

                <div className="col-md-6 mb-3">
                  <p
                    style={{
                      color: "#989CA5",
                      fontSize: "12px",
                      margin: "0",
                      padding: "0"
                    }}
                  >
                    Phone number
                  </p>
                  <p
                    style={{
                      color: "#06232C",
                      fontSize: "12px",
                      marginBottom: "0",
                      paddingBottom: "0"
                    }}
                  >
                    {selectedUserDetails?.phoneNo}
                  </p>
                </div>

                <div className="col-md-6 mb-3">
                  <p
                    style={{
                      color: "#989CA5",
                      fontSize: "12px",
                      margin: "0",
                      padding: "0"
                    }}
                  >
                    BVN
                  </p>
                  <p
                    style={{
                      color: "#06232C",
                      fontSize: "13px",
                      marginBottom: "0",
                      paddingBottom: "0"
                    }}
                  >
                    {MaskPhoneNumber(selectedUserDetails?.bvn || "").slice(
                      0,
                      15
                    )}
                  </p>
                </div>

                <div className="col-md-6 mb-3">
                  <p
                    style={{
                      color: "#989CA5",
                      fontSize: "12px",
                      margin: "0",
                      padding: "0"
                    }}
                  >
                    Address
                  </p>
                  <p
                    style={{
                      color: "#06232C",
                      fontSize: "12px",
                      marginBottom: "0",
                      paddingBottom: "0"
                    }}
                  >
                    {selectedUserDetails?.address}
                  </p>
                </div>
              </div>
            </div>

            {selectedUserDetails?.type === "AGENT" && (
              <>
                <p style={{ color: "#989CA5", fontSize: "13px" }}>
                  Project information
                </p>
                <div className="agent-info__container">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <p
                        style={{
                          color: "#989CA5",
                          fontSize: "13px",
                          margin: "0",
                          padding: "0"
                        }}
                      >
                        Total number of project
                      </p>
                      <p
                        style={{
                          color: "#06232C",
                          fontSize: "13px",
                          marginBottom: "0",
                          paddingBottom: "0"
                        }}
                      >
                        {selectedUserDetails?.projects}
                      </p>
                    </div>

                    <div className="col-md-6 mb-3">
                      <p
                        style={{
                          color: "#989CA5",
                          fontSize: "13px",
                          margin: "0",
                          padding: "0"
                        }}
                      >
                        Total number of Beneficiaries
                      </p>
                      <p
                        style={{
                          color: "#06232C",
                          fontSize: "13px",
                          marginBottom: "0",
                          paddingBottom: "0"
                        }}
                      >
                        {selectedUserDetails?.beneficiaries}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="row mb-3">
              <div className="col-md-6"></div>
              <div className="col-md-6 d-flex justify-content-end">
                <button
                  className="mt- btn-danger block w-full px-4"
                  type="submit"
                  onClick={() => toggleActivation(selectedUserDetails?.pk)}
                >
                  {!selectedUserDetails?.deactivated
                    ? "Deactivate this user"
                    : "Activate this user"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Modal.Footer></Modal.Footer> */}
    </Modal>
  );
};

export default ViewUserModal;
