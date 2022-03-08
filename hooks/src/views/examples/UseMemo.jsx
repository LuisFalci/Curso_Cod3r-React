import React, { useMemo, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";

// função simula um delay de 2 segundos e depois soma os dois parâmetros passados 
function sum(a, b) {
    const future = Date.now() + 2000
    while(Date.now() < future){}
    return parseInt(a) + parseInt(b)
}
const UseMemo = (props) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);

  // similar ao useEffect, o useMemo guarda algo a ser feito, no caso abaixo chamar a função sum. Também são passados parâmetros para só quando estes parâmetros serem alterados o useMemo ser acionado (no caso se n1 e n2 forem alterado o result será chamado). Assim, não é preciso rodar todos os elementos da página, assim elementos com algum delay só entrarão em cena quando chamados não penalizando outros elementos desassociados que sofreriam com o delay.
  const result = useMemo(() => sum(n1, n2), [n1, n2]);
  return (
    <div className="UseMemo">
      <PageTitle title="Hook UseMemo" subtitle="Retorna um valor memoizado!" />
      <input type="number" 
      className="input"
      value={n1} 
      onChange={(e) => setN1(e.target.value)} />
      <input type="number" 
      className="input"
      value={n2} 
      onChange={(e) => setN2(e.target.value)} />
      <input type="number" 
      className="input"
      value={n3} 
      onChange={(e) => setN3(e.target.value)} />
    <span type="number'" className="text red">{result}</span>
    </div>
  );
};

export default UseMemo;
