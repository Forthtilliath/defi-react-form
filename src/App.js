import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Informations from "./components/Informations/Informations";
import Coordonnees from "./components/Coordonnees/Coordonnees";



// https://mdbootstrap.com/docs/standard/forms/input-fields/
function App() {
  const [sexe, setSexe] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [kidney, setKidney] = useState(null);

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

          <Coordonnees
            setSexe={setSexe}
            setLastname={setLastname}
            setFirstname={setFirstname}
          />

          <Informations sexe={sexe} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
