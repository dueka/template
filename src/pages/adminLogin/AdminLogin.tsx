import React from "react";
import { Helmet } from "react-helmet-async";
import Onboarding from "../../layouts/OnboardingLayout/Onboarding";
import AdminLoginForm from "./adminLogin_forms/AdminLoginForm";
import Image from "../../assets/images/3x.png";

const AdminLogin = () => {
  return (
    <>
      <Helmet>
        <title>Login | Noor Coop </title>
      </Helmet>
      <Onboarding
        heading="Jump right back in 🤟🏾"
        subHeading="Sign into your account"
        imageHeading="Invest & grow"
        image={Image}
        onImage="onboarding-2"
        imageText="Our VFX courses give you the opportunity to experience a collection of disciplines, preparing you for the wide range of careers available in this field, from technical subjects like scripting and simulation"
        copyright="All rights reserved © 2021 NoorCoop"
        terms="Privacy | Terms"
      >
        <AdminLoginForm />
      </Onboarding>
    </>
  );
};
export default AdminLogin;
