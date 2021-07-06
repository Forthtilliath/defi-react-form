import React from 'react';
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
      <div>
        <NavLink exact to="/form">
          Aller vers le formulaire
        </NavLink>
      </div>
    );
};

export default Home;