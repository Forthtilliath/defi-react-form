import React from "react";
import { NavLink } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import Informations from "../../components/Informations/Informations";
import Coordonnees from "../../components/Coordonnees/Coordonnees";

const Formulaire = (props) => {
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-12 text">
            Nous vous remerçions pour le don que vous vous apprêtez à faire.
            Afin de vous simplifier tout ça, soyez rassuré, nous ferons tout en
            une seule fois. Votre bien être compte pour nous !
            <br />
            Merci de remplir ce formulaire afin de faciliter ce don.
          </div>
        </div>

        <Coordonnees
          setSexe={props.setSexe}
          setLastname={props.setLastname}
          setFirstname={props.setFirstname}
        />

        <Informations sexe={props.sexe} />

        <div className="row mt-3">
          <div className="col-md-12 text" style={{ textAlign: "right" }}>
            <NavLink exact to="/resume">
              <MDBBtn>Valider les informations</MDBBtn>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formulaire;
