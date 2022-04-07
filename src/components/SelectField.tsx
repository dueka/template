import React, { useState } from "react";
import Select from "react-select";
import { ErrorMessage, useField } from "formik";

interface InputFieldProps {
  label?: string;
  className?: any;
  name: string;
  placeholder?: string;
}

const SelectField = ({ label, className, ...props }: InputFieldProps) => {
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
  const [labelColor] = useState(false);

  const customStyles = {
    option: (provided: any) => ({
      ...provided
    }),
    control: (provided: any, state: any) => ({
      // provided adds react-select default styles
      ...provided,
      background: "white",
      height: "36px",
      outline: state.isFocused ? "1px solid #01ffff !important" : "",
      border: state.isFocused ? "1px solid #01ffff !important" : "",
      boxShadow: state.isFocused ? "0 0 0 0.2rem rgb(0 128 128 / 25%)" : ""
    }),
    singleValue: (provided: any) => {
      return { ...provided };
    }
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

      <Select styles={customStyles} options={values} />

      <ErrorMessage component="p" name={field.name} className="input__error" />
    </div>
  );
};

export default SelectField;
