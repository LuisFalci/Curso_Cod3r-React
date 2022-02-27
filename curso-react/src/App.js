import React from "react";
import "./index.css"; //importando css
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import "./App.css";

//export default (props) => {

export default function App(props) {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
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
    </div>
  );
}
