import "./App.css";
import Input from "./components/Input/Input";


function App() {
  return (
    <div className="app">
      <div className="title">
        <h1 className="h1">Formulaire de don</h1>
        <h2 className="h2">
          Venez avec votre corps, repartez avec un coeur bien rempli !
        </h2>
        <hr className="divider" />
      </div>
      <div className="container mt-5">
        <div className="row ">
          <div className="col-md-6">
            <Input id="last_name" label="Entrez votre nom" />
            <Input id="last_name" label="Entrez votre adresse" />
          </div>

          <div className="col-md-6">
            <Input id="first_name" label="Entrez votre prénom" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
