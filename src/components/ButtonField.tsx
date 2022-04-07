import React from "react";
import { ReactComponent as PaperClipIcon } from "../assets/vectors/paperclip.svg";

interface ButtonFieldProps {
  label?: string;
  className?: any;
  classNameBtn?: any;
  name: string;
}

const ButtonField = ({
  label,
  className,
  name,
  classNameBtn
}: ButtonFieldProps) => {
  return (
    <div>
      <label className={"agent-project-btn__label"}>{label}</label>
      <button className={`btn-primary-sm ${className}`}>
        <PaperClipIcon width={14} height={14} />
        <span style={{ marginLeft: "auto" }}></span>
        <span className={classNameBtn} style={{ marginRight: "auto" }}>
          {name}
        </span>
      </button>
      <p className="body-text-6" style={{ textAlign: "center" }}>
        Only PDFs, JPGs or PNGs are allowed
      </p>
    </div>
  );
};

export default ButtonField;
