import React, { Component } from "react";
import Button from "../components/Button";
import Display from "../components/Display";
import "./Calculator.css";

//estado inicial da calculadora
const initialState = {
  // valor inicial do display
  displayValue: "0",
  // variável responsável por limpar o display
  clearDisplay: false,
  // armazenas as operações
  operation: null,
  // array de 2, guarda o anterior e o atual
  values: [0, 0],
  // variável que indica quem é o valor atual no array anterior
  current: 0,
};

export default class Calculator extends Component {
  // clone do estado inicial
  state = { ...initialState };

  // com o construtor, não precisamos mais usar arrow function (=>) para referenciar o elemento atual (.this)
  constructor(props) {
    super(props);
    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }
  // reseta o clone do estado inicial
  clearMemory() {
    this.setState({ ...initialState });
  }

  setOperation(operation) {
    // se o valor atual é a posição 0 do array, iremos limpar o display e colocar o novo valor na segunda posição do array
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true });
    } 
    // caso o array esteja com os dois números (valor atual na segunda posição do array (values[1])), iremos fazer a operação 
    else {
      const equals = operation === "=";
      const currentOperation = this.state.operation;

      const values = [...this.state.values];
      try {
        // a função eval(), permite a realização de contas passando a operação por meio de texto (sem atributos)
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
      } catch (e) {
        values[0] = this.state.values[0];
      }

      values[1] = 0;

      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      });
    }
  }

  addDigit(n) {
    // controle de excessão (não pode ter dois pontos, apenas um)
    if (n === "." && this.state.displayValue.includes(".")) {
      return;
    }
    // ao adicionar um número significativo, limpamos o zero caso haja (zero a esquerda)
    const clearDisplay =
      this.state.displayValue === "0" || this.state.clearDisplay;
    // o valor atual é igual ao do display, porém se o display for ser limpo, o valor atual é vazio
    const currentValue = clearDisplay ? "" : this.state.displayValue;
    // adiciona o valor no display
    const displayValue = currentValue + n;
    // salvo o estado do display, e mudo o clear para false, pois já foi limpo
    this.setState({ displayValue, clearDisplay: false });

    if (n !== ".") {
      const i = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      //O valor atual (i), recebe o novo valor
      values[i] = newValue;
      //Salva o estado do array de valores
      this.setState({ values });
    }
  }

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <Button label="AC" click={this.clearMemory} triple />
        <Button label="/" click={this.setOperation} operation />
        <Button label="7" click={this.addDigit} />
        <Button label="8" click={this.addDigit} />
        <Button label="9" click={this.addDigit} />
        <Button label="*" click={this.setOperation} operation />
        <Button label="4" click={this.addDigit} />
        <Button label="5" click={this.addDigit} />
        <Button label="6" click={this.addDigit} />
        <Button label="-" click={this.setOperation} operation />
        <Button label="1" click={this.addDigit} />
        <Button label="2" click={this.addDigit} />
        <Button label="3" click={this.addDigit} />
        <Button label="+" click={this.setOperation} operation />
        <Button label="0" click={this.addDigit} double />
        <Button label="." click={this.addDigit} />
        <Button label="=" click={this.setOperation} operation />
      </div>
    );
  }
}
