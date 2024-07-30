import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <section className="navbar">
      <a href="/#" className="navbar-item">
        Picks
      </a>
      <a href="/#odds-converter" className="navbar-item">
        Odds Converter
      </a>
      <a href="/#arbitrage-calculator" className="navbar-item">
        Arbitrage Calculator
      </a>
    </section>
  );
}

export default Navbar;
