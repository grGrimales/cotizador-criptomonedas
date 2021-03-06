import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
//import imagen from "./cryptomonedas.png";
import axios from "axios";

import "./App.css";
import { Formulario } from "./components/Formulario";
import { Cotizacion } from "./components/Cotizacion";
import { Spinner } from "./components/Spinner";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-size: 50px;
  font-size: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

export const App = () => {
  const [moneda, setMoneda] = useState("");
  const [criptomoneda, setCriptomoneda] = useState("");
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (moneda === "") return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

      const resultado = await axios.get(url);

      setCargando(true);

      setTimeout(() => {
        setCargando(false);
        setResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
      }, 1000);
    };

    cotizarCriptomoneda();
  }, [moneda, criptomoneda]);

  const componente = cargando ? (
    <Spinner />
  ) : (
    <Cotizacion resultado={resultado} />
  );

  return (
    <Contenedor>
      <div>
        <Imagen src={"https://res.cloudinary.com/dcxto1nnl/image/upload/v1642526621/imagenes-paginas/cryptomonedas_s1i5ix.png"} alt="imagen cripto" />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas</Heading>

        <Formulario setMoneda={setMoneda} setCriptomoneda={setCriptomoneda} />
        {componente}
      </div>
    </Contenedor>
  );
};
