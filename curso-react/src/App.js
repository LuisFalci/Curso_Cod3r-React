import React from "react";
import "./index.css"; //importando css
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

//export default (props) => {

export default function App(props) {
  return (
    <div id="app">
      <h1>Fundamentos React</h1>
      <Card titulo="#03 - Desafio Aleatório">
        <Aleatorio max={10} min={1} />
      </Card>
 
      <Card titulo="#02 - Componente com Parâmetros">
        <ComParametro aluno="Luis" nota={10.0} />
      </Card>

      <Card titulo="#01 - Primeiro Componente">
        <Primeiro />
      </Card>
    </div>
  );
}
