import React from "react";
import { MDBInput } from "mdb-react-ui-kit";
import "./Input.scss";

const Input = ({ id, label, message, onChange, type = "text", value, icon }) => {
  return (
        <>
      {icon && (
        <span className="input-group-text" id="inputGroupPrepend">
          {icon}
        </span>
      )}
      <MDBInput
        label={label}
        id={id}
        name={id}
        type={type}
        size="lg"
        className="input"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
      {message && <div className="form-text">{message}</div>}
    </>
  );
};

export default Input;
