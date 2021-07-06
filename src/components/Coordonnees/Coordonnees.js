import React from 'react';
import Input from "../Input/Input";
import GroupRadio from '../GroupRadio/GroupRadio';
import Title from '../Title/Title';
import datasForm from '../../datas/datasForm';

const Coordonnees = (props) => {
    const { datasSexe } = datasForm;

  return (
    <>
      <Title value="Vos coordonnées" style={{ marginTop: 20 }} />

      <div className="row">
        <div className="col-md-12">
          Quel est votre sexe ?<br />
          <GroupRadio
            name="sexe"
            values={datasSexe}
            defaultChecked="sexe_none"
            labelClass="btn-forth"
            onChange={props.setSexe}
          />
        </div>
      </div>

      <div className="row ">
        <div className="col-md-6">
          <Input
            id="last_name"
            label="Entrez votre nom"
            onChange={props.setLastname}
          />
        </div>
        <div className="col-md-6">
          <Input
            id="first_name"
            label="Entrez votre prénom"
            onChange={props.setFirstname}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <Input
            id="address_street"
            label="Entrez votre adresse"
            onChange={props.setFirstname}
          />
        </div>
      </div>

      <div className="row ">
        <div className="col-md-6">
          <Input
            id="address_bp"
            label="Entrez votre code postal"
            onChange={props.setAddressBp}
          />
        </div>
        {/* https://apicarto.ign.fr/api/codes-postaux/communes/49000 */}
        <div className="col-md-6">
          <Input
            id="address_city"
            label="Entrez votre ville"
            onChange={props.setAddressCity}
          />
        </div>
      </div>

      <div className="row ">
        <div className="col-md-6">
          <Input
            id="phone_number"
            label="Entrez votre téléphone"
            message="Votre téléphone sera bien entendu revendu"
            onChange={props.setPhoneNumber}
          />
        </div>

        <div className="col-md-6">
          <Input
            id="email"
            label="Entrez votre courriel"
            message="Votre email aussi sera revendu au plus grand nombre"
            onChange={props.setEmail}
          />
        </div>
      </div>
    </>
  );
};

export default Coordonnees;