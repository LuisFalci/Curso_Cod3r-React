import React from "react";
import "./Card.css";

export default function Card(props) {

  // React não reconhece hífen, por isso usamos letra maiúscula para separar como o "backgroundColor"
  let cardStyle = {
    backgroundColor: props.color || '#F00',
    borderColor: props.color || '#F00', 
  }

  return (
    <div className="Card" style={cardStyle}>
      {/* className é relativo a classe da tag, não usamos class porque o javascript possui esta propriedade */}
      <div className="Title">{props.titulo}</div>
      <div className="Content">
        {/* O ".children" referencia todos os filhos do componente. Em App, o filho de Card é Aleatório */}
        {props.children}
      </div>
    </div>
  );
}
