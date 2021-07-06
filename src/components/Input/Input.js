import React from "react";
import { MDBInput } from "mdb-react-ui-kit";
import "./Input.scss";

const Input = ({ id, label, message }) => {
  return (
    <>
      <MDBInput label={label} id={id} type="text" size="lg" className="input" />
      {message && <div className="form-text">{message}</div>}
    </>
  );
};

export default Input;
