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
  /* POUR SIMPLIFIER LES TESTS */
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
        basic: "basic_blood",
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

  const reset = () => {
    setFormValues(initialeState);
    setErrors({});
    setErrorDon(false);
  };

  const [errors, setErrors] = useState({});
  const [errorDon, setErrorDon] = useState(false);

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

    // Controle des types
    let regexOnyLetters = /^[A-ZÀ-ÚÄ-Ü- ]+$/;
    let regexPhone = /^(?:[\s.-]*\d{2}){5}$/;
    let regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (isEmpty(formValues.lastName.toUpperCase().match(regexOnyLetters))) {
      objErrors.lastName = "Le format du nom n'est pas correct";
    }
    if (isEmpty(formValues.firstName.toUpperCase().match(regexOnyLetters))) {
      objErrors.firstName = "Le format du prénom n'est pas correct";
    }
    if (formValues.addressBp.length !== 5) {
      objErrors.addressBp = "Le format du code postal n'est pas correct";
    }
    if (isEmpty(formValues.addressCity.toUpperCase().match(regexOnyLetters))) {
      objErrors.addressCity = "Le format du nom de la ville n'est pas correct";
    }
    if (
      isEmpty(formValues.phoneNumber.match(regexPhone)) ||
      formValues.phoneNumber.length !== 14
    ) {
      objErrors.phoneNumber = "Le format du téléphone n'est pas correct";
    }
    if (isEmpty(formValues.email.match(regexMail))) {
      objErrors.email = "Le format du mail n'est pas correct";
    }

    // Controle des champs vides
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
    return isEmpty(objErrors);
  };

  const verifyInformations = (withErrors) => {
    let good =
      formValues.kidney !== "kidney_none" ||
      formValues.lung !== "lung_none" ||
      formValues.basic !== "basic_none" ||
      formValues.skin !== "skin_no" ||
      (formValues.sexe === "sexe_man" && formValues.sperm !== "sperm_no");

    withErrors && setErrorDon(!good);
    return good;
  };

  /**
   *
   * @returns {Boolean} True meanses all is fine !
   */
  const verifyForm = (withErrors = false) => {
    let isGoodCoord = verifyCoordonnees(withErrors);
    let isGoodInfoDon = verifyInformations(withErrors);

    return isGoodCoord && isGoodInfoDon;
  };

  return (
    <BrowserRouter>
      <div className="app text-light bg-dark">
        <Header reset={reset} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/form" exact>
            <Formulaire
              verifyForm={verifyForm}
              formValues={formValues}
              setFormValues={setFormValues}
              errors={errors}
              setErrors={setErrors}
              errorDon={errorDon}
              reset={reset}
            />
          </Route>
          <Route path="/resume" exact>
            <Resume
              verifyForm={verifyForm}
              formValues={formValues}
              reset={reset}
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
