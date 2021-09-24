import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useMoneda } from "../hooks/useMoneda";
import { useCriptomonedas } from "../hooks/useCriptomonedas";
import axios from "axios";
import { Error } from "./Error";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

export const Formulario = ({ setMoneda, setCriptomoneda }) => {
  const [listaCripto, setListaCripto] = useState([]);
  const [error, setError] = useState(false);

  const monedas = [
    { codigo: "USD", nombre: "Dolar Estadounidense" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
  ];
  const [escogerMoneda, SeleccionarMonedas] = useMoneda(
    "Elige tu moneda",
    "",
    monedas
  );

  const [escogerCriptomoneda, SetCriptomoneda] = useCriptomonedas(
    "Elige tu Criptomonedas",
    "",
    listaCripto
  );

  useEffect(() => {
    const consultarApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const resultado = await axios.get(url);
      setListaCripto(resultado.data.Data);
    };
    consultarApi();
  }, []);

  const cotizarMonedas = (e) => {
    e.preventDefault();

    if (escogerMoneda === "" || escogerCriptomoneda === "") {
      setError(true);
      return;
    }

    setError(false);
    setMoneda(escogerMoneda);
    setCriptomoneda(escogerCriptomoneda);
  };

  return (
    <form onSubmit={cotizarMonedas}>
      {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
      <SeleccionarMonedas />
      <SetCriptomoneda />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};
