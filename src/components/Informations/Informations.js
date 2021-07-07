import React from "react";
import GroupRadio from "../GroupRadio/GroupRadio";
import Title from "../Title/Title";
import datasForm from "../../datas/datasForm";
import { MDBProgress, MDBProgressBar } from "mdb-react-ui-kit";

const Informations = ({ formValues, setFormValues, error }) => {
  const { datasKidney, datasLung, datasBasic, datasSkin, datasSperm } =
    datasForm;

  return (
    <>
      <Title value="Vos informations sur le don" style={{ marginTop: 20 }} />

      {/* <MDBProgress style={{ backgroundColor: "red" }}> */}
      <MDBProgress>
        <MDBProgressBar
          bgColor="success"
          width={75} /* TODO Value state */
          valuemin={0}
          valuemax={100}
        />
      </MDBProgress>

      {error && (
        <div style={{ marginTop: "1rem" }} className="text-danger">
          Merci de sélectionner au moins un type de don.
        </div>
      )}

      <div className="row">
        <div className="col-md-12">
          Souhaitez-vous donner l'un de vos reins ?<br />
          <GroupRadio
            name="kidney"
            values={datasKidney}
            defaultChecked={formValues.kidney}
            labelClass="btn-forth"
            message="Vous avez besoin d'un seul rein, donnez nous l'autre !"
            setFormValues={setFormValues}
            formValues={formValues}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          Souhaitez-vous donner l'un de vos poumons ?<br />
          <GroupRadio
            name="lung"
            values={datasLung}
            defaultChecked={formValues.lung}
            labelClass="btn-forth"
            message="Vous avez aussi besoin d'un seul poumon, donnez nous l'autre !"
            setFormValues={setFormValues}
            formValues={formValues}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          Souhaitez-vous en donner votre sang, plaquettes ou plasma ?<br />
          <GroupRadio
            name="basic"
            values={datasBasic}
            defaultChecked={formValues.basic}
            labelClass="btn-forth"
            message="Nous sommes actuellement en gros manque de donneur de sang !"
            setFormValues={setFormValues}
            formValues={formValues}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          Souhaitez-vous donner un peu de peau ?<br />
          <GroupRadio
            name="skin"
            values={datasSkin}
            defaultChecked={formValues.skin}
            labelClass="btn-forth"
            message="Ce n'est qu'un peu de peau, ca repoussera !"
            setFormValues={setFormValues}
            formValues={formValues}
          />
        </div>
      </div>

      {formValues.sexe === "sexe_man" && (
        <div className="row">
          <div className="col-md-12">
            Souhaitez-vous donner un peu de sperme ?<br />
            <GroupRadio
              name="sperm"
              values={datasSperm}
              defaultChecked={formValues.sperm}
              labelClass="btn-forth"
              message="Aidez d'autres couples à devenir parents !"
              setFormValues={setFormValues}
              formValues={formValues}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Informations;
