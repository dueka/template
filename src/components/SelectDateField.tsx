import React, { useState } from "react";
import Select from "react-select";
import { ErrorMessage, useField } from "formik";

interface InputFieldProps {
  label?: string;
  className?: any;
  subClassName?: any;
  subLabelClassName?: any;
  name: string;
  placeholder?: string;
}

const SelectDateField = ({
  label,
  className,
  subClassName,
  subLabelClassName,
  placeholder,
  ...props
}: InputFieldProps) => {
  const [field, meta] = useField(props);
  const values = [
    "Agriculture, Building/Construction",
    "Business",
    "Education",
    "Health",
    "Household",
    "Skill Development",
    "Vocational Training"
  ];
  const [labelColor, setLabelColor] = useState(false);

  const customStyles = {
    option: (provided: any) => ({
      ...provided
    }),
    control: (provided: any, state: any) => ({
      // provided adds react-select default styles
      ...provided,
      background: "white",
      height: "40px",
      outline: state.isFocused ? "1px solid #01ffff !important" : "",
      border: state.isFocused ? "1px solid #01ffff !important" : "",
      boxShadow: state.isFocused ? "0 0 0 0.2rem rgb(0 128 128 / 25%)" : ""
    }),
    singleValue: (provided: any) => {
      return { ...provided };
    }
  };

  const handleFocus = () => {
    setLabelColor(true);
  };

  const handleBlur = () => {
    setLabelColor(false);
  };

  return (
    <div className={subLabelClassName}>
      <label
        htmlFor={field.name}
        className={`input__label ${meta.touched && meta.error && "error"} ${
          labelColor ? "focused" : ""
        }`}
      >
        {label}
      </label>
      <div className="select_date">
        <input
          className={`input__field ${className} `}
          {...field}
          {...props}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete="off"
          placeholder={placeholder}
        />
        <span style={{ marginLeft: "1rem" }}></span>
        <Select
          styles={customStyles}
          options={values}
          className={subClassName}
        />
      </div>

      <ErrorMessage component="p" name={field.name} className="input__error" />
    </div>
  );
};

export default SelectDateField;
