import "./App.scss";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Home from "./pages/Home/Home";
import Formulaire from "./pages/Formulaire/Formulaire";
import Resume from "./pages/Resume/Resume";

// https://mdbootstrap.com/docs/standard/forms/input-fields/
function App() {
  const [sexe, setSexe] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [adressStreet, setAdressStreet] = useState("");
  const [addressBp, setAddressBp] = useState("")
  const [addressCity, setAddressCity] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  // const [kidney, setKidney] = useState(null);

  return (
    <BrowserRouter>
      <div className="app text-light bg-dark">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/form" exact>
            <Formulaire
              sexe={sexe}
              setSexe={setSexe}
              setLastname={setLastname}
              setFirstname={setFirstname}
              setAdressStreet={setAdressStreet}
              setAddressBp={setAddressBp}
              setAddressCity={setAddressCity}
              setPhoneNumber={setPhoneNumber}
              setEmail={setEmail}
            />
          </Route>
          <Route path="/resume" exact>
            <Resume />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
