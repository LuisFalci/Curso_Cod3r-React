import React from "react";
import DiretaFilho from "./DiretaFilho";

export default function DiretaPai(props) {
  return (
    <div>
      <DiretaFilho nome="Luis" idade={22} nerd={false} />
      <DiretaFilho nome="Rennan" idade={20} nerd={true} />
    </div>
  );
}
