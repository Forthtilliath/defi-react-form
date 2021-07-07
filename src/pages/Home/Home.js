import React from "react";
import { NavLink } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import './Home.scss'

const Home = () => {
  return (
    <div className="container d-flex flex-column align-items-center mt-3">
      <div className="content">
        <span>
          Bienvenue sur le site non officiel de don d'organes et de sang. Faites
          don d'une partie de vous, et vous repartirez avec une dose incroyable
          de dopamine !
        </span>
        <span>Vous devez être majeur et résider en France pour pouvoir donner.</span>
      </div>
      <img src="/assets/blood.svg" alt="don" style={{ width: "50vw" }} />
      <NavLink exact to="/form">
        <MDBBtn>Commencer le formulaire</MDBBtn>
      </NavLink>
    </div>
  );
};

export default Home;
