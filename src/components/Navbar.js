import React from "react";
import { Link } from "react-router-dom";
import navbar from "../data/encabezadoFinal.svg";

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/comercios">
        <img src={navbar} alt="" />
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
