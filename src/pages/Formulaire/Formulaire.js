import React from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import Informations from "../../components/Informations/Informations";
import Coordonnees from "../../components/Coordonnees/Coordonnees";
import { useState } from "react";

const Formulaire = (props) => {

  const history = useHistory();
  const [error, setError] = useState(false)

  const handleSubmit = () => {
    if (props.verifyForm()) {
      console.log("all is fine");
      history.push("/resume");
    } else {
      // console.log("c'est le caca", props.verifyForm());
      setError(true)
    }
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12 text">
            Nous vous remerçions pour le don que vous vous apprêtez à faire.
            Afin de vous simplifier tout ça, soyez rassuré, nous ferons tout en
            une seule fois. Votre bien être compte pour nous !
            <br />
            Merci de remplir ce formulaire afin de faciliter ce don.
          </div>
        </div>

        <Coordonnees
          formValues={props.formValues}
          setFormValues={props.setFormValues}
          errors={props.errors}
          setErrors={props.setErrors}
        />

        <Informations
          formValues={props.formValues}
          setFormValues={props.setFormValues}
          errors={props.errors}
          setErrors={props.setErrors}
          error={error}
        />

        <div className="row mt-3">
          <div className="col-md-12 text" style={{ textAlign: "right" }}>
            {/* <NavLink exact to="/resume"> */}
            <MDBBtn onClick={handleSubmit}>Valider les informations</MDBBtn>
            {/* </NavLink> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Formulaire;
