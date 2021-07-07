import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import datasForm from "../../datas/datasForm";
import { useEffect } from "react";

const Resume = ({
  verifyForm,
  formValues,
  setFormValues,
}) => {
  // const history = useHistory();
  const allIsFine = verifyForm(false);

  // useEffect(() => {
  //   if (!allIsFine) {
  //     // history.push("/");
  //   }
  // }, [allIsFine, history, props]);

  const {
    datasSexe,
    datasKidney,
    datasLung,
    datasBasic,
    datasSkin,
    datasSperm,
  } = datasForm;
  return (
    <>
      <div className="container mt-3">
        {allIsFine ? (
          <div className="row">
            <div className="col-md-12 text">
              <div>Récapitulatif des informations :</div>
              <div className="square border border-light rounded p-3">
                {datasSexe.find((sexe) => sexe.id === formValues.sexe)?.name},{" "}
                {formValues.lastname} {formValues.firstname}
                <br />
                {formValues.addressStreet}
                <br />
                {formValues.addressBp}
                {formValues.addressCity}
                <br />
                {formValues.phoneNumber}
                {formValues.email}
                <hr />
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-danger rounded text-light p-3 mt-5">
            Toutes les informations attendues n'ont pas été reçues.
          </div>
        )}
        <div className="row">
          <div className="col-md-12 text" style={{ textAlign: "right" }}>
            <NavLink exact to="/">
              <MDBBtn>Retourner à l'accueil</MDBBtn>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
