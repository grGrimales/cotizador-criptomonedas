import React from "react";
import styled from "@emotion/styled";

const ResultadoDiv = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;

const Parrafo = styled.p`
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;

const Precio = styled.p`
  font-size: 30px;
  span {
    font-weight: bold;
  }
`;

export const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;

  return (
    <ResultadoDiv>
      <Precio>
        El precio es: <span>{resultado.PRICE}</span>{" "}
      </Precio>
      <Parrafo>
        El precio mas alto del día: <span>{resultado.HIGHDAY}</span>{" "}
      </Parrafo>
      <Parrafo>
        El precio bajo del día: <span>{resultado.LOWDAY}</span>{" "}
      </Parrafo>
      <Parrafo>
        VAriación ultimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span>{" "}
      </Parrafo>
      <Parrafo>
        Ultima Actualización: <span>{resultado.LASTUPDATE}</span>{" "}
      </Parrafo>
    </ResultadoDiv>
  );
};
