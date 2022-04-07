import React from "react";
import LogoImage from "../assets/images/ncoop-logo.png";

interface LogoProps {
  linkClassName: any;
  imgClassName: any;
}

const Logo = ({ linkClassName, imgClassName }: LogoProps) => {
  return (
    <a
      // href="https://www.noorcoop.com"
      target="_blank"
      rel="noreferrer"
      className={linkClassName}
    >
      <img src={LogoImage} alt="Noor Coop Logo" className={imgClassName} />
    </a>
  );
};
export default Logo;
