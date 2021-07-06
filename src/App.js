import "./App.scss";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Home from "./pages/Home/Home";
import Formulaire from "./pages/Formulaire/Formulaire";
import Resume from "./pages/Resume/Resume";
import { useEffect } from "react";

// https://mdbootstrap.com/docs/standard/forms/input-fields/
function App() {
  const [sexe, setSexe] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [addressStreet, setAdressStreet] = useState("");
  const [addressBp, setAddressBp] = useState("")
  const [addressCity, setAddressCity] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [formValues, setFormValues] = useState({
    sexe: "z",
    lastname: "",
    firstname: "",
    addressStreet: "",
    addressBp: "",
    addressCity: "",
    phoneNumber: "",
    email: "",
    kidney: "",
    lung: "",
    basic: "",
    skin: "",
    sperm: "",
  });
  // const [kidney, setKidney] = useState(null);

useEffect(() => {
  let temp = '';
  // Retire tous les espaces, puis en ajoute tous les 2 caractères
  temp = phoneNumber.replaceAll(" ", "").replace(/(.{2})(?=.)/g, "$1 ");
  setPhoneNumber(temp);
}, [phoneNumber]);

  const isEmpty = (value) => value === '';

  const verifyForm = () => {
    return !(
      isEmpty(sexe) ||
      isEmpty(lastname) ||
      isEmpty(firstname) ||
      isEmpty(addressStreet) ||
      isEmpty(addressBp) ||
      isEmpty(addressCity) ||
      isEmpty(phoneNumber) ||
      isEmpty(email)
    );
  }

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
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              setEmail={setEmail}
              verifyForm={verifyForm}
              formValues={formValues}
              setFormValues={setFormValues}
            />
          </Route>
          <Route path="/resume" exact>
            <Resume
              sexe={sexe}
              lastname={lastname}
              firstname={firstname}
              addressStreet={addressStreet}
              addressBp={addressBp}
              addressCity={addressCity}
              phoneNumber={phoneNumber}
              email={email}
              verifyForm={verifyForm}
            />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
