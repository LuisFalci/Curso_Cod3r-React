import React, { Component } from "react";
import Botoes from "./Botoes";

import "./Contador.css";
import Display from "./Display";
import PassoForm from "./PassoForm";

class Contador extends Component {
  // Como acessar propriedades da classe: this.props
  // exemplo: this.props.numeroInicial
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  };

  // Outra sintaxe para pegar o props:
  // constructor(props){
  //     super(props)

  //     this.state = {
  //         numero: props.numeroInicial
  //     }
  // }

  // setState é uma função de Component
  // Escrevemos a função assim: inc = () =>, pois toda vez que a função for chamada, this irá apontar para o novo estado da função
  incremento = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  decremento = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  //passo é a quantidade que eu quero decrementar ou incrementar ao valor inicial
  setPasso = (novoPasso) => {
    this.setState({
      // o retorno será uma string, colocando o + na frente a string será convertida em inteiro
      passo: novoPasso,
    });
  };

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display numero={this.state.numero} />
        <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
        <Botoes setInc={this.incremento} setDec={this.decremento}/>
      </div>
    );
  }
}

export default Contador;
