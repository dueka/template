import React from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../../layouts/Logo";

const ForgotPasswordConfirm = () => {
  const history = useHistory();
  const state: any = history.location.state;
  return (
    <>
      <Logo
        linkClassName="onboarding__logo-container"
        imgClassName="onboarding__logo"
      />
      <div className="onboarding__container">
        <section className="onboarding__container__content">
          <h1 className="onboarding__container__content-header display-2-bold">
            Check your inbox
          </h1>
          <h2 className="onboarding__container__content-header display-3-bold text-grey-300">
            {state?.email}
          </h2>
          <h6 className="onboarding__container__content-header-body text-grey-300">
            A password reset link has been sent to the email address above.
            Please click the password reset link to set new password.
          </h6>
          <section>
            <div className="onboarding__container__content-center">
              <p className="onboarding__container__content-center-text body-text-1 text-grey-300 ">
                Not your email?
              </p>
              <Link
                to="/forgot-password"
                className="onboarding__container__content-center-text  text-csprimary "
                style={{
                  textDecoration: "none",
                  fontSize: "1em",
                  fontWeight: "bold"
                }}
              >
                Enter different email
              </Link>
            </div>
          </section>
          <div className="onboarding__container-footer">
            <p className="onboarding__container-footer-text-center body-text-4 text-grey-400">
              All rights reserved © 2021 NoorCoop
            </p>
            <p className="onboarding__container-footer-text-right body-text-4 text-grey-400">
              Privacy | Terms
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ForgotPasswordConfirm;
