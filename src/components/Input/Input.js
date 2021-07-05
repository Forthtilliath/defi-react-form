import React from 'react';
import { MDBInput } from "mdb-react-ui-kit";
import './Input.scss'

const Input = ({ id, label }) => {
  return (
    <MDBInput label={label} id={id} type="text" size="lg" className="input" />
  );
};

export default Input;