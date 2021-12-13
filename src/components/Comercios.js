import React from "react";

import corralones from "../data/corralones.svg";
import ferreterias from "../data/ferreterias.svg";
import zinguerias from "../data/zinguerias.svg";
import pinturerias from "../data/pinturerias.svg";
import constructoras from "../data/constructoras.svg";
import sanitarios from "../data/sanitarios.svg";
import electricidad from "../data/electricidad.svg";
import vidrierias from "../data/vidrierias.svg";
import aberturas from "../data/aberturas.svg";
import madereras from "../data/madereras.svg";
import revestimientos from "../data/revestimientos.svg";
import amoblamientos from "../data/amoblamientos.svg";
import cerrajerias from "../data/cerrajerias.svg";
import { Link } from "react-router-dom";

export default function Comercios() {
  return (
    <div>
      <h1 className="centrar fontTitulo">COMERCIOS ADHERIDOS</h1>
      <p className="centrar fontSubtitulo">
        Consulta donde podes comprar tus materiales con la tarjeta Cabal de los
        programas Municipales
      </p>
      <div className="row row-cols-3 row-cols-md-2">
        <Link to="/aberturas" style={{ textDecoration: "none" }}>
          <div className="col">
            <div className="col h-100">
              <img src={aberturas} className="card-img-top" alt="..." />
              <div>
                <p className=" fontSubtituloComercio">ABERTURAS</p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/amoblamientos" style={{ textDecoration: "none" }}>
          <div className="col">
            <div className="col h-100">
              <img src={amoblamientos} className="card-img-top" alt="..." />
              <div>
                <p className="fontSubtituloComercio">
                  AMOBLAMIENTOS
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/corralones" style={{ textDecoration: "none" }}>
          <div className="col">
            <div className="col h-100">
              <img
                src={corralones}
                className="card-img-top rounded-circle"
                alt="..."
              />
              <div>
                <p className="fontSubtituloComercio">
                  CORRALONES
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/ferreterias" style={{ textDecoration: "none" }}>
          <div className="col">
            <div className="col h-100">
              <img src={ferreterias} className="card-img-top" alt="..." />
              <div>
                <p className="fontSubtituloComercio">
                  FERRETERIAS
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/constructoras" style={{ textDecoration: "none" }}>
          <div className="col">
            <div className="col h-100">
              <img src={constructoras} className="card-img-top" alt="..." />
              <div>
                <p className="fontSubtituloComercio">
                  CONSTRUCTORAS
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/maderas" style={{ textDecoration: "none" }}>
          <div className="col">
            <div className="col h-100">
              <img src={madereras} className="card-img-top" alt="..." />
              <div>
                <p className="fontSubtituloComercio">
                  MADERERAS
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/sanitarios" style={{ textDecoration: "none" }}>
          <div className="col">
            <div className="col h-100">
              <img src={sanitarios} className="card-img-top" alt="..." />
              <div>
                <p className="fontSubtituloComercio">
                  SANITARIOS
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/revestimientos" style={{ textDecoration: "none" }}>
          <div className="col">
            <div className="col h-100">
              <img src={revestimientos} className="card-img-top" alt="..." />
              <div>
                <p className="fontSubtituloComercio">
                  REVESTIMIENTOS
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/pinturerias" style={{ textDecoration: "none" }}>
          <div className="col">
            <div className="col h-100">
              <img src={pinturerias} className="card-img-top" alt="..." />
              <div>
                <p className="fontSubtituloComercio">
                  PINTURERIAS
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/cerrajerias" style={{ textDecoration: "none" }}>
          <div className="col">
            <div className="col h-100">
              <img src={cerrajerias} className="card-img-top" alt="..." />
              <div>
                <p className="fontSubtituloComercio">
                  CERRAJERIAS
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/electricidad" style={{ textDecoration: "none" }}>
          <div className="col">
            <div className="col h-100">
              <img src={electricidad} className="card-img-top" alt="..." />
              <div>
                <p className="fontSubtituloComercio">
                  ELECTRICIDAD
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/vidrierias" style={{ textDecoration: "none" }}>
          <div className="col">
            <div className="col h-100">
              <img src={vidrierias} className="card-img-top" alt="..." />
              <div>
                <p className="fontSubtituloComercio">
                  VIDRIERIAS
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/zinguerias" style={{ textDecoration: "none" }}>
          <div className="col">
            <div className="col h-100">
              <img src={zinguerias} className="card-img-top" alt="..." />
              <div>
                <p className="fontSubtituloComercio">
                  ZINGUERIAS
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
