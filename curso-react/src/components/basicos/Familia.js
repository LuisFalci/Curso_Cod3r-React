import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default function Familia(props) {
  return (
    <div>
        {/* Pega apena o atributo do pai */}
        <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}/>
        {/* o "..." pega todo que é passado pelo pai (objeto) */}
        <FamiliaMembro nome="Luis" {...props}/>
        <FamiliaMembro nome="Igor" sobrenome="Falci"/>
    </div>
  );
}
