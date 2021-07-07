import React from "react";
import { MDBInput } from "mdb-react-ui-kit";
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
}) => {

  const handleChange = ({ target: { name, value } }) => {
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
        className="input"
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
        required={required}
      />
      {message && <div className="form-text">{message}</div>}
    </>
  );
};

export default Input;
