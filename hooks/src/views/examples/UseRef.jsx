import React, { useEffect, useRef, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  //count é um objeto
  const count = useRef(0);

  // constantes que terão referência no input
  const myInput1 = useRef(null)
  const myInput2 = useRef(null)

  //o useRef é capaz de computar todas as ações da função. Exemplo:
  //   count.current = count.current + 1;

  //Também é possível computar para determinadas ações, como: sempre que o valor1 for alterado iremos adicionar 1 ao contador
  useEffect(
    function () {
      count.current = count.current + 1;
      //Muda o foco para o Input2
      myInput2.current.focus()
    },
    [value1]
  );

  useEffect(
    function () {
      count.current = count.current + 1;
      myInput1.current.focus()
    },
    [value2]
  );

  const merge = function(s1, s2){
    // const array1 = s1.split("");
    
    //"...s1" converte s1 de string para array.Mapeamos o array s1, e para cada elemento, printamos ele concatenado com a string de posição i do s2  
    return [...s1].map(function(e,i){
      return `${e}${s2[i] || ""}`
    }).join("")
  }

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{merge(value1, value2)} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>

        <input
          type="text"
          className="input"
          ref={myInput1}
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
      </div>
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <input
          type="text"
          className="input"
          ref={myInput2}
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseRef;
