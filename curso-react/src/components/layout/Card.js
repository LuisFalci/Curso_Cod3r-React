import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="Card">
      {/* className é relativo a classe da tag, não usamos class porque o javascript possui esta propriedade */}
      <div className="Title">{props.titulo}</div>
      <div className="Content">
        {/* O ".children" referencia todos os filhos do componente. Em App, o filho de Card é Aleatório */}
        {props.children}
      </div>
    </div>
  );
}
