import { Formik, Form } from "formik";
import React, { useState } from "react";
import * as BsIcons from "react-icons/bs";
import PhoneInput from "react-phone-input-2";
import * as Yup from "yup";
import { InputField, TextAreaField } from "..";
import { ReactComponent as UserIcon } from "../../assets/vectors/user-icon.svg";
import "react-phone-input-2/lib/style.css";
import { ApprovalChainModalProps } from "../../interfaces/modal";
import { reformatMobile } from "../../utils/phone-number";
import { VerificationModal } from ".";
import useComponentVisible from "../../hooks/useComponentVisible";

const AddProjectModal = ({ modalRef, modalClose }: ApprovalChainModalProps) => {
  const [payload, setPayload] = useState({});
  const {
    ref: verificationRef,
    isComponentVisible: isVerificationModalVisible,
    setIsComponentVisible: setIsVerificationModalVisible
  } = useComponentVisible(false);

  const handleSubmit = async (values: any) => {
    setIsVerificationModalVisible(true);
    setPayload({
      fullName: values.full_name,
      email: values.email,
      phoneNo: reformatMobile(values.phoneNo),
      bvn: values.bvn,
      address: values.address,
      biography: values.biography,
      accountNumber: values.accountNumber,
      occupation: values.occupation
    });
  };

  const validate = Yup.object().shape({
    full_name: Yup.string().required("Full Name is Required"),
    email: Yup.string().email().required("Email Address is Required"),
    phoneNo: Yup.string(),
    bvn: Yup.string()
      .required("BVN is required")
      .test("validity of length", "Please enter a valid bvn", (val): any => {
        if (val !== undefined) {
          return val !== undefined && val.toString().length > 10;
        }
      }),
    address: Yup.string().required("Address is required."),
    biography: Yup.string().required("Biography is required."),
    accountNumber: Yup.string().required("Account number is required."),
    occupation: Yup.string().required("Occupation is required.")
  });
  return (
    <div className="modal1">
      {isVerificationModalVisible ? (
        <VerificationModal modalRef={verificationRef} payload={payload} />
      ) : (
        <Formik
          initialValues={{
            full_name: "",
            email: "",
            phoneNo: "",
            bvn: "",
            address: "",
            biography: "",
            accountNumber: "",
            occupation: "",
            profilePicture: ""
          }}
          // validator={() => ({})}
          validationSchema={validate}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <>
              <Form>
                <div className="modal1__body" ref={modalRef}>
                  <div className="modal1__head1">
                    <h1 className="heading-3">Add a beneficiary</h1>
                    <span className="modal1__right">
                      <BsIcons.BsRecordCircle
                        onClick={modalClose}
                        color="red"
                        style={{
                          borderRadius: "50%",
                          backgroundColor: "red",
                          color: "#A4414D",
                          fontSize: "14px",
                          cursor: "pointer"
                        }}
                      />
                    </span>
                  </div>

                  <div className="modal1__card">
                    <div className="modal1__icon">
                      <UserIcon width={90} />
                    </div>
                    <p className="modal1__icon-text">Add a profile picture</p>
                    <InputField
                      className="agent-project__modal"
                      label="Beneficiary's full name"
                      name="full_name"
                      placeholder="Enter your full name"
                    />
                    <InputField
                      className="agent-project__modal"
                      label="Beneficiary Biography"
                      name="biography"
                      placeholder="Enter the beneficiary's bio"
                    />
                    <InputField
                      className="agent-project__modal"
                      label="Email address Optional"
                      name="email"
                      placeholder="Enter a valid email address"
                    />
                    <div className="onboarding__login-phone">
                      <label className="input__label">Phone number</label>
                      <PhoneInput
                        value=""
                        inputProps={{
                          name: "phoneNo",
                          required: true
                        }}
                        inputStyle={{
                          background: "4f269f",
                          height: "44px",
                          width: "100%",
                          maxWidth: "35rem"
                        }}
                        inputClass="w-100"
                        containerClass="mb-3"
                        onChange={(telephone) =>
                          formik.setFieldValue("phoneNo", `${"+" + telephone}`)
                        }
                        country={"ng"}
                        placeholder="Enter phone number"
                        defaultErrorMessage="required"
                        enableSearch={true}
                      />
                    </div>
                    <TextAreaField
                      className="agent-project__modal"
                      label="Address"
                      name="address"
                      placeholder="Enter address here"
                    />
                    <InputField
                      className="agent-project__modal"
                      label="Occupation"
                      name="occupation"
                      placeholder="Enter the beneficiary's occuptation"
                    />
                    <InputField
                      className="agent-project__modal"
                      label="Bank Verification Number (BVN)"
                      name="bvn"
                      placeholder="Enter BVN here"
                    />
                    <InputField
                      className="agent-project__modal"
                      label="Account number"
                      name="accountNumber"
                      placeholder="Enter account here"
                    />
                  </div>
                  <div className="modal1__footer1">
                    <button
                      className="mt-6 btn-primary-sm block w-full"
                      type="submit"
                      // disabled={loading}
                    >
                      Add beneficiary
                    </button>
                  </div>
                </div>
              </Form>
            </>
          )}
        </Formik>
      )}
    </div>
  );
};

export default AddProjectModal;
