import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { ButtonSpinner, InputField } from "../../../components";
import "react-phone-input-2/lib/style.css";
import { useForgotPassword } from "../../../lib/query/user";
import { toast } from "react-toastify";

const ForgotPasswordForm = () => {
  const history = useHistory();

  const { mutate, isLoading } = useForgotPassword();

  async function handleFormSubmit(values: any) {
    await mutate(values, {
      onSuccess: async (response: { email: string; message: string }) => {
        history.push({
          pathname: "/confirm-password",
          state: {
            email: response.email
          }
        });
        toast.success(response.message);
      },
      onError: (err: any) => {
        toast.error(err);
      }
    });
  }

  const validate = Yup.object({
    email: Yup.string().email().required("Email Address is Required")
  });
  return (
    <Formik
      initialValues={{
        email: ""
      }}
      validationSchema={validate}
      onSubmit={handleFormSubmit}
    >
      {() => (
        <>
          <Form>
            <InputField
              label="Email address"
              name="email"
              placeholder="Enter a valid email address"
            />

            <div className="onboarding__center-login">
              <button
                className="mt-1 btn-primary-sm block w-full"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? <ButtonSpinner /> : <>Send Password reset link</>}
              </button>
            </div>
            <div className="onboarding__center-1">
              <Link
                to="/forgot-password"
                className="heading-5-bold text-primary onboarding__form-question-link"
                style={{ textDecoration: "none" }}
              >
                <span className="onboarding__center-1-text">
                  Still got trouble?
                </span>{" "}
                Contact support
              </Link>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default ForgotPasswordForm;
