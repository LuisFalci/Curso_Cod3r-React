import React, { useState } from "react";
import Botao from "./Botao";
import "./Mega.css";

export default function Mega(props) {
  
  // função que gera o número aleatório
  function gerarNumeroNaoContido(min, max, array) {
    // parseInt converte o argumento passado para inteiro
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
    // se o numero já está presente na lista (.includes), fazemos a chamada recursiva da função gerando outro numero aleatório, do contrário retornamos o número aleatório gerado
    return array.includes(aleatorio)
      ? gerarNumeroNaoContido(min, max, array)
      : aleatorio;
  }

  function gerarNumeros(qtde) {
    // Criamos um array do tamanho que definimos na qtde (quantidade), e enchemos ele com zeros (.fill(0))
    const numeros = Array(qtde)
      .fill(0)
      //nums é o novo array com números e serve como "acumulador" do reduce 
      .reduce((nums) => {
        // 
        const novoNumero = gerarNumeroNaoContido(1, 60, nums);
        //retorna um novo array com todos os elementos do array anterior (...nums) + o novo elemento do array (novoNumero)
        return [...nums, novoNumero];
        // atribuimos um valor inicial vazio ([]) para poder rodar o reduce
      }, [])
      // ordenando de forma crescente
      .sort((n1, n2) => n1 - n2);

    return numeros;
  }

  const [qtde, setQtde] = useState(props.qtde || 6);
  const numerosIniciais = gerarNumeros(qtde);
  const [numeros, setNumeros] = useState(numerosIniciais);

  return (
    <div className="Mega">
      <h2>Mega</h2>
      <h3>{numeros.join(" ")}</h3>
      <div>
        <label>Qtde de Números</label>
        <input
          min="6"
          max="17"
          type="number"
          value={qtde}
          onChange={(e) => {
            setQtde(+e.target.value);
            setNumeros(gerarNumeros(+e.target.value));
          }}
        />
      </div>
      <button onClick={(_) => setNumeros(gerarNumeros(qtde))}>
        Gerar Números
      </button>
    </div>
  );
}
