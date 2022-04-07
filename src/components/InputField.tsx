import React, { useState, useEffect } from "react";
import { ErrorMessage, useField } from "formik";

interface InputFieldProps {
  label?: string;
  className?: any;
  password?: any;
  name: string;
  placeholder?: string;
  numOfSlot?: number;
  costPerSlot?: number;
  disabled?: boolean;
}

const InputField = ({
  label,
  className,
  password,
  placeholder,
  numOfSlot,
  disabled = false,
  costPerSlot,
  ...props
}: InputFieldProps) => {
  const [field, meta] = useField(props);
  const [labelColor, setLabelColor] = useState(false);

  let type;
  if (password) {
    type = "password";
  } else {
    type = "text";
  }

  const [inputType, setInputType] = useState(type);

  const toggleInputType = () => {
    if (password) {
      if (inputType === "text") {
        setInputType("password");
      }

      if (inputType === "password") {
        setInputType("text");
      }
    }
  };

  const handleFocus = () => {
    setLabelColor(true);
  };

  const handleBlur = () => {
    setLabelColor(false);
  };

  useEffect(() => {
    if (!password) {
      setInputType("text");
    }
  }, [password]);

  return (
    <div className={`input ${className ? className : ""}`}>
      <label
        htmlFor={field.name}
        className={`input__label ${meta.touched && meta.error && "error"} ${
          labelColor ? "focused" : ""
        }`}
      >
        {label}
      </label>
      <input
        className={`input__field ${meta.touched && meta.error && "error"}`}
        {...field}
        {...props}
        type={inputType}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoComplete="off"
        disabled={disabled}
        placeholder={placeholder}
      />
      {numOfSlot && (
        <span style={{ textAlign: "initial" }}>
          <span className="text-csprimary body-text-4-semibold">
            {numOfSlot}
          </span>
          <span className="body-text-4 text-grey-800"> slot = NGN</span>
          <span className="text-csprimary body-text-4-semibold">
            {" "}
            {costPerSlot}
          </span>
        </span>
      )}
      {password && (
        <span
          className={`input__eye heading-2-bold ${
            inputType === "password" ? "close" : ""
          }`}
          onClick={toggleInputType}
        >
          Show
        </span>
      )}
      <ErrorMessage component="p" name={field.name} className="input__error" />
    </div>
  );
};

export default InputField;
