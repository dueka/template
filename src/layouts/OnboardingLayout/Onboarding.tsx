import React from "react";
import { ReactNode } from "react";
import Logo from "../Logo";
import { ReactComponent as GreenRound } from "../../assets/vectors/greenRound.svg";
interface OnboardingProps {
  children: ReactNode;
  heading: string;
  image?: any;
  onImage?: any;
  subHeading?: string;
  imageHeading: string;
  imageText: string;
  imageText1?: string;
  copyright: string;
  terms: string;
  step?: any;
  stepHeading?: string;
  subStepHeading?: string;
}

const Onboarding = ({
  children,
  image,
  onImage,
  heading,
  subHeading,
  imageHeading,
  imageText,
  imageText1,
  copyright,
  terms,
  step,
  stepHeading,
  subStepHeading
}: OnboardingProps) => {
  return (
    <div className={`onboarding ${onImage}`}>
      <Logo
        linkClassName="onboarding__logo-container"
        imgClassName="onboarding__logo"
      />
      <section className="onboarding__center">
        <div className="onboarding__center-content">
          <h1 className="onboarding__heading heading-1-bold text-field">
            {step === 2 ? stepHeading : heading}
          </h1>
          {subHeading && (
            <h2 className="onboarding__subheading heading-5-regular text-grey-400">
              {step === 2 ? subStepHeading : subHeading}
            </h2>
          )}
          {children}
        </div>
      </section>
      <section className={"onboarding__right"}>
        <img
          src={image}
          alt="alt"
          style={{ height: "90%", paddingTop: "40px" }}
        />
        <div className="onboarding__right-text text-white">
          <div className="onboarding__right-text-1">
            <GreenRound />
          </div>
          <h3 className="onboarding__right-text-2 heading-1">
            {" "}
            {imageHeading}
          </h3>
          <p className="onboarding__right-text-3 body-text-5-regular">
            {imageText}
          </p>
          <p className="onboarding__right-text-3 body-text-5-regular">
            {imageText1}
          </p>
          <div className="onboarding__right-text-line-1"></div>
          <div className="onboarding__right-text-line-2"></div>
          <div className="onboarding__right-text-line-3"></div>
        </div>
      </section>
      <div className="onboarding__footer">
        <p className="onboarding__footer-text-left body-text-4 text-grey-400">
          {copyright}
        </p>
        <p className="onboarding__footer-text-center body-text-4 text-grey-400">
          {terms}
        </p>
      </div>
    </div>
  );
};

export default Onboarding;
