import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Input from "./components/Input/Input";
import GroupRadio from "./components/GroupRadio/GroupRadio";

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
  const datasKidney = [
    { id: "kidney_left", name: "Rein gauche" },
    { id: "kidney_none", name: "Je les garde" },
    { id: "kidney_right", name: "Rein droit" },
  ];
  const datasLung = [
    { id: "lung_left", name: "Poumon gauche" },
    { id: "lung_none", name: "Je les garde" },
    { id: "lung_right", name: "Poumon droit" },
  ];

  return (
    <>
      <div className="app text-light bg-dark">
        <Header />
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="col-md-12 text">
              Nous vous remerçions pour le don que vous vous apprêtez à faire.
              <br />
              Merci de remplir ce formulaire afin de faciliter ce don.
            </div>
          </div>
          <Title value="Vos coordonnées" />
          <div className="row ">
            <div className="col-md-6">
              <Input id="last_name" label="Entrez votre nom" />
            </div>
            <div className="col-md-6">
              <Input id="first_name" label="Entrez votre prénom" />
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
            style={{ marginTop: 30 }}
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
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
