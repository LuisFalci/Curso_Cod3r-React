import React from "react";

export default function IndiretaFilho(props) {

    // Outra forma de criar função:
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50
    const gerarNerd = () =>Math.random() > 0.5
  return (
    <div>
        <div>Filho</div>
        {/* Por meio de função é possível passar informações para o componente pai. O "e" de function é o evento*/}
        <button onClick={
            function(e){
                props.quandoClicar('João', gerarIdade(), gerarNerd)
            }
        }>Fornecer Informações</button>
    </div>
  );
}
