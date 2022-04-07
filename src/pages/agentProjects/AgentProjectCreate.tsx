import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  InputField,
  SelectDateField,
  SelectField,
  TextAreaField
} from "../../components";
import { ReactComponent as CaretLeft } from "../../assets/vectors/caret-left.svg";
import GalleryIcon from "../../assets/vectors/gallery-icon.svg";
import { ButtonField } from "../../components";
import useComponentVisible from "../../hooks/useComponentVisible";
import { AddProjectModal } from "../../components/Modal";

const AgentProjectCreate = () => {
  const {
    ref: modalRef,
    isComponentVisible: isAddModalVisible,
    setIsComponentVisible: setIsAddModalVisible
  } = useComponentVisible(false);

  const handleClick = () => {
    setIsAddModalVisible(true);
  };

  const [slotBased, setSlotBased] = useState(false);

  const handleSubmit = (values: any) => {
    console.log("clicked", values); //eslint-disable-line
  };
  const validate = Yup.object({
    email: Yup.string().email().required("Email Address is Required"),
    full_name: Yup.string().required("Full Name is Required"),
    telephone: Yup.string(),
    bvn_number: Yup.number().required("Bank Verification Number is Required")
  });

  const handleSwitch = (e: any) => {
    e.stopPropagation();
    setSlotBased(true);
  };
  return (
    <>
      <div className="view-dashboard">
        <div className="agent-project-line">
          <div className="agent-project__column">
            <div className="agent-project-header">
              <div className="agent-project-icon">
                <CaretLeft />
              </div>
              <div className="agent-project-text heading-3-semibold">
                Add a project
              </div>
            </div>
          </div>
        </div>
        <div
          className="agent-project-space"
          style={{ paddingTop: "4rem" }}
        ></div>

        <Formik
          initialValues={{
            beneficiary_name: ""
          }}
          validationSchema={validate}
          onSubmit={handleSubmit}
        >
          <div className="agent-project-container">
            <div className="agent-project-card">
              <div className="agent-project-card-header">
                <h5 className="heading-4-semibold agent-project-card-dot">
                  Beneficiary selection
                </h5>
              </div>
              <div className="agent-project-form">
                <div className="agent-project-form">
                  <div className="agent-project-row">
                    <InputField
                      className="agent-project__field"
                      label="Select from your beneficiary list"
                      name="beneficiary_name"
                      placeholder="Type the beneficiary's name here"
                    />
                    <a
                      onClick={handleClick}
                      className="agent-project-btn mt-6 btn-primary-sm block w-full"
                    >
                      Add a beneficiary
                    </a>
                  </div>
                  <div className="agent-project-row ">
                    <ButtonField
                      name="Upload the beneficiary's credit report"
                      label="Beneficiary's credit report"
                      className="agent-project-btn__upload"
                      classNameBtn="agent-project-btn__size"
                    />
                    <span style={{ marginLeft: "1rem" }}></span>
                    <ButtonField
                      name="Upload the beneficiary's bank account statement"
                      label="Beneficiary's bank account statement"
                      className="agent-project-btn__upload"
                      classNameBtn="agent-project-btn__size"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="agent-project-card">
              <div className="agent-project-card-header">
                <h5 className="heading-4-semibold agent-project-card-dot">
                  Project Information
                </h5>
              </div>
              <div className="agent-project-form">
                <div className="agent-project-form">
                  <div className="agent-project-row">
                    <InputField
                      className="agent-project__field"
                      label="Project name"
                      name="project_name"
                      placeholder="Enter the short, concise project name"
                    />
                    <span style={{ marginLeft: "1rem" }}></span>
                    <SelectField
                      className="agent-project__field"
                      label="Project category"
                      name="project_category"
                      placeholder="Select a category from the dropdown"
                    />
                  </div>
                  <div className="agent-project-row ">
                    <TextAreaField
                      className="agent-project__textarea"
                      label="Project description"
                      name="project_description"
                      placeholder="Enter a project description"
                    />
                  </div>
                  <div className="agent-project-row">
                    <InputField
                      className="agent-project__field"
                      label="Funds required"
                      name="funds_required"
                      placeholder="How much does the project need?"
                    />
                    <span style={{ marginLeft: "1rem" }}></span>
                    <InputField
                      className="agent-project__field"
                      label="Noor Coop percentage return"
                      name="project_category"
                      placeholder="Enter percentage Noor Coop will keep from the returns of the project"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="agent-project-card">
              <div className="agent-project-card-header d-flex mb-3 ml-3">
                <h5 className="heading-4-semibold agent-project-card-dot">
                  Make this a Slot-based Project
                </h5>
                <span style={{ marginLeft: "1rem" }}></span>
                <Form.Switch
                  id="custom-switch"
                  label=""
                  className="agent-project-switch"
                  onChange={handleSwitch}
                  style={{
                    cursor: "pointer",
                    color: "#4f269f"
                  }}
                />
              </div>
              <div className="agent-project-form">
                {slotBased ? (
                  <div className="agent-project-form">
                    <div className="agent-project-row">
                      <InputField
                        className="agent-project__field"
                        label="Number of slots"
                        name="project_name"
                        numOfSlot={1}
                        costPerSlot={0}
                        placeholder="Enter the number of slots for this project"
                      />
                      <span style={{ marginLeft: "1rem" }}></span>
                      <div style={{ marginBottom: "1.7rem" }}>
                        <InputField
                          className="agent-project__field"
                          label="Max slots per Member"
                          name="project_category"
                          placeholder="Enter the maximum number of slots a member can purchase"
                        />
                      </div>
                    </div>
                    <div className="agent-project-row ">
                      <InputField
                        className="agent-project__field"
                        label="Projected Profit for members"
                        name="projected_profit"
                        placeholder="Enter the projected profit for members"
                      />
                      <span style={{ marginLeft: "1rem" }}></span>
                      <SelectDateField
                        subLabelClassName="agent-project__label"
                        subClassName="agent-project__select"
                        className="agent-project__date"
                        label="Expected duration of returns"
                        name="date_duration"
                      />
                    </div>

                    <div className="agent-project-row">
                      <InputField
                        className="agent-project__field"
                        label="Location of the project"
                        name="funds_required"
                        placeholder="Enter the location of the project"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="agent-project-form">
                    <div className="agent-project-row">
                      <InputField
                        className="agent-project__field"
                        label="Lowest Contribution Allowed"
                        name="lowest_contribution_allowed"
                        numOfSlot={1}
                        costPerSlot={0}
                        placeholder="&#x20a6; 20,000"
                      />
                      <span style={{ marginLeft: "1rem" }}></span>
                      <div style={{ marginBottom: "1.7rem" }}>
                        <InputField
                          className="agent-project__field"
                          label="Projected profit for member"
                          name="project_category"
                          placeholder="Enter the projected profit for members"
                        />
                      </div>
                    </div>
                    <div className="agent-project-row ">
                      <SelectDateField
                        subLabelClassName="agent-project__label"
                        subClassName="agent-project__select"
                        className="agent-project__date"
                        label="Expected duration of returns"
                        name="date_duration"
                      />
                      <span style={{ marginLeft: "1rem" }}></span>
                      <InputField
                        className="agent-project__field"
                        label="Location of the project"
                        name="projected_profit"
                        placeholder="Enter the location of the project"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="agent-project_dotted-container">
              <div className="agent-project-dotted">
                <img
                  src={GalleryIcon}
                  alt=""
                  style={{ maxWidth: "30px", color: "#4f269f" }}
                />
                <p className="body-text-4">
                  Drop your project image(s) here,{" "}
                  <span className="body-text-4 text-csprimary">or browse</span>{" "}
                </p>
                <span className="body-text-6">
                  JPG and PNG images are allowed for upload
                </span>
              </div>
            </div>
            <div className="agent-project-card">
              <div className="agent-project-card-header">
                <h5 className="heading-4-semibold agent-project-card-dot">
                  Vendor Information
                </h5>
              </div>
              <div className="agent-project-form">
                <div className="agent-project-form">
                  <div className="agent-project-row">
                    <InputField
                      className="agent-project__field"
                      label="Vendor's name"
                      name="vendors_name"
                      placeholder="Enter the vendor's name"
                    />
                    <span style={{ marginLeft: "1rem" }}></span>

                    <SelectField
                      className="agent-project__field"
                      label="Account type"
                      name="account_type"
                      placeholder="Choose an account type"
                    />
                  </div>
                  <div className="agent-project-row ">
                    <InputField
                      className="agent-project__field"
                      label="Account number"
                      name="account_number"
                      placeholder="Enter account number"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="agent-project-card">
              <div className="agent-project-card-header">
                <h5 className="heading-4-semibold agent-project-card-dot">
                  Analyst&apos;s Comment
                </h5>
              </div>
              <div className="agent-project-form">
                <div className="agent-project-form">
                  <div className="agent-project-row">
                    <TextAreaField
                      className="agent-project__textarea"
                      label="Drop comment below"
                      name="analyst_comment"
                      placeholder="Enter comment here"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              className="agent-project-btn1 mt-6 btn-primary-sm block w-full"
              type="submit"
              // disabled={loading}
            >
              {/* {loading && <ButtonSpinner />} */}
              {/* {!loading && <>Login</>} */}
              Send for approval
            </button>
          </div>
        </Formik>
      </div>
      {isAddModalVisible && (
        <AddProjectModal
          modalRef={modalRef}
          modalClose={() => setIsAddModalVisible(false)}
          proceed={() => [
            setIsAddModalVisible(false)
            // setIsVerificationModalVisible(true)
          ]}
        />
      )}
      {/* {isVerificationModalVisible && (
      //   <VerificationModal modalRef={verificationRef} />
      // )} */}
    </>
  );
};

export default AgentProjectCreate;
