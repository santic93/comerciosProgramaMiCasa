import React from "react";


import aberturas from "../data/APP_CAdhaberturas.svg";
import mapa from "../data/mapCeleste.svg";
import wp from "../data/wpCeleste.svg"
import ubicacion from  "../data/mapa.svg"

import datas from "../data/comercios.json";

export default function Aberturas() {
  return (
    <div>
    <h1 className="centrar celeste">ABERTURAS</h1>
      <p className="detalle centrar">
      Consulta donde podes comprar tus materiales con la tarjeta Cabal de los
        programas Municipales
      </p>
    <div className="card-deck row row-cols-1 row-cols-md-3 g-4">
    {datas.COMERCIOS.map((data) =>
        data.RUBRO === "ABERTURAS" ? (
          <div>
            <div className="card text-white border-0">
              <img src={aberturas}  className="card-img" />
              <div className="card-img-overlay abs-center">
                <p className="card-text nombreComercio">{data.NOMBRE}</p>
              </div>
            </div>
            <div  >
            
              <p className="datos" >
                <img
                  src={mapa}
                  alt=""
                  width="35"
                  height="25"
                
                />
                {data.CALLE + " Nº " + data.Nº}
              </p>
             
              <p className="datos" >
                <img
                  src={wp}
                  alt=""
                  width="35"
                  height="25"
                 
                />
                {data.TELEFONO}
              </p>
            
              <a className="mapa" href={data.localizacion} target="_blank">
                Ver Mapa
                <img
                  src={ubicacion}
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
