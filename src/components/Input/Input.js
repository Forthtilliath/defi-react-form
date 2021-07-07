import React from "react";
import { MDBInput } from "mdb-react-ui-kit";
import { isEmpty } from "../utils";
import "./Input.scss";

const Input = ({
  id,
  label,
  message,
  type = "text",
  value,
  maxLength,
  required,
  setFormValues,
  formValues,
  error,
  errors,
  setErrors,
}) => {
  const handleChange = ({ target: { name, value } }) => {
    if (error && !isEmpty[value])
      setErrors({
        ...errors,
        [name]: "",
      });
    // console.log(name,value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <>
      <MDBInput
        label={label}
        id={id}
        name={id}
        type={type}
        size="lg"
        className={`input ${error && "error"}`}
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
        required={required}
      />
      {error && <div className="form-text text-danger">{error}</div>}
      {message && <div className="form-text">{message}</div>}
    </>
  );
};

export default Input;
