import "./App.css";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";

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
  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-md-12 text">
            Nous vous remerçions pour le don que vous vous appretez à faire.
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
            <Input id="phone_number" label="Entrez votre téléphone" />
          </div>
          <div className="col-md-6">
            <Input
              id="email"
              label="Entrez votre courriel"
              message="Votre email sera bien entendu revendu"
            />
          </div>
        </div>
        <Title value="Les informations sur le don" style={{ marginTop: 30 }} />
        Vous avez besoin d'un seul rein, donnez nous l'autre !<br />
        <div className="btn-group">
          <input
            type="radio"
            className="btn-check"
            name="options"
            id="option1"
            autoComplete="off"
          />
          <label className="btn btn-secondary" htmlFor="option1">
            Rein gauche
          </label>

          <input
            type="radio"
            className="btn-check"
            name="options"
            id="option2"
            autoComplete="off"
            checked
          />
          <label className="btn btn-secondary" htmlFor="option2">
            Je les garde
          </label>

          <input
            type="radio"
            className="btn-check"
            name="options"
            id="option3"
            autoComplete="off"
          />
          <label className="btn btn-secondary" htmlFor="option3">
            Rein droit
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
