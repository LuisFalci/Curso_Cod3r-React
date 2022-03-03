import React from "react";
import "./index.css"; //importando css
import Familia from "./components/basicos/Familia";
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
        <Card titulo="#04 - Componente com filhos" color="yellow">
          <Familia sobrenome="Lira"></Familia>
        </Card>

        <Card titulo="#03 - Desafio Aleatório" color="green">
          <Aleatorio max={10} min={1} />
        </Card>

        <Card titulo="#02 - Componente com Parâmetros" color="blue">
          <ComParametro aluno="Luis" nota={10.0} />
        </Card>

        <Card titulo="#01 - Primeiro Componente" color="pink">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
}
