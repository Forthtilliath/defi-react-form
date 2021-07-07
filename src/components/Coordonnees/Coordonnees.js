import React, { useEffect, useState } from 'react';
import Input from "../Input/Input";
import GroupRadio from '../GroupRadio/GroupRadio';
import Title from '../Title/Title';
import datasForm from '../../datas/datasForm';
import { MDBProgress, MDBProgressBar } from "mdb-react-ui-kit";

const Coordonnees = (props) => {
  const { datasSexe } = datasForm;
  const [progress, setProgress] = useState(0);
  const nbInputs = 8;

  const calcProgress = () => {

  }

  useEffect(() => {

  }, []);


  return (
    <>
      <Title value="Vos coordonnées" style={{ marginTop: 20 }} />
      <MDBProgress>
        <MDBProgressBar
          bgColor="success"
          width={progress} /* TODO Value state */
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
            defaultChecked={props.formValues.sexe}
            labelClass="btn-forth"
            setFormValues={props.setFormValues}
            formValues={props.formValues}
            error={props.errors.sexe}
            errors={props.errors}
            setErrors={props.setErrors}
            required={true}
            setProgress={setProgress}
            nbInputs={nbInputs}
          />
        </div>
      </div>
      <div className="row ">
        <div className="col-md-6">
          <Input
            id="lastName"
            value={props.formValues.lastName}
            label="Entrez votre nom"
            setFormValues={props.setFormValues}
            formValues={props.formValues}
            error={props.errors.lastName}
            errors={props.errors}
            setErrors={props.setErrors}
          />
        </div>
        <div className="col-md-6">
          <Input
            id="firstName"
            value={props.formValues.firstName}
            label="Entrez votre prénom"
            setFormValues={props.setFormValues}
            formValues={props.formValues}
            error={props.errors.firstName}
            errors={props.errors}
            setErrors={props.setErrors}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Input
            id="addressStreet"
            value={props.formValues.addressStreet}
            label="Entrez votre adresse"
            setFormValues={props.setFormValues}
            formValues={props.formValues}
            error={props.errors.addressStreet}
            errors={props.errors}
            setErrors={props.setErrors}
          />
        </div>
      </div>
      <div className="row ">
        <div className="col-md-6">
          <Input
            id="addressBp"
            value={props.formValues.addressBp}
            label="Entrez votre code postal"
            setFormValues={props.setFormValues}
            formValues={props.formValues}
            error={props.errors.addressBp}
            errors={props.errors}
            setErrors={props.setErrors}
            maxLength={5}
            type="number"
          />
        </div>
        {/* https://apicarto.ign.fr/api/codes-postaux/communes/49000 */}
        <div className="col-md-6">
          <Input
            id="addressCity"
            value={props.formValues.addressCity}
            label="Entrez votre ville"
            setFormValues={props.setFormValues}
            formValues={props.formValues}
            error={props.errors.addressCity}
            errors={props.errors}
            setErrors={props.setErrors}
          />
        </div>
      </div>
      <div className="row ">
        <div className="col-md-6">
          <Input
            id="phoneNumber"
            value={props.formValues.phoneNumber}
            label="Entrez votre téléphone"
            message="Votre téléphone sera bien entendu revendu"
            setFormValues={props.setFormValues}
            formValues={props.formValues}
            maxLength={14}
            error={props.errors.phoneNumber}
            errors={props.errors}
            setErrors={props.setErrors}
          />
        </div>

        <div className="col-md-6">
          <Input
            id="email"
            value={props.formValues.email}
            label="Entrez votre courriel"
            message="Votre email aussi sera revendu au plus grand nombre"
            setFormValues={props.setFormValues}
            formValues={props.formValues}
            error={props.errors.email}
            errors={props.errors}
            setErrors={props.setErrors}
          />
        </div>
      </div>
    </>
  );
};

export default Coordonnees;