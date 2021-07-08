import React, { useCallback, useEffect, useState } from "react";
import Input from "../Input/Input";
import GroupRadio from "../GroupRadio/GroupRadio";
import Title from "../Title/Title";
import datasForm from "../../datas/datasForm";
import { MDBProgress, MDBProgressBar } from "mdb-react-ui-kit";

const Coordonnees = (props) => {
  const { datasSexe } = datasForm;
  const [progress, setProgress] = useState(0);
  const nbInputs = 8;

  const calcProgress = useCallback(() => {
    let count = 0;
    count += props.formValues.sexe !== "" ? 1 : 0;
    count += props.formValues.lastName !== "" ? 1 : 0;
    count += props.formValues.firstName !== "" ? 1 : 0;
    count += props.formValues.addressStreet !== "" ? 1 : 0;
    count += props.formValues.addressBp !== "" ? 1 : 0;
    count += props.formValues.addressCity !== "" ? 1 : 0;
    count += props.formValues.phoneNumber !== "" ? 1 : 0;
    count += props.formValues.email !== "" ? 1 : 0;
    setProgress(Math.floor((count / nbInputs) * 100));
  }, [
    props.formValues.addressBp,
    props.formValues.addressCity,
    props.formValues.addressStreet,
    props.formValues.email,
    props.formValues.firstName,
    props.formValues.lastName,
    props.formValues.phoneNumber,
    props.formValues.sexe,
  ]);

  useEffect(() => {
    calcProgress();
  }, [calcProgress]);

  return (
    <>
      <Title
        value="Vos coordonnées"
        icon="address-card"
        style={{ marginTop: 20 }}
      />
      <MDBProgress>
        <MDBProgressBar
          bgColor="success"
          width={progress}
          valuemin={0}
          valuemax={100}
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
