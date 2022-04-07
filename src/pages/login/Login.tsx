import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Onboarding from "../../layouts/OnboardingLayout/Onboarding";
import { LoginForm1, LoginForm2 } from "./login_forms/";
import Image from "../../assets/images/1.png";

const LoginForm = () => {
  const [step, setStep] = useState(1);

  return (
    <>
      <Helmet>
        <title>Login | Noor Coop </title>
      </Helmet>
      <Onboarding
        heading="Let's help you get set up"
        subHeading="Let's help you set up your admin account"
        stepHeading="Set up your password"
        subStepHeading="Set up your password to complete your set up"
        image={Image}
        onImage="onboarding-2"
        imageHeading="Empower People "
        imageText="But I must explain to you how all this mistaken idea of denouncing
  pleasure and praising pain was born and I will give you a complete
  account of the system and I will give you a complete account of the
  system"
        copyright="All rights reserved © 2021 NoorCoop"
        terms="Privacy | Terms"
        step={step}
      >
        <div className={step === 1 ? "" : "d-none"}>
          <LoginForm1 setStep={setStep} />
        </div>
        <div className={step === 2 ? "" : "d-none"}>
          <LoginForm2 />
        </div>
      </Onboarding>
    </>
  );
};

export default LoginForm;
