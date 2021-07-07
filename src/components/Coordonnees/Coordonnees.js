import React from 'react';
import Input from "../Input/Input";
import GroupRadio from '../GroupRadio/GroupRadio';
import Title from '../Title/Title';
import datasForm from '../../datas/datasForm';
import { MDBProgress, MDBProgressBar } from "mdb-react-ui-kit";

const Coordonnees = (props) => {
    const { datasSexe } = datasForm;

  return (
    <>
      <Title value="Vos coordonnées" style={{ marginTop: 20 }} />
      <MDBProgress>
        <MDBProgressBar
          bgColor="success"
          width={75} /* TODO Value state */
          valuemin={0}
          valuemax={100}
          required
        />
      </MDBProgress>
      <div className="row">
        <div className="col-md-12">
          Quel est votre sexe ?<br />
          <GroupRadio
            name="sexe"
            values={datasSexe}
            labelClass="btn-forth"
            setFormValues={props.setFormValues}
            formValues={props.formValues}
            required={true}
          />
        </div>
      </div>
      <div className="row ">
        <div className="col-md-6">
          <Input
            id="lastName"
            label="Entrez votre nom"
            setFormValues={props.setFormValues}
            formValues={props.formValues}
          />
        </div>
        <div className="col-md-6">
          <Input
            id="firstName"
            label="Entrez votre prénom"
            setFormValues={props.setFormValues}
            formValues={props.formValues}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Input
            id="addressStreet"
            label="Entrez votre adresse"
            setFormValues={props.setFormValues}
            formValues={props.formValues}
          />
        </div>
      </div>
      <div className="row ">
        <div className="col-md-6">
          <Input
            id="addressBp"
            label="Entrez votre code postal"
            setFormValues={props.setFormValues}
            formValues={props.formValues}
            maxLength={5}
            type="number"
          />
        </div>
        {/* https://apicarto.ign.fr/api/codes-postaux/communes/49000 */}
        <div className="col-md-6">
          <Input
            id="addressCity"
            label="Entrez votre ville"
            setFormValues={props.setFormValues}
            formValues={props.formValues}
          />
        </div>
      </div>
      <div className="row ">
        <div className="col-md-6">
          <Input
            id="phoneNumber"
            label="Entrez votre téléphone"
            message="Votre téléphone sera bien entendu revendu"
            setFormValues={props.setFormValues}
            formValues={props.formValues}
            value={props.formValues.phoneNumber}
            maxLength={14}
          />
        </div>

        <div className="col-md-6">
          <Input
            id="email"
            label="Entrez votre courriel"
            message="Votre email aussi sera revendu au plus grand nombre"
            setFormValues={props.setFormValues}
            formValues={props.formValues}
          />
        </div>
      </div>
    </>
  );
};

export default Coordonnees;