import React, { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseState = (props) => {
  //No useState, passamos o valor inicial da variável. Neste caso, passamos para count o valor 0. O setCount serve para alterarmos o valor do count.
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Inicial...");

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={() => setCount(count - 1)}>
            -1
          </button>
          <button className="btn" onClick={() => setCount(count + 1)}>
            +1
          </button>
          {/* currect é o valor atual do estado */}
          <button className="btn" onClick={() => setCount(currect => currect + 1000)}>
            +1000
          </button>
        </div>
      </div>
      <SectionTitle title="Exercício #02" />
      {/* Através de eventos, utilizando o setState, podemos alterar o estado de um elemento */}
      <input type="text" className="input"
      value={name} onChange={e => setName(e.target.value)} />
      <span className="text">{name}</span>
    </div>
  );
};

export default UseState;
