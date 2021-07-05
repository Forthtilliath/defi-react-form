import "./App.css";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container mt-5">
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
            <Input id="last_name" label="Entrez votre adresse" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
