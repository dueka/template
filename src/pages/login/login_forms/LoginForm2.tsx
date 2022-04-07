import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
// import axios from "axios";
import PasswordStrengthBar from "react-password-strength-bar";
import "react-phone-input-2/lib/style.css";
import { InputField } from "../../../components";
import { useCompleteSignup } from "../../../lib/query/user";
import { toast } from "react-toastify";
import { encode } from "js-base64";

const LoginForm2 = () => {
  const { mutate } = useCompleteSignup();
  const handleSubmit = async (values: any) => {
    const encodedString = encode(values.password);
    const payload = {
      secret: encodedString
    };

    await mutate(payload, {
      onSuccess: async (response: any) => {
        toast.success(response.message);
        window.location.replace("/");
      },
      onError: (err: any) => {
        toast.error(err);
      }
    });
  };
  const validate = Yup.object({
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required")
  });

  return (
    <Formik
      initialValues={{
        password: ""
      }}
      validationSchema={validate}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <>
          <Form>
            <InputField
              label="Password"
              name="password"
              placeholder="********"
              password
            />
            <PasswordStrengthBar
              password={values.password}
              style={{
                width: "100%",
                maxWidth: "350px"
              }}
            />
            <div className="onboarding__login">
              <Link
                to="/forgot-password"
                className="heading-4-regular text-primary onboarding__form-question-link"
                style={{ textDecoration: "none" }}
              >
                {/* Why do you need my BVN? */}
              </Link>
              <div className="onboarding__login-1">
                <button
                  className="mt-6 btn-primary-sm block w-full"
                  type="submit"
                  // disabled={loading}
                >
                  {/* {loading && <ButtonSpinner />} */}
                  {/* {!loading && <>Login</>} */}
                  Complete setup
                </button>
              </div>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default LoginForm2;
