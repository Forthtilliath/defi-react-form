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
  const [formValues, setFormValues] = useState({
    sexe: "",
    lastName: "",
    firstName: "",
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

  const [errors, setErrors] = useState([]);

  useEffect(() => {
    // Retire tous les espaces, puis en ajoute un tous les 2 caractères
    let temp = formValues.phoneNumber
      .replaceAll(" ", "")
      .replace(/(.{2})(?=.)/g, "$1 ");
    setFormValues({ ...formValues, phoneNumber: temp });
  }, [formValues.phoneNumber]);

  const isEmpty = (value) => value === "" || value.length === 0;

  const verifyForm = () => {
    return !(
      isEmpty(formValues.sexe) ||
      isEmpty(formValues.lastName) ||
      isEmpty(formValues.firstName) ||
      isEmpty(formValues.addressStreet) ||
      isEmpty(formValues.addressBp) ||
      isEmpty(formValues.addressCity) ||
      isEmpty(formValues.phoneNumber) ||
      isEmpty(formValues.email)
    );
  };

  return (
    <BrowserRouter>
      <div className="app text-light bg-dark">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/form" exact>
            <Formulaire
              verifyForm={verifyForm}
              formValues={formValues}
              setFormValues={setFormValues}
            />
          </Route>
          <Route path="/resume" exact>
            <Resume
              verifyForm={verifyForm}
              formValues={formValues}
              setFormValues={setFormValues}
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
