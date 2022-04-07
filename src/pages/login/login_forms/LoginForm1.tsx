import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import { InputField } from "../../../components";
import "react-phone-input-2/lib/style.css";
import { useSignup } from "../../../lib/query/user";
import { toast } from "react-toastify";
import { reformatMobile } from "../../../utils/phone-number";

interface LoginFormProps {
  setStep: any;
  vlaues?: any;
}

const LoginForm1 = ({ setStep }: LoginFormProps) => {
  const { mutate } = useSignup();
  const history = useHistory();
  const stateObject: any = history?.location?.state;
  const handleSubmit = async (values: any) => {
    const payload = {
      fullname: values.full_name,
      phoneNo: reformatMobile(values.telephone),
      bvn: values.bvn_number
    };
    await mutate(payload, {
      onSuccess: async (response: any) => {
        toast.success(response.message);
        setStep(2);
      },
      onError: (err: any) => {
        toast.error(err);
      }
    });
  };
  const validate = Yup.object().shape({
    full_name: Yup.string().required("Full Name is Required"),
    telephone: Yup.string(),
    bvn_number: Yup.string()
      .required("BVN is required")
      .test("validity of length", "Please enter a valid bvn", (val): any => {
        if (val !== undefined) {
          return val !== undefined && val.toString().length === 11;
        }
      })
  });
  return (
    <Formik
      initialValues={{
        email: "",
        full_name: "",
        telephone: "",
        bvn_number: ""
      }}
      validationSchema={validate}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <>
          <Form>
            <InputField
              label="Email address"
              name="email"
              disabled={true}
              placeholder={stateObject?.username || "Enter Email address"}
            />
            <InputField
              label="Full name"
              name="full_name"
              placeholder="Enter your full name"
            />
            <div className="onboarding__login-phone">
              <label className="input__label">Phone number</label>
              <PhoneInput
                value=""
                inputProps={{
                  name: "telephone",
                  required: true
                }}
                inputStyle={{
                  background: "4f269f",
                  height: "44px",
                  width: "100%",
                  maxWidth: "350px"
                }}
                inputClass="w-100"
                containerClass="mb-3"
                onChange={(telephone) =>
                  formik.setFieldValue("telephone", `${"+" + telephone}`)
                }
                country={"ng"}
                placeholder="Enter your phone number"
                defaultErrorMessage="required"
                enableSearch={true}
              />
            </div>
            <InputField
              label="Bank Verification Number (BVN)"
              name="bvn_number"
              placeholder="Enter your BVN here"
            />
            <div className="onboarding__login">
              <div className="onboarding__login-top">
                <Link
                  to="#"
                  className="heading-5-semibold text-csprimary onboarding__form-question-link"
                  style={{ textDecoration: "none" }}
                >
                  Why do you need my BVN?
                </Link>
              </div>
              <div className="onboarding__login-bottom">
                <button
                  className="mt- btn-primary-sm block w-full"
                  type="submit"
                  // disabled={loading}
                >
                  {/* {loading && <ButtonSpinner />} */}
                  {/* {!loading && <>Login</>} */}
                  Continue
                </button>
              </div>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default LoginForm1;
