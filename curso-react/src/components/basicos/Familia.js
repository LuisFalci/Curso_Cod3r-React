import React, { cloneElement } from "react";
import FamiliaMembro from "./FamiliaMembro";

export default function Familia(props) {
  return (
    <div>
      {/* .map mapeia todo o objeto de filho. O parâmetro child é o objeto a ser mapeado e i o índice (uma key para rastrear)  */}
      {props.children.map((child, i)=>{
        // cloneElement clona o elemento especificado
        return cloneElement(child, {...props, key: i});
        // outra nomenclatura:
        // return React.cloneElement(child, {...props, key: i});
      })}
    </div>
  );
}
