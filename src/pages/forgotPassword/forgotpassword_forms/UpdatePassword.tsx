import React from "react";
import { Helmet } from "react-helmet-async";
import { Onboarding } from "../../../layouts/OnboardingLayout";
import Image from "../../../assets/images/4x.png";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { InputField } from "../../../components";
import PasswordStrengthBar from "react-password-strength-bar";
import { useResetPassword } from "../../../lib/query/user";
import { toast } from "react-toastify";
import storage from "../../../utils/storage";
import { tempKey } from "../../../utils/constants";
import { useHistory } from "react-router-dom";
import { encode } from "js-base64";
import { Routes } from "routes/routes-constants";

const UpdatePassword = () => {
  const history = useHistory();
  const { mutate, isLoading } = useResetPassword();
  const handleSubmit = async (values: any) => {
    const encodedString = encode(values.password);
    const payload: { secret: string; message: string } = {
      secret: encodedString,
      message: ""
    };
    await mutate(payload, {
      onSuccess: async (response: any) => {
        toast.success(response.message);
        storage.remove(tempKey);
        history.push(Routes.Login);
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
    <>
      <Helmet>
        <title>change Password | Noor Coop </title>
      </Helmet>

      <Onboarding
        heading="Reset Password"
        subHeading="Set your new password"
        imageHeading="Forgot your password?"
        image={Image}
        onImage="onboarding-2"
        imageText="Don't fret."
        imageText1="it happends to the best of us."
        copyright="All rights reserved © 2021 NoorCoop"
        terms="Privacy | Terms"
      >
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
                  <div className="onboarding__login-1">
                    <button
                      className="mt-6 btn-primary-sm block w-full"
                      type="submit"
                      disabled={isLoading}
                    >
                      Reset Password
                    </button>
                  </div>
                </div>
              </Form>
            </>
          )}
        </Formik>
      </Onboarding>
    </>
  );
};

export default UpdatePassword;
