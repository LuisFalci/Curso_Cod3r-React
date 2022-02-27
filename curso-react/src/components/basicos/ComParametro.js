import React from "react";

export default function ComParametro(props) {
  //se nota maior ou igual a 7 retorna aprovado
  const status = props.nota >= 7 ? "Aprovado" : "Recuperação";

  //parâmetros não podem ser alterados (apenas leitura), mas podemos atribuíl-los a outras varíaveis e assim muda-los
  const notaInt = Math.ceil(props.nota);
  return (
    <div>
      <h2>Aluno: {props.aluno}</h2>
      <h2>Nota: {notaInt}</h2>
      <h2>Status: {status}</h2>
    </div>
  );
}
