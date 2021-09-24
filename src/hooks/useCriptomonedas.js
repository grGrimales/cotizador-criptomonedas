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

export const useCriptomonedas = (label, stateInicial, monedas) => {
  const [escogerCriptoMoneda, setEscogerCriptoMoneda] = useState(stateInicial);

  const SeleccionarCripto = () => {
    return (
      <Fragment>
        <Label>{label}</Label>
        <Select
          onChange={(e) => setEscogerCriptoMoneda(e.target.value)}
          value={escogerCriptoMoneda}
        >
          <option value="">-- Seleccione --</option>
          {monedas.map((moneda) => (
            <option key={moneda.CoinInfo.Id} value={moneda.CoinInfo.Name}>
              {moneda.CoinInfo.FullName}
            </option>
          ))}
        </Select>
      </Fragment>
    );
  };

  return [escogerCriptoMoneda, SeleccionarCripto, setEscogerCriptoMoneda];
};
