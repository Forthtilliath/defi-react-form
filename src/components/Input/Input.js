import React from "react";
import { MDBInput } from "mdb-react-ui-kit";
import "./Input.scss";

const Input = ({
  id,
  label,
  message,
  onChange,
  type = "text",
  value,
  maxLength,
  required,
}) => {
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
        onChange={(e) => onChange && onChange(e.target.value)}
        maxLength={maxLength}
        required={required}
      />
      {message && <div className="form-text">{message}</div>}
    </>
  );
};

export default Input;
