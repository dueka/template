import React from "react";
import { Helmet } from "react-helmet-async";
import Onboarding from "../../layouts/OnboardingLayout/Onboarding";
import ForgotPasswordForm from "./forgotpassword_forms/ForgotPasswordForm";
import Image from "../../assets/images/4x.png";

const ForgotPassword = () => {
  return (
    <>
      <Helmet>
        <title>Forgot Password | Noor Coop </title>
      </Helmet>
      <Onboarding
        heading="Forgot password?"
        subHeading="Enter the email  associated with your account"
        imageHeading="Forgot your password?"
        image={Image}
        onImage="onboarding-2"
        imageText="Don't fret."
        imageText1="it happends to the best of us."
        copyright="All rights reserved © 2021 NoorCoop"
        terms="Privacy | Terms"
      >
        <ForgotPasswordForm />
      </Onboarding>
    </>
  );
};
export default ForgotPassword;
