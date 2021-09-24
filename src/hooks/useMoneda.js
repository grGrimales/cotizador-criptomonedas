import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

export const useMoneda = (label, stateInicial, monedas) => {
  const [escogerMoneda, setEscogerMoneda] = useState(stateInicial);

  const SeleccionarMonedas = () => {
    return (
      <Fragment>
        <Label>{label}</Label>
        <Select
          onChange={(e) => setEscogerMoneda(e.target.value)}
          value={escogerMoneda}
        >
          <option value="">-- Seleccione --</option>
          {monedas.map((moneda) => (
            <option key={moneda.codigo} value={moneda.codigo}>
              {moneda.nombre}
            </option>
          ))}
        </Select>
      </Fragment>
    );
  };

  return [escogerMoneda, SeleccionarMonedas, setEscogerMoneda];
};
