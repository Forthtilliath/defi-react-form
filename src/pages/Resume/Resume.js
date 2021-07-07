import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import datasForm from "../../datas/datasForm";
import { useEffect } from "react";
import { timestampParser, generateDate } from "../../components/utils";

const Resume = ({ verifyForm, formValues, setFormValues }) => {
  // const history = useHistory();
  const allIsFine = verifyForm(false);

  // useEffect(() => {
  //   if (!allIsFine) {
  //     // history.push("/");
  //   }
  // }, [allIsFine, history, props]);
  const dateRdv = timestampParser(generateDate());

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
          <>
            <div className="row">
              <div className="col-md-12 text">
                Merci beaucoup pour ces dons que vous allez faire ! Cela va
                aider un grand nombre de personnes.
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text">
                Nous sommes fabuleux, nous sommes magnifique, nous avons donc
                décidé du jour où vous viendriez faire ces dons. Pensez à bien
                l'enregistrer :
                <span
                  style={{
                    fontWeight: "bold",
                    display: "block",
                    marginLeft: "1rem",
                  }}
                >
                  {"⇨"} {dateRdv}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text">
                <div>Récapitulatif des informations :</div>
                <div className="square border border-light rounded p-3">
                  <div>
                    {
                      datasSexe.find((sexe) => sexe.id === formValues.sexe)
                        ?.name
                    }
                    , {formValues.lastName} {formValues.firstName}
                  </div>
                  <div>{formValues.addressStreet}</div>
                  <div>
                    {formValues.addressBp} {formValues.addressCity}
                  </div>
                  <div>
                    {formValues.phoneNumber} {formValues.email}
                  </div>
                  <hr />
                  {formValues.kidney !== "kidney_none" && (
                    <div>
                      Don d'un rein :{" "}
                      {
                        datasKidney.find(
                          (kidney) => kidney.id === formValues.kidney
                        )?.name
                      }
                    </div>
                  )}
                  {formValues.lung !== "lung_none" && (
                    <div>
                      Don d'un poumon :{" "}
                      {
                        datasLung.find((lung) => lung.id === formValues.lung)
                          ?.name
                      }
                    </div>
                  )}
                  {formValues.basic !== "basic_none" && (
                    <div>
                      Don lié au sang :{" "}
                      {
                        datasBasic.find((basic) => basic.id === formValues.basic)
                          ?.name
                      }
                    </div>
                  )}
                  {formValues.skin !== "skin_none" && (
                    <div>
                      Don de peau :{" "}
                      {
                        datasSkin.find((skin) => skin.id === formValues.skin)
                          ?.name
                      }
                    </div>
                  )}
                  {formValues.sperm !== "sperm_none" && (
                    <div>
                      Don de sperme :{" "}
                      {
                        datasSperm.find((sperm) => sperm.id === formValues.sperm)
                          ?.name
                      }
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
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
