import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Input from "./components/Input/Input";
import GroupRadio from "./components/GroupRadio/GroupRadio";
import { useState } from "react";
import { useEffect } from "react";

const Title = ({ value, style }) => {
  return (
    <div className="row" style={style}>
      <div className="col-md-12">
        <h3 className="h3">{value} :</h3>
      </div>
    </div>
  );
};

// https://mdbootstrap.com/docs/standard/forms/input-fields/
function App() {
  const [sexe, setSexe] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [kidney, setKidney] = useState(null);

  const datasSexe = [
    { id: "sexe_woman", name: "Femme" },
    { id: "sexe_man", name: "Homme" },
    { id: "sexe_other", name: "Autre" },
  ];
  const datasKidney = [
    { id: "kidney_left", name: "Rein gauche" },
    { id: "kidney_none", name: "Je le(s) garde" },
    { id: "kidney_right", name: "Rein droit" },
  ];
  const datasLung = [
    { id: "lung_left", name: "Poumon gauche" },
    { id: "lung_none", name: "Je le(s) garde" },
    { id: "lung_right", name: "Poumon droit" },
  ];
  const datasBasic = [
    { id: "basic_blood", name: "Sang" },
    { id: "basic_platelets", name: "Plaquettes" },
    { id: "basic_plasma", name: "Plasma" },
    { id: "basic_none", name: "Aucun" },
  ];
  const datasSkin = [
    { id: "skin_yes", name: "Oui je le veux !" },
    { id: "skin_no", name: "Non" },
  ];
  const datasSperm = [
    { id: "sperm_yes", name: "Oui je le veux !" },
    { id: "sperm_no", name: "Non" },
  ];

  const msg = () => {
    console.log('coucou')
  }

  useEffect(() => {}, []);

  return (
    <>
      <div className="app text-light bg-dark">
        <Header />
        <div className="container">
          <div className="row mt-3">
            <div className="col-md-12 text">
              Nous vous remerçions pour le don que vous vous apprêtez à faire.
              Afin de vous simplifier tout ça, soyez rassuré, nous ferons tout
              en une seule fois. Votre bien être compte pour nous !
              <br />
              Merci de remplir ce formulaire afin de faciliter ce don.
            </div>
          </div>
          <Title value="Vos coordonnées" style={{ marginTop: 20 }} />

          <div className="row">
            <div className="col-md-12">
              Quel est votre sexe ?<br />
              <GroupRadio
                name="sexe"
                values={datasSexe}
                defaultChecked="sexe_none"
                labelClass="btn-forth"
                onChange={setSexe}
              />
            </div>
          </div>

          <div className="row ">
            <div className="col-md-6">
              <Input
                id="last_name"
                label="Entrez votre nom"
                onChange={setLastname}
              />
            </div>
            <div className="col-md-6">
              <Input
                id="first_name"
                label="Entrez votre prénom"
                onChange={setFirstname}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <Input id="address_street" label="Entrez votre adresse" />
            </div>
          </div>

          <div className="row ">
            <div className="col-md-6">
              <Input id="address_bp" label="Entrez votre code postal" />
            </div>
            {/* https://apicarto.ign.fr/api/codes-postaux/communes/49000 */}
            <div className="col-md-6">
              <Input id="address_city" label="Entrez votre ville" />
            </div>
          </div>

          <div className="row ">
            <div className="col-md-6">
              <Input
                id="phone_number"
                label="Entrez votre téléphone"
                message="Votre téléphone sera bien entendu revendu"
              />
            </div>

            <div className="col-md-6">
              <Input
                id="email"
                label="Entrez votre courriel"
                message="Votre email aussi sera revendu au plus grand nombre"
              />
            </div>
          </div>

          <Title
            value="Vos informations sur le don"
            style={{ marginTop: 20 }}
          />

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
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
