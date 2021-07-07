import "./App.scss";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Home from "./pages/Home/Home";
import Formulaire from "./pages/Formulaire/Formulaire";
import Resume from "./pages/Resume/Resume";
import { useEffect } from "react";
import { isEmpty } from "./components/utils";

function App() {
  /**
   * POUR SIMPLIFIER LES TESTS
   */
  const in_dev = false;
  const initialeState = in_dev
    ? {
        sexe: "sexe_man",
        lastName: "De La Couette",
        firstName: "Laurent",
        addressStreet: "43 rue des Polochons",
        addressBp: "49000",
        addressCity: "ANGERS",
        phoneNumber: "01 23 45 67 89",
        email: "laurent.delacouette@angers.fr",
        kidney: "kidney_none",
        lung: "lung_none",
        basic: "basic_none",
        skin: "skin_no",
        sperm: "sperm_no",
      }
    : {
        sexe: "",
        lastName: "",
        firstName: "",
        addressStreet: "",
        addressBp: "",
        addressCity: "",
        phoneNumber: "",
        email: "",
        kidney: "kidney_none",
        lung: "lung_none",
        basic: "basic_none",
        skin: "skin_no",
        sperm: "sperm_no",
      };

  const [formValues, setFormValues] = useState(initialeState);

  const [errors, setErrors] = useState({
    sexe: "",
    lastName: "",
    firstName: "",
    addressStreet: "",
    addressBp: "",
    addressCity: "",
    phoneNumber: "",
    email: "",
    don: "",
  });

  useEffect(() => {
    // Retire tous les espaces, puis en ajoute un tous les 2 caractères
    let temp = formValues.phoneNumber
      .replaceAll(" ", "")
      .replace(/(.{2})(?=.)/g, "$1 ");
    setFormValues({ ...formValues, phoneNumber: temp });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValues.phoneNumber]);

  const verifyCoordonnees = (withErrors) => {
    const objErrors = {};

    if (isEmpty(formValues.sexe))
      objErrors.sexe = "Merci de sélectionner un sexe";
    if (isEmpty(formValues.lastName))
      objErrors.lastName = "Merci de saisir votre nom";
    if (isEmpty(formValues.firstName))
      objErrors.firstName = "Merci de saisir votre prénom";
    if (isEmpty(formValues.addressStreet))
      objErrors.addressStreet = "Merci de saisir votre adresse";
    if (isEmpty(formValues.addressBp))
      objErrors.addressBp = "Merci de saisir votre code postal";
    if (isEmpty(formValues.addressCity))
      objErrors.addressCity = "Merci de saisir votre ville";
    if (isEmpty(formValues.phoneNumber))
      objErrors.phoneNumber = "Merci de saisir votre numéro de téléphone";
    if (isEmpty(formValues.email))
      objErrors.email = "Merci de saisir votre email";

    withErrors && setErrors({ ...objErrors });
    return objErrors !== {};
  };

  const verifyInformations = () => {
    return (
      formValues.kidney !== "kidney_none" ||
      formValues.lung !== "lung_none" ||
      formValues.basic !== "basic_none" ||
      formValues.skin !== "skin_no" ||
      (formValues.sexe === "sexe_man" && formValues.sperm !== "sperm_no")
    );
  };

  /**
   *
   * @returns {Boolean} True meanses all is fine !
   */
  const verifyForm = (withErrors = false) => {
    return verifyCoordonnees(withErrors) && verifyInformations();
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
              errors={errors}
              setErrors={setErrors}
            />
          </Route>
          <Route path="/resume" exact>
            <Resume
              verifyForm={verifyForm}
              formValues={formValues}
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
