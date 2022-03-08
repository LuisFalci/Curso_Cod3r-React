import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [status, setStatus] = useState("")

  // Sempre que o parâmetro entre colchetes ([number]) for alterado, o useEffect roda o que tiver dentro dele
  useEffect(
    function () {
      setFatorial(calcFatorial(number));
    },
    [number]
  );

  //  nesse caso, quando o fatorial é alterado, o useEffect roda o que há dentro dele. Neste caso há uma condição que quando atendida, muda o nome da página
  useEffect(
    function () {
      if (fatorial > 100000) {
        document.title = "eita";
      }
    },
    [fatorial]
  );

  useEffect(
      function(){
        setStatus(parOuImpar(number))
      },
      [number]
  );

  function calcFatorial(num) {
    const n = parseInt(num);
    if (n < 0) return -1;
    if (n === 0) return 1;
    return calcFatorial(n - 1) * n;
  }

  function parOuImpar(n){
      if(n % 2 === 0) return "Par";
      if(n % 2 === 1) return "Ímpar";
      else return "ERRO"
  }
  console.log(fatorial % 2);
  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text">
            {fatorial === -1 ? "Não existe" : fatorial}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        ></input>
      </div>
      <SectionTitle />

      <SectionTitle title="Desafio #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial:</span>
          <span className="text">{fatorial === -1 ? "Não existe" : fatorial}</span>
          <div>
          <input
            type="number"
            className="input"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          ></input>
          </div>
          <div>
          <span className="text red">{status}</span>
          </div>
        </div>
      </div>
      <SectionTitle />
    </div>
  );
};

export default UseEffect;
