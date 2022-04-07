import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { InputField } from "../../../components";
import "react-phone-input-2/lib/style.css";
import { useLogin } from "../../../lib/query/user";
import { toast } from "react-toastify";
import { encode } from "js-base64";

const AdminLoginForm = () => {
  const { mutate } = useLogin();

  async function handleSubmit(values: { secret: string; username: string }) {
    const encodedString = encode(values.secret);
    const payload = {
      secret: encodedString,
      username: values.username,
      message: ""
    };
    await mutate(payload, {
      onSuccess: async (response: any) => {
        toast.success(response.message);
        window.location.reload();
        window.location.replace("/");
      },
      onError: (err: any) => {
        toast.error(err);
      }
    });
  }

  const validate = Yup.object({
    username: Yup.string().email().required("Email Address is Required"),
    secret: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required")
  });
  return (
    <Formik
      initialValues={{
        username: "",
        secret: ""
      }}
      validationSchema={validate}
      onSubmit={handleSubmit}
    >
      {() => (
        <>
          <Form>
            <InputField
              label="Email address"
              name="username"
              placeholder="Enter Email address"
            />
            <InputField
              label="Password"
              name="secret"
              placeholder="********"
              password
            />
            <div className="onboarding__center-login1">
              <Link
                to="/forgot-password"
                className="heading-5-bold text-csprimary onboarding__form-question-link"
                style={{ textDecoration: "none" }}
              >
                Forgot Password?
              </Link>
            </div>
            <div className="onboarding__center-bottom">
              <button
                className="mt-6 btn-primary-sm block w-full"
                type="submit"
                // disabled={loading}
              >
                {/* {loading && <ButtonSpinner />} */}
                {/* {!loading && <>Login</>} */}
                Sign in
              </button>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default AdminLoginForm;
