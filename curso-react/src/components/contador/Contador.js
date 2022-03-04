import React, { Component } from "react";
import './Contador.css';

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
            numero: this.state.numero + this.state.passo
        })
    }

    decremento = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (evento) => {
        this.setState({
            // o retorno será uma string, colocando o + na frente a string será convertida em inteiro
            passo: +evento.target.value,
        })
    }

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <h3>{this.state.numero}</h3>
        <div>
            <label htmlFor="passoInput"> Passo: </label>
            <input
            id="passoInput"
            type="number"
            value={this.state.passo}
            onChange={this.setPasso}></input>
        </div>
        <button onClick={this.incremento}>+</button>
        <button onClick={this.decremento}>-</button>
      </div>
    );
  }
}

export default Contador;
