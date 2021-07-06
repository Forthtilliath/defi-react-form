import React from 'react';
import { NavLink } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";

const Resume = () => {
    return (
      <div>
        <NavLink exact to="/resume">
          <MDBBtn>Retourner à l'accueil</MDBBtn>
        </NavLink>
      </div>
    );
};

export default Resume;