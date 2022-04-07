/* eslint-disable no-console */
import React from "react";
import { toast } from "react-toastify";
import { Formik, Form } from "formik";
import { ApprovalChainModalProps } from "../../interfaces/modal";
import Lock from "../../assets/vectors/lock.svg";
import { useCreateBeneficary } from "../../lib/query/beneficiary";
import useComponentVisible from "../../hooks/useComponentVisible";
import { VerificationSuccessModal } from ".";
import { client } from "../../lib/client";

const VerificationModal = ({ modalRef, payload }: ApprovalChainModalProps) => {
  const { mutate, isLoading } = useCreateBeneficary();
  const {
    ref: verificationSuccessRef,
    isComponentVisible: isVerificationSuccessModalVisible,
    setIsComponentVisible: setIsVerificationSuccessModalVisible
  } = useComponentVisible(false);

  const handleSubmit = () => {
    const formData = new FormData();
    // loop through values and append to formData
    for (const property in payload) {
      if (payload[property]) {
        formData.append(property, payload[property]);
      }
    }
    client<any>(
      `${process.env.REACT_APP_SERVER_URL}/user/add-beneficiary`,
      "POST",
      {
        body: { formData }
      }
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  async function handleBeneficiaryCreation() {
    const formData = new FormData();
    // loop through the values and append to formData
    for (const property in payload) {
      if (payload[property]) {
        formData.append(property, payload[property]);
      }
    }

    await mutate(formData, {
      onSuccess: async (response: { message: string }) => {
        toast.success(response.message);
      },
      onError: (err: any) => {
        toast.error(err);
      }
    });
  }

  return (
    <div>
      {isVerificationSuccessModalVisible ? (
        <VerificationSuccessModal
          modalRef={verificationSuccessRef}
          modalClose={() => setIsVerificationSuccessModalVisible(false)}
        />
      ) : (
        <div className="modal1__body1" ref={modalRef}>
          <div className="modal1__verification-lock">
            <img src={Lock} alt="lock" />
          </div>
          <div className="modal1__verification-title">
            <h5>Just a quick identity verification</h5>
            <p>
              We&apos;ll confirm the beneficiary&apos;s identity using the
              provided BVN. We <br />
              just need to make sure that they are who they say they are.
            </p>
          </div>
          <Formik
            initialValues={{
              checkbox: ""
            }}
            // validator={() => ({})}
            onSubmit={handleSubmit}
          >
            {() => (
              <>
                <Form>
                  <div className="modal1__verification-footer">
                    <div className="d-flex">
                      <input
                        type="checkbox"
                        name="checkbox"
                        id="checkbox"
                        className="modal1__verification-checkbox"
                      />{" "}
                      <p>Don&apos;t show me this again </p>
                    </div>
                    <button
                      className="mt-6 btn-primary-sm block w-full"
                      type="submit"
                      disabled={isLoading}
                    >
                      Continue
                    </button>
                  </div>
                </Form>
              </>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
};

export default VerificationModal;
