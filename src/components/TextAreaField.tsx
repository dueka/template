import React, { useState } from "react";
import { ErrorMessage, useField } from "formik";

interface InputFieldProps {
  label?: string;
  className?: any;
  password?: any;
  name: string;
  placeholder?: string;
}

const TextAreaField = ({
  label,
  className,
  placeholder,
  ...props
}: InputFieldProps) => {
  const [field, meta] = useField(props);
  const [labelColor, setLabelColor] = useState(false);

  const handleFocus = () => {
    setLabelColor(true);
  };

  const handleBlur = () => {
    setLabelColor(false);
  };

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
      <textarea
        className={`input__field ${meta.touched && meta.error && "error"}`}
        {...field}
        {...props}
        rows={4}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoComplete="off"
        placeholder={placeholder}
      />

      <ErrorMessage component="p" name={field.name} className="input__error" />
    </div>
  );
};

export default TextAreaField;
