import React from "react";


import datas from "../data/comercios.json";
import ferreterias from "../data/APP_CAdh_div_ferreterias.svg";
import map from "../data/ubicacionVerdeClaro.svg";
import wp from "../data/wpVerdeClaro.svg";
import localizacion from "../data/mapa.svg";

export default function Ferreterias() {
  return (
    <div>
    <h1 className="centrar verde">FERRETERIAS</h1>
    <p className="detalle centrar">
    Consulta donde podes comprar tus materiales con la tarjeta Cabal de los
        programas Municipales
      </p>
   
      <div className="card-deck row row-cols-1 row-cols-md-3 g-4">
        {datas.COMERCIOS.map((data) =>
          data.RUBRO === "FERRETERIAS" ? (
            <div>
              <div className="card text-white border-0">
                <img src={ferreterias} className="card-img" />
                <div className="card-img-overlay abs-center">
                  <p className="card-text nombreComercio">{data.NOMBRE}</p>
                </div>
              </div>
              <div>
                <p className="datos">
                  <img src={map} alt="" width="35" height="25" />
                  {data.CALLE + " Nº " + data.Nº}
                </p>
                <p className="datos">
                  <img src={wp} alt="" width="35" height="25" />
                  {data.TELEFONO}
                </p>
                <a className="mapa" href={data.localizacion} target="_blank">
                  Ver Mapa
                  <img src={localizacion} alt="" width="35" height="25" />
                </a>
              </div>
            </div>
          ) : (
            !data.RUBRO
          )
        )}
      </div>
    </div>
  );
}
