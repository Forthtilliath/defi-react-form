import React from "react";
import GroupRadio from "../GroupRadio/GroupRadio";
import Title from "../Title/Title";
import datasForm from "../../datas/datasForm";

const Informations = ({ sexe }) => {
  const { datasKidney, datasLung, datasBasic, datasSkin, datasSperm } =
    datasForm;

  return (
    <>
      <Title value="Vos informations sur le don" style={{ marginTop: 20 }} />

      <div className="row">
        <div className="col-md-12">
          Souhaitez-vous donner l'un de vos reins ?<br />
          <GroupRadio
            name="kidney"
            values={datasKidney}
            defaultChecked="kidney_none"
            labelClass="btn-forth"
            message="Vous avez besoin d'un seul rein, donnez nous l'autre !"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          Souhaitez-vous donner l'un de vos poumons ?<br />
          <GroupRadio
            name="lung"
            values={datasLung}
            defaultChecked="lung_none"
            labelClass="btn-forth"
            message="Vous avez aussi besoin d'un seul poumon, donnez nous l'autre !"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          Souhaitez-vous en donner votre sang, plaquettes ou plasma ?<br />
          <GroupRadio
            name="basic"
            values={datasBasic}
            defaultChecked="basic_none"
            labelClass="btn-forth"
            message="Nous sommes actuellement en gros manque de donneur de sang !"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          Souhaitez-vous donner un peu de peau ?<br />
          <GroupRadio
            name="skin"
            values={datasSkin}
            defaultChecked="skin_no"
            labelClass="btn-forth"
            message="Ce n'est qu'un peu de peau, ca repoussera !"
          />
        </div>
      </div>

      {sexe === "sexe_man" && (
        <div className="row">
          <div className="col-md-12">
            Souhaitez-vous donner un peu de sperme ?<br />
            <GroupRadio
              name="sperm"
              values={datasSperm}
              defaultChecked="sperm_no"
              labelClass="btn-forth"
              message="Aidez d'autres couples à devenir parents !"
            />
          </div>
        </div>
          )}
    </>
  );
};

export default Informations;
