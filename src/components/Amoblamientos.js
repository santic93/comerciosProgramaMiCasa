import React from "react";
import amoblamientos from "../data/amoblamientosNombre.svg";
import mapCeleste from "../data/ubicacionAzul.svg";
import wpAzul from "../data/wpAzul.svg";
import mapa from "../data/mapa.svg";

import datas from "../data/comercios.json";

export default function Amoblamientos() {
  return (
    <div>
      <h1 className="centrar azul">AMOBLAMIENTOS</h1>
      <p className="detalle centrar">
        Consulta donde podes comprar tus materiales con la tarjeta Cabal de los
        programas Municipales
      </p>

      <div className="card-deck row row-cols-1 row-cols-md-3 g-4">
      {datas.COMERCIOS.map((data) =>
        data.RUBRO === "AMOBLAMIENTOS" ? (
          <div>
            <div className="card text-white border-0">
              <img src={amoblamientos} className="card-img" />
              <div className="card-img-overlay abs-center">
                <p className="card-text nombreComercio">{data.NOMBRE}</p>
              </div>
            </div>
            <div >
              <p className="datos" >
                <img
                  src={mapCeleste}
                  alt=""
                  width="35"
                  height="25"
                
                />
                {data.CALLE + " Nº " + data.Nº}
              </p>
              <p  className="datos">
                <img
                  src={wpAzul}
                  alt=""
                  width="35"
                  height="25"
                 
                />
                {data.TELEFONO}
              </p>
              <a className="mapa" href={data.localizacion} target="_blank">
                Ver Mapa
                <img
                  src={mapa}
                  alt=""
                  width="35"
                  height="25"
                 
                />
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

