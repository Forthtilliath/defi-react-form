import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="text-light">
      <div>
        Toute ressemblance avec des faits réels ne serait que pure et fortuite
        coïncidence
      </div>
      <div>
        Made with ♥ by&nbsp;
        <a
          href="https://github.com/Forthtilliath/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Forth &copy; 2021
        </a>
      </div>
    </footer>
  );
};

export default Footer;
