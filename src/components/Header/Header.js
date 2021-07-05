import React from 'react';
import './Header.scss'

const Header = () => {
    return (
      <div className="title">
        <h1 className="h1">Formulaire de don</h1>
        <h2 className="h2">
          Venez avec votre corps, repartez avec un coeur bien rempli !
        </h2>
        <hr className="divider" />
      </div>
    );
};

export default Header;